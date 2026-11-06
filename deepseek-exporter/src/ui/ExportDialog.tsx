import * as Dialog from '@radix-ui/react-dialog'
import { useCallback, useEffect, useMemo, useRef, useState } from 'preact/hooks'
import { useTranslation } from 'react-i18next'
import type { ChangeEvent } from 'preact/compat'
import packageJson from '../../package.json'
import { deleteConversation, fetchAllConversations, fetchConversation, fetchConversationsPage } from '../api'
import { EXPORT_OPERATION_BATCH } from '../constants'
import { exportAllToHtml } from '../exporter/html'
import { exportAllToJson, exportAllToOfficialJson } from '../exporter/json'
import { exportAllToMarkdown } from '../exporter/markdown'
import { triggerBrowserDownload } from '../utils/download'
import { parseConversationExport } from '../utils/import'
import { RequestQueue } from '../utils/queue'
import { sleep } from '../utils/utils'
import type { ApiConversationItem, ApiConversationWithId } from '../api'
import type { FC } from '../type'
import type { DownloadArtifact } from '../utils/download'
import { CheckBox } from './CheckBox'
import { IconCross, IconLoading, IconUpload } from './Icons'
import { useSettingContext } from './SettingContext'

/**
 * Module-level flag shared between ExportDialog (parent) and DialogContent (child).
 * Lets the parent gate ESC / outside-click dismissal without lifting state.
 */
const exportingRef = { current: false }

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

/**
 * Normalise create_time / update_time to milliseconds regardless of whether
 * the API returned an ISO 8601 string (current) or a Unix-seconds number (legacy).
 */
function toMs(time: number | string | undefined): number {
    if (time == null) return 0
    if (typeof time === 'number') return time * 1000
    return new Date(time).getTime()
}

function chunkArray<T>(arr: T[], size: number): T[][] {
    const result: T[][] = []
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size))
    }
    return result
}

/** Compact date label — always includes year to avoid ambiguity */
function formatConvDate(
    time: number | string | undefined,
    todayLabel: string,
    yesterdayLabel: string,
): string {
    if (!time) return '—'
    const ms = typeof time === 'number' ? time * 1000 : new Date(time).getTime()
    if (Number.isNaN(ms) || ms === 0) return '—'
    const d = new Date(ms)
    const diffDays = Math.floor((Date.now() - ms) / 86_400_000)
    if (diffDays === 0) return todayLabel
    if (diffDays === 1) return yesterdayLabel
    // Always show the year so "Jun 17" vs "Jun 17, 2025" confusion is impossible
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
}

/** Text search supporting * and ? wildcards. Falls back to substring. */
function textSearch(title: string, query: string): boolean {
    const q = query.trim()
    if (!q) return true
    const lower = q.toLowerCase()
    if (!lower.includes('*') && !lower.includes('?')) {
        return title.toLowerCase().includes(lower)
    }
    const regexStr = lower
        .replace(/[\\\^$.|+()[\]{}]/g, '\\$&')
        .replace(/\*/g, '.*')
        .replace(/\?/g, '.')
    try {
        return new RegExp(regexStr).test(title.toLowerCase())
    }
    catch {
        return title.toLowerCase().includes(lower)
    }
}

// ---------------------------------------------------------------------------
// ConversationSelect component
// ---------------------------------------------------------------------------

interface ConversationSelectProps {
    conversations: ApiConversationItem[]
    selected: ApiConversationItem[]
    setSelected: (selected: ApiConversationItem[]) => void
    disabled: boolean
    loading: boolean
    error: string
}

