import { afterEach, describe, expect, it, vi } from 'vitest'
import { RateLimitError } from '../src/api'
import { RequestQueue } from '../src/utils/queue'
import type { QueueOutcome } from '../src/utils/queue'

function waitForDone<T>(queue: RequestQueue<T>): Promise<QueueOutcome<T>> {
    return new Promise(resolve => queue.on('done', resolve))
}

afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
})

describe('requestQueue', () => {
    it('reports a completed queue with all results', async () => {
        const queue = new RequestQueue<number>(0, 0)
        queue.add({ name: 'one', request: async () => 1 })
        queue.add({ name: 'two', request: async () => 2 })
        const done = waitForDone(queue)

        expect(queue.start()).toBe(true)
        await expect(done).resolves.toEqual({
            status: 'completed',
            results: [1, 2],
            failures: [],
        })
    })

    it('only cancels active work and never converts cancellation into completion', async () => {
        const queue = new RequestQueue<number>(0, 0)
        const request = vi.fn(() => new Promise<number>(() => {}))
        const listener = vi.fn()
        queue.on('done', listener)

        expect(queue.cancel()).toBe(false)
        expect(listener).not.toHaveBeenCalled()

        queue.add({ name: 'pending', request })
        expect(queue.start()).toBe(true)
        await vi.waitFor(() => expect(request).toHaveBeenCalledOnce())
        expect(queue.cancel()).toBe(true)
        expect(listener).toHaveBeenCalledOnce()
        expect(listener.mock.calls[0][0]).toMatchObject({ status: 'cancelled' })
    })

    it('reports exhausted retries as a failed outcome instead of partial success', async () => {
        vi.spyOn(console, 'error').mockImplementation(() => {})
        const queue = new RequestQueue<number>(0, 0)
        const request = vi.fn(async () => {
            throw new Error('broken')
        })
        queue.add({ name: 'broken', request })
        const done = waitForDone(queue)

        queue.start()
        const outcome = await done

        expect(request).toHaveBeenCalledTimes(6)
        expect(outcome.status).toBe('failed')
        expect(outcome.results).toEqual([])
        expect(outcome.failures).toHaveLength(1)
        expect(outcome.failures[0].name).toBe('broken')
    })

    it('does not resume a rate-limited request after cancellation', async () => {
        vi.useFakeTimers()
        vi.spyOn(console, 'warn').mockImplementation(() => {})
        const queue = new RequestQueue<number>(0, 0)
        const request = vi.fn(async () => {
            throw new RateLimitError('1')
        })
        queue.add({ name: 'limited', request })
        const done = waitForDone(queue)

        queue.start()
        await Promise.resolve()
        await Promise.resolve()
        expect(request).toHaveBeenCalledOnce()
        expect(queue.cancel()).toBe(true)
        await expect(done).resolves.toMatchObject({ status: 'cancelled' })

        await vi.advanceTimersByTimeAsync(5 * 60_000)
        expect(request).toHaveBeenCalledOnce()
    })
})
