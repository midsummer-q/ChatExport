import EventEmitter from 'mitt'
import { RateLimitError } from '../api'
import { sleep } from './utils'

type RequestFn<T> = () => Promise<T>

interface RequestObject<T> {
    name: string
    request: RequestFn<T>
}

interface InternalRequestObject<T> extends RequestObject<T> {
    retries: number
}

export type RequestStatus = 'processing' | 'retrying' | 'rate_limited'
export type QueueTerminalStatus = 'completed' | 'cancelled' | 'failed'

export interface QueueFailure {
    name: string
    error: unknown
}

export interface QueueOutcome<T> {
    status: QueueTerminalStatus
    results: T[]
    failures: QueueFailure[]
}

interface ProgressEvent {
    total: number
    completed: number
    currentName: string
    currentStatus: RequestStatus
    /** Seconds remaining in a rate-limit pause (only set when status === 'rate_limited') */
    rateLimitWaitSecs?: number
}

interface KnownQueueEvents<T> {
    done: QueueOutcome<T>
    progress: ProgressEvent
}

type QueueEvents<T> = KnownQueueEvents<T> & Record<string | symbol, unknown>

/** Max retries for generic (non-429) errors before failing a single request. */
const MAX_RETRIES = 5
/** Max global rate-limit pauses before failing the queue. */
const MAX_GLOBAL_PAUSES = 5
/** Fallback queue-wide pause when DeepSeek omits Retry-After. */
const DEFAULT_429_PAUSE_MS = 60_000

export class RequestQueue<T> {
    private eventEmitter = EventEmitter<QueueEvents<T>>()

    private queue: Array<InternalRequestObject<T>> = []
    private results: T[] = []
    private failures: QueueFailure[] = []
    private status: 'IDLE' | 'IN_PROGRESS' | 'STOPPED' | 'COMPLETED' = 'IDLE'
    private readonly backoffMultiplier = 2
    private backoff: number
    private total = 0
    private completed = 0
    private pauseUntil = 0
    private globalPauses = 0
    /** Invalidates every outstanding wait/request continuation when incremented. */
    private generation = 0

    constructor(private minBackoff: number, private maxBackoff: number) {
        this.backoff = minBackoff
    }

    add(requestObject: RequestObject<T>): void {
        this.queue.push({ ...requestObject, retries: 0 })
    }

    start(): boolean {
        if (this.status !== 'IDLE' || this.queue.length === 0) return false

        this.status = 'IN_PROGRESS'
        this.total = this.queue.length
        const generation = ++this.generation
        void this.process(generation)
        return true
    }

    cancel(): boolean {
        if (this.status !== 'IN_PROGRESS') return false

        this.status = 'STOPPED'
        this.generation++
        this.emitDone('cancelled')
        return true
    }

    clear(): void {
        this.generation++
        this.queue = []
        this.results = []
        this.failures = []
        this.status = 'IDLE'
        this.backoff = this.minBackoff
        this.pauseUntil = 0
        this.globalPauses = 0
        this.total = 0
        this.completed = 0
    }

    on<K extends keyof KnownQueueEvents<T>>(event: K, fn: (value: KnownQueueEvents<T>[K]) => void): () => void {
        this.eventEmitter.on(event, fn)
        return () => this.eventEmitter.off(event, fn)
    }

    private isActive(generation: number): boolean {
        return this.status === 'IN_PROGRESS' && generation === this.generation
    }

    private async process(generation: number): Promise<void> {
        while (this.isActive(generation)) {
            if (this.queue.length === 0) {
                this.finish(this.failures.length > 0 ? 'failed' : 'completed')
                return
            }

            const remaining = this.pauseUntil - Date.now()
            if (remaining > 0) {
                this.progress(this.queue[0].name, 'rate_limited', Math.ceil(remaining / 1000))
                await sleep(remaining)
                if (!this.isActive(generation)) return
                this.pauseUntil = 0
            }

            const requestObject = this.queue.shift()
            if (!requestObject) continue

            const { name, request } = requestObject
            let waitMs = this.backoff

            try {
                this.progress(name, 'processing')
                const result = await request()
                if (!this.isActive(generation)) return

                this.results.push(result)
                this.completed++
                this.progress(name, 'processing')
                this.backoff = this.minBackoff
            }
            catch (error) {
                if (!this.isActive(generation)) return

                if (error instanceof RateLimitError) {
                    this.globalPauses++
                    if (this.globalPauses > MAX_GLOBAL_PAUSES) {
                        this.failures.push({ name, error })
                        console.warn('[DeepSeek Exporter] Queue failed: API rate limit did not clear after', MAX_GLOBAL_PAUSES, 'pauses')
                        this.finish('failed')
                        return
                    }

                    const pauseMs = Math.max(
                        error.retryAfterMs,
                        DEFAULT_429_PAUSE_MS * this.globalPauses,
                    )
                    this.pauseUntil = Date.now() + pauseMs
                    this.progress(name, 'rate_limited', Math.round(pauseMs / 1000))
                    console.warn(`[DeepSeek Exporter] Rate limited (429). Pausing queue for ${Math.round(pauseMs / 1000)}s (pause #${this.globalPauses})`)
                    this.queue.unshift(requestObject)
                    waitMs = 0
                }
                else {
                    console.error(`[DeepSeek Exporter] "${name}" failed:`, error)
                    requestObject.retries++
                    if (requestObject.retries > MAX_RETRIES) {
                        this.failures.push({ name, error })
                        this.completed++
                        this.progress(name, 'retrying')
                        this.backoff = this.minBackoff
                        waitMs = 0
                    }
                    else {
                        this.backoff = Math.min(this.backoff * this.backoffMultiplier, this.maxBackoff)
                        waitMs = this.backoff
                        this.progress(name, 'retrying')
                        this.queue.unshift(requestObject)
                    }
                }
            }

            await sleep(waitMs)
        }
    }

    private progress(name: string, status: RequestStatus, rateLimitWaitSecs?: number): void {
        this.eventEmitter.emit('progress', {
            total: this.total,
            completed: this.completed,
            currentName: name,
            currentStatus: status,
            rateLimitWaitSecs,
        })
    }

    private finish(status: Exclude<QueueTerminalStatus, 'cancelled'>): void {
        if (this.status !== 'IN_PROGRESS') return
        this.status = 'COMPLETED'
        this.emitDone(status)
    }

    private emitDone(status: QueueTerminalStatus): void {
        this.eventEmitter.emit('done', {
            status,
            results: [...this.results],
            failures: [...this.failures],
        })
    }
}