const ConversationSelect: FC<ConversationSelectProps> = ({
    conversations,
    selected,
    setSelected,
    disabled,
    loading,
    error,
}) => {
    const { t } = useTranslation()
    const [query, setQuery] = useState('')
    const lastClickedIndex = useRef<number>(-1)
    const [sortField, setSortField] = useState<'title' | 'create_time' | 'update_time'>('create_time')
    const [sortDir, setSortDir] = useState<'desc' | 'asc'>('desc')

    // ── Filtering ──

    const filtered = useMemo(() => {
        let result = conversations
        const q = query.trim()
        if (q) result = result.filter(c => textSearch(c.title, q))
        const dir = sortDir === 'asc' ? 1 : -1
        return [...result].sort((a, b) => {
            if (sortField === 'title') {
                return dir * (a.title ?? '').localeCompare(b.title ?? '')
            }
            const aMs = toMs(sortField === 'update_time' ? a.update_time : a.create_time)
            const bMs = toMs(sortField === 'update_time' ? b.update_time : b.create_time)
            return dir * (aMs - bMs)
        })
    }, [conversations, query, sortField, sortDir])

    const allFilteredSelected = filtered.length > 0 && filtered.every(c => selected.some(x => x.id === c.id))

    return (
        <>
            {/* ── Search input ── */}
            <input
                type="search"
                className="SelectSearch"
                placeholder={t('Search')}
                value={query}
                disabled={disabled}
                onInput={(e) => {
                    const val = (e.currentTarget as HTMLInputElement).value
                    lastClickedIndex.current = -1
                    setQuery(val)
                }}
            />

            {/* ── Toolbar: select-all + shift-click hint + counter ── */}
            <div className="SelectToolbar">
                <CheckBox
                    label={t('Select All')}
                    disabled={disabled}
                    checked={allFilteredSelected}
                    onCheckedChange={(checked) => {
                        lastClickedIndex.current = -1
                        setSelected(checked ? filtered : [])
                    }}
                />
                <div className="flex items-center gap-3 ml-auto flex-wrap">
                    {loading && conversations.length > 0 && (
                        <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                            <IconLoading className="w-3 h-3" />
                            {t('Loading')}
                            ... (
                            {conversations.length}
                            )
                        </span>
                    )}
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                        {t('Shift Click Hint')}
                    </span>
                    <span className="text-sm font-medium tabular-nums text-gray-500 dark:text-gray-400">
                        {t('Selected of total', { selected: selected.length, total: filtered.length })}
                    </span>
                </div>
            </div>

            {/* ── Column headers with sort controls ── */}
            <div className="SelectListHeader">
                <button
                    type="button"
                    className={`SelectListHeaderCell SelectListHeaderCellTitle${sortField === 'title' ? ' SelectListHeaderCellActive' : ''}`}
                    onClick={() => {
                        if (sortField === 'title') {
                            setSortDir(d => d === 'asc' ? 'desc' : 'asc')
                        }
                        else {
                            setSortField('title')
                            setSortDir('asc')
                        }
                    }}
                >
                    {t('Title')}
                    {' '}
                    {sortField === 'title' ? (sortDir === 'asc' ? '↑' : '↓') : '↕'}
                </button>
                <button
                    type="button"
                    className={`SelectListHeaderCell${sortField === 'create_time' ? ' SelectListHeaderCellActive' : ''}`}
                    onClick={() => {
                        if (sortField === 'create_time') {
                            setSortDir(d => d === 'asc' ? 'desc' : 'asc')
                        }
                        else {
                            setSortField('create_time')
                            setSortDir('desc')
                        }
                    }}
                >
                    {t('Created')}
                    {' '}
                    {sortField === 'create_time' ? (sortDir === 'asc' ? '↑' : '↓') : '↕'}
                </button>
                <button
                    type="button"
                    className={`SelectListHeaderCell${sortField === 'update_time' ? ' SelectListHeaderCellActive' : ''}`}
                    onClick={() => {
                        if (sortField === 'update_time') {
                            setSortDir(d => d === 'asc' ? 'desc' : 'asc')
                        }
                        else {
                            setSortField('update_time')
                            setSortDir('desc')
                        }
                    }}
                >
                    {t('Updated')}
                    {' '}
                    {sortField === 'update_time' ? (sortDir === 'asc' ? '↑' : '↓') : '↕'}
                </button>
            </div>

            {/* ── Conversation list ── */}
            <ul className="SelectList">
                {loading && conversations.length === 0 && (
                    <li className="SelectItem">
                        {t('Loading')}
                        ...
                    </li>
                )}
                {error && (
                    <li className="SelectItem">
                        {t('Error')}
                        :
                        {' '}
                        {error}
                    </li>
                )}
                {filtered.map((c, index) => {
                    const isSelected = selected.some(x => x.id === c.id)
                    return (
                        <li
                            className="SelectItem"
                            key={c.id}
                            onClickCapture={(e: MouseEvent) => {
                                if (disabled) return
                                if (e.shiftKey && lastClickedIndex.current !== -1) {
                                    e.preventDefault()
                                    const start = Math.min(lastClickedIndex.current, index)
                                    const end = Math.max(lastClickedIndex.current, index)
                                    const rangeItems = filtered.slice(start, end + 1)
                                    const newSelected = [...selected]
                                    for (const item of rangeItems) {
                                        if (!newSelected.some(x => x.id === item.id)) newSelected.push(item)
                                    }
                                    setSelected(newSelected)
                                    return
                                }
                                lastClickedIndex.current = index
                            }}
                        >
                            <CheckBox
                                label={c.title}
                                disabled={disabled}
                                checked={isSelected}
                                onCheckedChange={(checked) => {
                                    setSelected(checked ? [...selected, c] : selected.filter(x => x.id !== c.id))
                                }}
                            />
                            {c.is_starred && <span title={t('Starred')} style={{ color: '#f59e0b', flexShrink: 0 }}>★</span>}
                            <span
                                className={`SelectItemMeta${sortField === 'create_time' ? ' SelectItemMetaActive' : ''}`}
                                title={`${t('Created')}: ${c.create_time ?? '—'}`}
                            >
                                {formatConvDate(c.create_time, t('Today'), t('Yesterday'))}
                            </span>
                            <span
                                className={`SelectItemMeta${sortField === 'update_time' ? ' SelectItemMetaActive' : ''}`}
                                title={`${t('Updated')}: ${c.update_time ?? '—'}`}
                            >
                                {formatConvDate(c.update_time, t('Today'), t('Yesterday'))}
                            </span>
                        </li>
                    )
                })}
                {!loading && !error && filtered.length === 0 && conversations.length > 0 && (
                    <li className="SelectItem text-gray-400 dark:text-gray-500">{t('No results')}</li>
                )}
            </ul>
        </>
    )
}

// ---------------------------------------------------------------------------
// DialogContent component
// ---------------------------------------------------------------------------

type ExportSource = 'API' | 'Local'

interface DialogContentProps {
    format: string
}

const DialogContent: FC<DialogContentProps> = ({ format }) => {
    const { t } = useTranslation()
    const { enableMeta, exportMetaList, exportAllLimit } = useSettingContext()
    const metaList = useMemo(() => enableMeta ? exportMetaList : [], [enableMeta, exportMetaList])

    const exportAllOptions = useMemo(() => [
        { label: 'Markdown', callback: exportAllToMarkdown },
        { label: 'HTML', callback: exportAllToHtml },
        { label: 'JSON', callback: exportAllToOfficialJson },
        { label: 'JSON (ZIP)', callback: exportAllToJson },
    ], [])

    const fileInputRef = useRef<HTMLInputElement>(null)
    const [exportSource, setExportSource] = useState<ExportSource>('API')
    const [apiConversations, setApiConversations] = useState<ApiConversationItem[]>([])
    const [localConversations, setLocalConversations] = useState<ApiConversationWithId[]>([])
    const conversations = exportSource === 'API' ? apiConversations : localConversations

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [operationError, setOperationError] = useState('')
    const [processing, setProcessing] = useState(false)
    const [pendingDownloads, setPendingDownloads] = useState<DownloadArtifact[]>([])
    const [downloadSummary, setDownloadSummary] = useState({ prepared: 0, total: 0 })

    const [selected, setSelected] = useState<ApiConversationItem[]>([])
    const [exportType, setExportType] = useState(exportAllOptions[0].label)
    const disabled = processing || selected.length === 0

    // "Load more" state
    const [hasMore, setHasMore] = useState(false)
    const [loadingMore, setLoadingMore] = useState(false)
    const [totalAvailable, setTotalAvailable] = useState<number | null>(null)

    const requestQueue = useMemo(() => new RequestQueue<ApiConversationWithId>(200, 1600), [])
    const deleteQueue = useMemo(() => new RequestQueue<string>(200, 1600), [])

    const [progress, setProgress] = useState({
        total: 0,
        completed: 0,
        currentName: '',
        currentStatus: '' as '' | 'processing' | 'retrying' | 'rate_limited' | 'packaging',
        rateLimitWaitSecs: undefined as number | undefined,
        batchIndex: 0,
        totalBatches: 0,
    })

    const pendingBatchesRef = useRef<ApiConversationItem[][]>([])
    const batchIndexRef = useRef(0)
    const totalBatchesRef = useRef(0)
    const selectedTotalRef = useRef(0)
    const activeOperationRef = useRef<'api-export' | 'local-export' | 'delete' | null>(null)
    const localCancelRef = useRef(false)
    /** Incremented on each new fetch; callbacks check this to discard stale results after remount */
    const fetchGenRef = useRef(0)

    const keepPreparedDownload = useCallback((download: DownloadArtifact) => {
        setPendingDownloads(prev => [...prev, download])
        setDownloadSummary(prev => ({ ...prev, prepared: prev.prepared + 1 }))
    }, [])

    const downloadPendingFile = useCallback((download: DownloadArtifact) => {
        triggerBrowserDownload(download)
        setPendingDownloads(prev => prev.filter(item => item !== download))
    }, [])

    const onUpload = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const input = e.currentTarget
        const file = input.files?.[0]
        if (!file) return
        const fileReader = new FileReader()
        fileReader.onload = () => {
            try {
                const data = parseConversationExport(String(fileReader.result ?? ''))
                setSelected([])
                setError('')
                setOperationError('')
                setExportSource('Local')
                setLocalConversations(data)
            }
            catch (error) {
                console.error('[DeepSeek Exporter] Invalid import file:', error)
                alert(t('Invalid File Format'))
            }
            finally {
                input.value = ''
            }
        }
        fileReader.onerror = () => {
            input.value = ''
            alert(t('Invalid File Format'))
        }
        fileReader.readAsText(file)
    }, [t])

    const startApiBatch = useCallback((chunk: ApiConversationItem[]) => {
        requestQueue.clear()
        chunk.forEach(({ id, title }) => {
            requestQueue.add({ name: title, request: () => fetchConversation(id, exportType !== 'JSON') })
        })
        if (!requestQueue.start()) {
            throw new Error('Unable to start export queue')
        }
    }, [requestQueue, exportType])

    useEffect(() => {
        const off = requestQueue.on('progress', (prog) => {
            const completed = batchIndexRef.current * EXPORT_OPERATION_BATCH + prog.completed
            setProcessing(true)
            setProgress({
                ...prog,
                rateLimitWaitSecs: prog.rateLimitWaitSecs,
                batchIndex: batchIndexRef.current,
                totalBatches: totalBatchesRef.current,
                completed: Math.min(selectedTotalRef.current, completed),
                total: selectedTotalRef.current,
            })
        })
        return () => off()
    }, [requestQueue])

    useEffect(() => {
        const off = deleteQueue.on('progress', (prog) => {
            setProcessing(true)
            setProgress({ ...prog, rateLimitWaitSecs: prog.rateLimitWaitSecs, batchIndex: 0, totalBatches: 0 })
        })
        return () => off()
    }, [deleteQueue])

    useEffect(() => {
        const off = requestQueue.on('done', (outcome) => {
            void (async () => {
                if (outcome.status === 'cancelled') {
                    setProcessing(false)
                    exportingRef.current = false
                    activeOperationRef.current = null
                    return
                }

                if (outcome.status === 'failed') {
                    const fetched = batchIndexRef.current * EXPORT_OPERATION_BATCH + outcome.results.length
                    setOperationError(`Export stopped after ${fetched} of ${selectedTotalRef.current} conversations were fetched. No incomplete download was created; ${outcome.failures.length} request(s) failed.`)
                    setProcessing(false)
                    exportingRef.current = false
                    activeOperationRef.current = null
                    return
                }

                let startedNextBatch = false
                try {
                    const batchIdx = batchIndexRef.current
                    const totalBatches = totalBatchesRef.current
                    const partIndex = batchIdx + 1
                    const callback = exportAllOptions.find(o => o.label === exportType)?.callback
                    if (!callback) throw new Error(`Unknown export type: ${exportType}`)

                    setProgress(prev => ({
                        ...prev,
                        currentName: `${t('Export')} ${exportType === 'JSON' ? 'JSON' : 'ZIP'}…`,
                        currentStatus: 'packaging',
                    }))
                    const downloadResult = await callback(format, outcome.results, metaList, undefined, partIndex, totalBatches)
                    keepPreparedDownload(downloadResult)
                    if (partIndex < totalBatches) {
                        await sleep(400)
                        if (activeOperationRef.current !== 'api-export') return
                        batchIndexRef.current++
                        const nextChunk = pendingBatchesRef.current[batchIndexRef.current]
                        if (!nextChunk) throw new Error('The next export batch is missing')
                        startApiBatch(nextChunk)
                        startedNextBatch = true
                    }
                }
                catch (error) {
                    console.error('[DeepSeek Exporter] Batch export failed:', error)
                    setOperationError(error instanceof Error ? error.message : String(error))
                }
                finally {
                    if (!startedNextBatch) {
                        setProcessing(false)
                        exportingRef.current = false
                        activeOperationRef.current = null
                    }
                }
            })()
        })
        return () => off()
    }, [requestQueue, exportAllOptions, exportType, format, metaList, startApiBatch, t, keepPreparedDownload])

    useEffect(() => {
        const off = deleteQueue.on('done', (outcome) => {
            const deletedIds = new Set(outcome.results)
            if (deletedIds.size > 0) {
                setApiConversations(prev => prev.filter(c => !deletedIds.has(c.id)))
                setSelected(prev => prev.filter(c => !deletedIds.has(c.id)))
            }

            if (outcome.status === 'completed') {
                alert(t('Conversation Deleted Message'))
            }
            else if (outcome.status === 'failed') {
                setOperationError(`Deleted ${deletedIds.size} of ${selectedTotalRef.current} conversations before the operation stopped.`)
            }

            setProcessing(false)
            exportingRef.current = false
            activeOperationRef.current = null
        })
        return () => off()
    }, [deleteQueue, t])

    const cancelExport = useCallback(() => {
        if (activeOperationRef.current === 'api-export') {
            // Also covers the short gap while a completed batch is being packaged.
            activeOperationRef.current = null
            if (!requestQueue.cancel()) {
                setProcessing(false)
                exportingRef.current = false
            }
        }
        else if (activeOperationRef.current === 'delete') {
            deleteQueue.cancel()
        }
        else if (activeOperationRef.current === 'local-export') {
            localCancelRef.current = true
        }
    }, [requestQueue, deleteQueue])

    const exportAllFromApi = useCallback(() => {
        if (disabled) return
        const chunks = chunkArray(selected, EXPORT_OPERATION_BATCH)
        pendingBatchesRef.current = chunks
        batchIndexRef.current = 0
        totalBatchesRef.current = chunks.length
        selectedTotalRef.current = selected.length
        activeOperationRef.current = 'api-export'
        exportingRef.current = true
        setOperationError('')
        setPendingDownloads([])
        setDownloadSummary({ prepared: 0, total: chunks.length })
        setProcessing(true)
        setProgress({
            total: selected.length,
            completed: 0,
            currentName: '',
            currentStatus: 'processing',
            rateLimitWaitSecs: undefined,
            batchIndex: 0,
            totalBatches: chunks.length,
        })
        try {
            startApiBatch(chunks[0])
        }
        catch (error) {
            activeOperationRef.current = null
            setProcessing(false)
            exportingRef.current = false
            setOperationError(error instanceof Error ? error.message : String(error))
        }
    }, [disabled, selected, startApiBatch])

    const exportAllFromLocal = useCallback(async () => {
        if (disabled) return
        const results = localConversations.filter(c => selected.some(s => s.id === c.id))
        const callback = exportAllOptions.find(o => o.label === exportType)?.callback
        if (!callback) return
        const chunks = chunkArray(results, EXPORT_OPERATION_BATCH)
        localCancelRef.current = false
        activeOperationRef.current = 'local-export'
        exportingRef.current = true
        setOperationError('')
        setPendingDownloads([])
        setDownloadSummary({ prepared: 0, total: chunks.length })
        setProcessing(true)
        try {
            for (let i = 0; i < chunks.length; i++) {
                if (localCancelRef.current) break
                const downloadResult = await callback(format, chunks[i], metaList, undefined, i + 1, chunks.length)
                keepPreparedDownload(downloadResult)
                if (i < chunks.length - 1 && !localCancelRef.current) await sleep(400)
            }
        }
        catch (error) {
            console.error('[DeepSeek Exporter] Local export failed:', error)
            setOperationError(error instanceof Error ? error.message : String(error))
        }
        finally {
            activeOperationRef.current = null
            localCancelRef.current = false
            setProcessing(false)
            exportingRef.current = false
        }
    }, [disabled, selected, localConversations, exportAllOptions, exportType, format, metaList, keepPreparedDownload])

    const exportAll = useMemo(() => {
        return exportSource === 'API' ? exportAllFromApi : exportAllFromLocal
    }, [exportSource, exportAllFromApi, exportAllFromLocal])

    const deleteAll = useCallback(() => {
        if (disabled) return
        if (!confirm(t('Conversation Delete Alert'))) return
        deleteQueue.clear()
        selectedTotalRef.current = selected.length
        activeOperationRef.current = 'delete'
        exportingRef.current = true
        setOperationError('')
        setProcessing(true)
        selected.forEach(({ id, title }) => {
            deleteQueue.add({
                name: title,
                request: async () => {
                    await deleteConversation(id)
                    return id
                },
            })
        })
        if (!deleteQueue.start()) {
            activeOperationRef.current = null
            setProcessing(false)
            exportingRef.current = false
            setOperationError('Unable to start delete queue')
        }
    }, [disabled, selected, deleteQueue, t])

    // Cancel any in-flight work when the dialog unmounts to avoid stale-state errors
    useEffect(() => {
        const genRef = fetchGenRef
        return () => {
            exportingRef.current = false
            activeOperationRef.current = null
            localCancelRef.current = true
            genRef.current++
            requestQueue.clear()
            deleteQueue.clear()
        }
    }, [requestQueue, deleteQueue])

    // Sync processing flag so ExportDialog can gate ESC / outside-click
    useEffect(() => {
        exportingRef.current = processing
    }, [processing])

    // Auto-load conversations on dialog open.
    useEffect(() => {
        const gen = ++fetchGenRef.current
        const alive = () => gen === fetchGenRef.current
        setSelected([])
        setApiConversations([])
        setError('')
        setHasMore(false)
        setLoadingMore(false)
        setTotalAvailable(null)
        setLoading(true)
        fetchAllConversations(
            null,
            exportAllLimit,
            (batch) => { if (alive()) setApiConversations(prev => [...prev, ...batch]) },
            (hasMore) => { if (alive()) setHasMore(hasMore) },
        )
            .catch((err: Error) => {
                if (!alive()) return
                console.error('[DeepSeek Exporter] Failed to fetch conversations:', err)
                setError(err.message || 'Failed to load conversations')
            })
            .finally(() => { if (alive()) setLoading(false) })
    }, [exportAllLimit])

    const loadMore = useCallback(async () => {
        if (loadingMore) return
        const gen = fetchGenRef.current
        const alive = () => gen === fetchGenRef.current
        setLoadingMore(true)
        try {
            const page = await fetchConversationsPage(null, apiConversations.length, EXPORT_OPERATION_BATCH)
            if (!alive()) return
            setApiConversations(prev => [...prev, ...page.items])
            setError('')
            if (page.total !== null) setTotalAvailable(page.total)
            setHasMore(
                page.total === null || apiConversations.length + page.items.length < page.total,
            )
        }
        catch (err) {
            if (!alive()) return
            console.error('[DeepSeek Exporter] Failed to load more conversations:', err)
            setError(err instanceof Error ? err.message : 'Failed to load conversations')
        }
        finally {
            if (alive()) setLoadingMore(false)
        }
    }, [loadingMore, apiConversations.length])

    const totalBatches = Math.ceil(selected.length / EXPORT_OPERATION_BATCH) || 1

    return (
        <>
            <Dialog.Title className="DialogTitle">
                {t('Export Dialog Title')}
                <span className="ml-2 text-xs font-normal text-gray-400 dark:text-gray-500">
                    {`v${packageJson.version}`}
                </span>
            </Dialog.Title>
            <div className="flex items-center text-gray-600 dark:text-gray-300 flex justify-between border-b-[1px] pb-3 mb-3 dark:border-gray-700">
                {exportSource === 'API' ? t('Export from API') : t('Export from official export file')}
                <div className="flex items-center gap-2">
                    {exportSource === 'API' && (
                        <button
                            type="button"
                            className="Button neutral relative"
                            aria-label={t('Export from official export file')}
                            title={t('Export from official export file')}
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <IconUpload className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </div>
            <input
                type="file"
                accept="application/json"
                className="hidden"
                ref={fileInputRef}
                onChange={onUpload}
            />
            <ConversationSelect
                conversations={conversations}
                selected={selected}
                setSelected={setSelected}
                disabled={processing}
                loading={loading}
                error={error}
            />

            {/* Load-more button */}
            {exportSource === 'API' && !loading && !processing && hasMore && (
                <div className="flex items-center justify-center mt-2 mb-1 gap-2">
                    <button
                        type="button"
                        className="Button neutral"
                        style={{ fontSize: '0.8rem', padding: '4px 14px' }}
                        disabled={loadingMore}
                        onClick={loadMore}
                    >
                        {loadingMore
                            ? `${t('Loading')}...`
                            : totalAvailable !== null
                                ? t('Load more conversations remaining', { n: EXPORT_OPERATION_BATCH, remaining: totalAvailable - apiConversations.length })
                                : t('Load more conversations', { n: EXPORT_OPERATION_BATCH })}
                    </button>
                    {totalAvailable !== null && !loadingMore && (
                        <span className="text-xs text-gray-400 dark:text-gray-500 tabular-nums">
                            {apiConversations.length}
                            {' '}
                            /
                            {totalAvailable}
                        </span>
                    )}
                </div>
            )}

            <div className="ActionBar flex flex-wrap mt-3 items-center gap-2">
                <select
                    className="Select shrink-0"
                    disabled={processing}
                    value={exportType}
                    onChange={e => setExportType(e.currentTarget.value)}
                >
                    {exportAllOptions.map(({ label }) => (
                        <option key={t(label)} value={label}>{label}</option>
                    ))}
                </select>
                <div className="flex flex-grow"></div>
                <button type="button" className="Button red" disabled={disabled || exportSource === 'Local'} onClick={deleteAll}>
                    {t('Delete')}
                </button>
                <button type="button" className="Button green" disabled={disabled} onClick={exportAll}>
                    {t('Export')}
                </button>
            </div>
            {operationError && (
                <p role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {t('Error')}
                    :
                    {operationError}
                </p>
            )}
            {pendingDownloads.length > 0 && (
                <div className="mt-2 rounded-md border border-blue-400/70 bg-blue-50 p-3 text-sm text-blue-950 dark:border-blue-500/60 dark:bg-blue-950/40 dark:text-blue-100">
                    <p role="status">
                        {t(downloadSummary.prepared === downloadSummary.total
                            ? 'All export parts ready'
                            : processing ? 'Export parts in progress' : 'Export parts stopped', {
                            prepared: downloadSummary.prepared,
                            total: downloadSummary.total,
                        })}
                    </p>
                    <div className="mt-2 flex flex-col gap-2">
                        {pendingDownloads.map((download, index) => (
                            <button
                                type="button"
                                className="Button green"
                                key={`${download.filename}-${index}`}
                                onClick={() => downloadPendingFile(download)}
                            >
                                {`${t('Download')} ${download.filename}`}
                            </button>
                        ))}
                    </div>
                </div>
            )}
            {totalBatches > 1 && !processing && (
                <p className="mt-1.5 text-xs text-right text-gray-400 dark:text-gray-500">
                    {t('Export parts info', { total: totalBatches, size: EXPORT_OPERATION_BATCH })}
                </p>
            )}
            {processing && (
                <>
                    <div className="mt-2 mb-1 justify-between flex items-center gap-2">
                        <span className="truncate text-sm text-gray-600 dark:text-gray-300">
                            {progress.currentStatus === 'rate_limited'
                                ? `⏳ Rate limited — waiting ${progress.rateLimitWaitSecs ?? '…'}s`
                                : progress.currentName}
                        </span>
                        <span className="shrink-0 tabular-nums text-sm text-gray-500 dark:text-gray-400">
                            {progress.totalBatches > 1
                                ? `${t('Batch progress').replace('{{current}}', String(progress.batchIndex + 1)).replace('{{total}}', String(progress.totalBatches))} \u00B7 ${progress.completed}/${progress.total}`
                                : `${progress.completed}/${progress.total}`}
                        </span>
                        <button
                            type="button"
                            className="Button red"
                            style={{ fontSize: '0.75rem', padding: '3px 10px', height: 'auto' }}
                            title="Stop the export — any batches already downloaded are kept"
                            onClick={cancelExport}
                        >
                            {t('Cancel')}
                        </button>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                        <div
                            className={`h-2.5 rounded-full ${progress.currentStatus === 'rate_limited' ? 'bg-amber-500' : 'bg-blue-600'}`}
                            style={{ width: `${progress.total > 0 ? (progress.completed / progress.total) * 100 : 0}%` }}
                        />
                    </div>
                </>
            )}
            {processing
                ? (
                        <button
                            type="button"
                            className="IconButton CloseButton"
                            aria-label="Export in progress"
                            title="Click Cancel to stop the export"
                            style={{ cursor: 'not-allowed', opacity: 0.25 }}
                        >
                            <IconCross />
                        </button>
                    )
                : (
                        <Dialog.Close asChild>
                            <button type="button" className="IconButton CloseButton" aria-label="Close">
                                <IconCross />
                            </button>
                        </Dialog.Close>
                    )}
        </>
    )
}

// ---------------------------------------------------------------------------
// ExportDialog (root)
// ---------------------------------------------------------------------------

interface ExportDialogProps {
    format: string
    open: boolean
    onOpenChange: (value: boolean) => void
    portalContainer: HTMLElement
}

export const ExportDialog: FC<ExportDialogProps> = ({ format, open, onOpenChange, portalContainer }) => {
    const guardClose = (e: Event) => {
        if (exportingRef.current) e.preventDefault()
    }

    return (
        <Dialog.Root
            modal={false}
            open={open}
            onOpenChange={(val: boolean) => {
                if (!val && exportingRef.current) return // block close while exporting
                onOpenChange(val)
            }}
        >
            <Dialog.Portal container={portalContainer}>
                <div
                    aria-hidden="true"
                    className="DialogOverlay"
                    onClick={() => {
                        if (!exportingRef.current) onOpenChange(false)
                    }}
                >
                </div>
                <Dialog.Content
                    className="DialogContent _export"
                    onEscapeKeyDown={guardClose}
                    onInteractOutside={guardClose}
                >
                    {open && <DialogContent format={format} />}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}
