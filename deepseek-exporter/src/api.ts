import { apiUrl, baseUrl } from './constants'
import { getChatIdFromUrl } from './page'
import { blobToDataURL } from './utils/dom'

const CLIENT_VERSION = '2.3.0'
const LIST_PAGE_SIZE = 50
const FILE_SERVICE_API_URL = 'https://files.deepseeksvc.com/api'

export interface ContentReferenceSource {
    title?: string
    url?: string
    attribution?: string
    snippet?: string
    publishedAt?: number | string
    supporting_websites?: ContentReferenceSource[]
}

export interface ContentReference {
    type: 'grouped_webpages' | 'sources_footnote' | 'nav_list' | 'alt_text' | 'webpage' | (string & {})
    matched_text?: string
    start_idx: number
    end_idx: number
    alt?: string
    items?: ContentReferenceSource[]
    sources?: ContentReferenceSource[]
    fallback_items?: ContentReferenceSource[]
    safe_urls?: string[]
    refs?: string[]
    url?: string
    title?: string
    attribution?: string
}

interface MessageMeta {
    model_slug?: string
    content_references?: ContentReference[]
    is_visually_hidden_from_conversation?: boolean
}

export type AuthorRole = 'system' | 'assistant' | 'user' | 'tool'

export interface DeepSeekImagePart {
    asset_pointer: string
    content_type: 'image_asset_pointer'
    fovea: number
    height: number
    size_bytes: number
    width: number
}

export type ConversationMessageContent = {
    content_type: 'text'
    parts: string[]
} | {
    content_type: 'multimodal_text'
    parts: Array<DeepSeekImagePart | string>
}

export interface ConversationNodeMessage {
    author: {
        role: AuthorRole
        name?: 'browser' | 'python' | 'file_search' & (string & {})
        metadata: unknown
    }
    content: ConversationMessageContent
    create_time?: number
    update_time?: number
    id: string
    metadata?: MessageMeta
    recipient: 'all'
    status: string
    end_turn?: boolean
    weight: number
}

export interface ThinkingContent {
    thoughts: Array<{ summary: string, content: string }>
    activities?: string[]
    durationSeconds?: number
}

export interface ConversationNode {
    children: string[]
    id: string
    message?: ConversationNodeMessage
    parent?: string
    thinking?: ThinkingContent
}

export interface DeepSeekFile {
    id?: string | number
    file_id?: string | number
    file_name?: string
    filename?: string
    name?: string
    signed_path?: string
    url?: string
    mime_type?: string
    mimetype?: string
    type?: string
    is_image?: boolean
    width?: number
    height?: number
    size?: number
    file_size?: number
    [key: string]: unknown
}

export interface DeepSeekSearchResult {
    title?: string
    url?: string
    snippet?: string
    site_name?: string
    cite_index?: number
    index?: number
    [key: string]: unknown
}

export interface DeepSeekFragment {
    type?: string
    content?: string
    elapsed_secs?: number
    queries?: unknown[]
    results?: DeepSeekSearchResult[]
    result?: DeepSeekSearchResult
    files?: DeepSeekFile[]
    [key: string]: unknown
}

export interface DeepSeekRawMessage {
    message_id: string | number
    parent_id?: string | number | null
    model?: string
    role: string
    thinking_enabled?: boolean
    status?: string
    inserted_at?: number | string
    updated_at?: number | string
    fragments?: DeepSeekFragment[]
    files?: DeepSeekFile[]
    content?: string
    [key: string]: unknown
}

export interface DeepSeekSession {
    id: string
    title?: string
    title_type?: string
    model_type?: string
    pinned?: boolean | number
    updated_at?: number | string
    inserted_at?: number | string
    seq_id?: number
    version?: number
    current_message_id?: string | number | null
    agent?: {
        id?: string
        name?: string
        [key: string]: unknown
    } | null
    [key: string]: unknown
}

export interface ApiConversation {
    chat_session: DeepSeekSession
    chat_messages: DeepSeekRawMessage[]
    cache_control?: unknown
    cache_reset_at?: unknown
    title: string
    create_time: number
    update_time: number
}

export type ApiConversationWithId = ApiConversation & {
    id: string
}

export interface ApiConversationItem {
    id: string
    title: string
    create_time: number | string
    update_time?: number | string
    is_starred?: boolean | null
    is_temporary_chat?: boolean
    gizmo_id?: string | null
    conversation_origin?: string | null
    pinned_time?: string | null
    is_archived?: boolean
    is_do_not_remember?: boolean | null
}

export interface ApiConversations {
    has_missing_conversations: boolean
    items: ApiConversationItem[]
    limit: number
    offset: number
    total: number | null
    cursor?: string | null
}

export interface ConversationResult {
    id: string
    title: string
    modelSlug: string
    model: string
    createTime: number
    updateTime: number
    conversationNodes: ConversationNode[]
}

export interface ProcessConversationOptions {
    enableThinking?: boolean
}

interface ApiEnvelope<T> {
    code?: number | string
    msg?: string
    data?: {
        biz_code?: number | string
        biz_msg?: string
        biz_data?: T
    } | T
}

interface SessionPage {
    chat_sessions?: DeepSeekSession[]
    has_more?: boolean
}

interface SessionCursor {
    pinned: boolean
    updatedAt: number
}

interface SessionListState {
    initialized: boolean
    items: ApiConversationItem[]
    seen: Set<string>
    cursor: SessionCursor | null
    hasMore: boolean
    cursorSignature: string
}

function createListState(): SessionListState {
    return {
        initialized: true,
        items: [],
        seen: new Set<string>(),
        cursor: null,
        hasMore: true,
        cursorSignature: '',
    }
}

let sessionListState = createListState()

export class RateLimitError extends Error {
    readonly retryAfterMs: number

    constructor(retryAfterHeader: string | null) {
        super('Too Many Requests (429)')
        this.name = 'RateLimitError'
        const seconds = retryAfterHeader == null ? Number.NaN : Number(retryAfterHeader)
        const retryAt = retryAfterHeader == null ? Number.NaN : Date.parse(retryAfterHeader)
        this.retryAfterMs = Number.isFinite(seconds) && seconds > 0
            ? Math.ceil(seconds * 1000)
            : Number.isFinite(retryAt) && retryAt > Date.now()
                ? retryAt - Date.now()
                : 30_000
    }
}

export function parseUserToken(raw: string | null): string | null {
    if (!raw) return null

    const findToken = (value: unknown, depth = 0): string | null => {
        if (depth > 3) return null
        if (typeof value === 'string') return value.trim() || null
        if (!value || typeof value !== 'object') return null

        const record = value as Record<string, unknown>
        return findToken(record.value, depth + 1)
            ?? findToken(record.token, depth + 1)
            ?? findToken(record.access_token, depth + 1)
            ?? findToken(record.accessToken, depth + 1)
    }

    try {
        return findToken(JSON.parse(raw))
    }
    catch {
        return raw.trim() || null
    }
}

function getAccessToken(): string {
    const token = parseUserToken(localStorage.getItem('userToken'))
    if (!token) {
        throw new Error('DeepSeek login token was not found. Sign in to chat.deepseek.com and reload the page.')
    }
    return token
}

function clientLocale(): string {
    return (document.documentElement.lang || navigator.language || 'en-US').replace('-', '_')
}

function apiHeaders(includeJson = false): Record<string, string> {
    return {
        'Accept': 'application/json',
        'Authorization': `Bearer ${getAccessToken()}`,
        'x-client-bundle-id': 'com.deepseek.chat',
        'x-client-platform': 'web',
        'x-client-version': CLIENT_VERSION,
        'x-client-locale': clientLocale(),
        'x-client-timezone-offset': String(-new Date().getTimezoneOffset() * 60),
        ...(includeJson ? { 'Content-Type': 'application/json' } : {}),
    }
}

function endpoint(path: string): URL {
    return new URL(path, apiUrl)
}

function isSuccessCode(code: number | string | undefined): boolean {
    return code == null || code === 0 || code === '0'
}

async function requestBiz<T>(url: URL, options: RequestInit = {}): Promise<T> {
    const response = await fetch(url, {
        ...options,
        credentials: 'include',
        headers: {
            ...apiHeaders(options.body != null),
            ...options.headers,
        },
    })

    if (response.status === 429) {
        throw new RateLimitError(response.headers.get('retry-after'))
    }

    let payload: ApiEnvelope<T> | null = null
    try {
        payload = await response.json() as ApiEnvelope<T>
    }
    catch {
        if (!response.ok) throw new Error(`DeepSeek API request failed (${response.status}).`)
    }

    if (!response.ok) {
        const reason = payload?.msg || response.statusText || 'Request failed'
        throw new Error(`DeepSeek API error ${response.status}: ${reason}`)
    }
    if (!payload) throw new Error('DeepSeek API returned an empty response.')
    if (!isSuccessCode(payload.code)) {
        throw new Error(payload.msg || `DeepSeek API returned error code ${String(payload.code)}`)
    }

    const data = payload.data
    if (data && typeof data === 'object' && 'biz_code' in data) {
        const business = data as { biz_code?: number | string, biz_msg?: string, biz_data?: T }
        if (!isSuccessCode(business.biz_code)) {
            throw new Error(business.biz_msg || `DeepSeek API returned business error ${String(business.biz_code)}`)
        }
        return business.biz_data as T
    }

    return data as T
}

function toEpochSeconds(value: number | string | undefined, fallback = 0): number {
    if (typeof value === 'number' && Number.isFinite(value)) {
        return value > 10_000_000_000 ? Math.floor(value / 1000) : value
    }
    if (typeof value === 'string') {
        const numeric = Number(value)
        if (Number.isFinite(numeric)) return toEpochSeconds(numeric, fallback)
        const milliseconds = Date.parse(value)
        if (Number.isFinite(milliseconds)) return Math.floor(milliseconds / 1000)
    }
    return fallback
}

function sessionToListItem(session: DeepSeekSession): ApiConversationItem {
    const updatedAt = toEpochSeconds(session.updated_at)
    const createdAt = toEpochSeconds(session.inserted_at, updatedAt)
    return {
        id: String(session.id),
        title: session.title?.trim() || 'Untitled DeepSeek conversation',
        create_time: createdAt,
        update_time: updatedAt || createdAt,
        is_starred: Boolean(session.pinned),
        pinned_time: session.pinned && updatedAt ? new Date(updatedAt * 1000).toISOString() : null,
    }
}

async function fetchSessionPage(cursor: SessionCursor | null, count: number): Promise<SessionPage> {
    const url = endpoint('/api/v0/chat_session/fetch_page')
    url.searchParams.set('count', String(count))
    if (cursor) {
        // DeepSeek expects the literal booleans true/false, not 1/0.
        url.searchParams.set('lte_cursor.pinned', String(cursor.pinned))
        url.searchParams.set('lte_cursor.updated_at', String(cursor.updatedAt))
    }
    return await requestBiz<SessionPage>(url)
}

function resetSessionList(): void {
    sessionListState = createListState()
}

async function ensureSessionCount(target: number, onPage?: () => void, state = sessionListState): Promise<void> {
    while (state.items.length < target && state.hasMore) {
        const page = await fetchSessionPage(state.cursor, LIST_PAGE_SIZE)
        if (!page || !Array.isArray(page.chat_sessions)) {
            throw new Error('DeepSeek returned an invalid conversation list. Please retry loading.')
        }
        const sessions = page.chat_sessions
        let novelCount = 0

        for (const session of sessions) {
            const item = sessionToListItem(session)
            if (state.seen.has(item.id)) continue
            state.seen.add(item.id)
            state.items.push(item)
            novelCount++
        }

        if (novelCount > 0) onPage?.()

        const last = sessions.at(-1)
        if (last) {
            const nextCursor = {
                pinned: Boolean(last.pinned),
                // Keep fractional seconds at the inclusive page boundary.
                updatedAt: typeof last.updated_at === 'number' || typeof last.updated_at === 'string'
                    ? Number(last.updated_at)
                    : Number.NaN,
            }
            if (page.has_more && !Number.isFinite(nextCursor.updatedAt)) {
                throw new Error('DeepSeek returned an invalid pagination cursor. Please retry loading.')
            }
            const signature = `${String(nextCursor.pinned)}:${String(nextCursor.updatedAt)}`
            if (page.has_more && novelCount === 0) {
                throw new Error('DeepSeek pagination made no progress. Loaded conversations are available; please retry loading earlier conversations.')
            }
            state.cursor = nextCursor
            state.cursorSignature = signature
        }

        if (page.has_more && sessions.length === 0) {
            throw new Error('DeepSeek returned an empty page with more conversations remaining. Please retry loading.')
        }
        state.hasMore = Boolean(page.has_more)
    }
}

export async function getCurrentChatId(): Promise<string> {
    const chatId = getChatIdFromUrl()
    if (chatId) return chatId

    resetSessionList()
    await ensureSessionCount(1)
    const first = sessionListState.items[0]
    if (first) return first.id

    throw new Error('No DeepSeek conversation was found.')
}

function normalizeConversation(data: Omit<ApiConversation, 'title' | 'create_time' | 'update_time'>, chatId: string): ApiConversationWithId {
    const session = data.chat_session
    const messageTimes = data.chat_messages
        .map(message => toEpochSeconds(message.inserted_at))
        .filter(time => time > 0)
    const updatedAt = toEpochSeconds(session.updated_at, messageTimes.at(-1) ?? 0)
    const createdAt = toEpochSeconds(session.inserted_at, messageTimes[0] ?? updatedAt)

    return {
        ...data,
        id: String(session.id || chatId),
        title: session.title?.trim() || 'DeepSeek Conversation',
        create_time: createdAt,
        update_time: updatedAt || createdAt,
    }
}

function fileUrl(file: DeepSeekFile): string | null {
    const value = typeof file.signed_path === 'string'
        ? file.signed_path
        : typeof file.url === 'string'
            ? file.url
            : null
    if (!value) return null
    if (value.startsWith('data:')) return value

    // DeepSeek's API returns attachment paths such as `/file?...`, but those
    // paths belong to its separate file service rather than chat.deepseek.com.
    // The web client uses the preview (`p`) variant for images.
    if (/^\/file(?:\?|$)/.test(value)) {
        try {
            const url = new URL(`${FILE_SERVICE_API_URL}${value}`)
            if (!url.searchParams.has('ty')) url.searchParams.set('ty', 'p')
            return url.href
        }
        catch {
            return value
        }
    }

    try {
        return new URL(value, baseUrl).href
    }
    catch {
        return value
    }
}

function isImageFile(file: DeepSeekFile): boolean {
    if (file.is_image === true) return true
    const mime = typeof file.mime_type === 'string'
        ? file.mime_type
        : typeof file.mimetype === 'string'
            ? file.mimetype
            : ''
    if (mime.startsWith('image/')) return true
    const name = file.file_name || file.filename || file.name || ''
    return /\.(?:avif|bmp|gif|jpe?g|png|svg|webp)$/i.test(name)
}

async function replaceFileAssets(conversation: ApiConversation): Promise<void> {
    const files = conversation.chat_messages.flatMap(collectMessageFiles)
    await Promise.all(files.map(async (file) => {
        const url = fileUrl(file)
        if (!url || url.startsWith('data:') || !isImageFile(file)) return
        try {
            const assetUrl = new URL(url)
            const sameOrigin = assetUrl.origin === baseUrl
            const response = await fetch(assetUrl, {
                credentials: sameOrigin ? 'include' : 'omit',
                headers: sameOrigin ? { ...apiHeaders(), Accept: '*/*' } : undefined,
            })
            if (!response.ok) return
            const blob = await response.blob()
            const contentType = (response.headers.get('content-type') || blob.type).toLowerCase()
            if (contentType && !contentType.startsWith('image/')) {
                console.warn(`[DeepSeek Exporter] Refused non-image attachment response (${contentType})`)
                return
            }
            const dataUrl = await blobToDataURL(blob)
            file.signed_path = dataUrl
        }
        catch (error) {
            console.warn('[DeepSeek Exporter] Failed to embed attachment', error)
        }
    }))
}

export async function fetchConversation(chatId: string, shouldReplaceAssets: boolean): Promise<ApiConversationWithId> {
    const url = endpoint('/api/v0/chat/history_messages')
    url.searchParams.set('chat_session_id', chatId)
    const data = await requestBiz<Omit<ApiConversation, 'title' | 'create_time' | 'update_time'>>(url)
    const conversation = normalizeConversation(data, chatId)
    if (shouldReplaceAssets) await replaceFileAssets(conversation)
    return conversation
}

export async function fetchConversationsPage(
    _project: string | null,
    offset: number,
    limit: number,
): Promise<ApiConversations> {
    if (!sessionListState.initialized || offset === 0) resetSessionList()
    const state = sessionListState
    await ensureSessionCount(offset + limit, undefined, state)
    const items = state.items.slice(offset, offset + limit)
    return {
        has_missing_conversations: false,
        items,
        limit,
        offset,
        total: state.hasMore ? null : state.items.length,
        cursor: state.hasMore ? state.cursorSignature : null,
    }
}

export async function fetchAllConversations(
    _project: string | null = null,
    maxConversations = 1000,
    onBatch?: (batch: ApiConversationItem[]) => void,
    onHasMore?: (hasMore: boolean) => void,
): Promise<ApiConversationItem[]> {
    resetSessionList()
    const state = sessionListState
    let reported = 0
    try {
        await ensureSessionCount(maxConversations, () => {
            const next = state.items.slice(reported, maxConversations)
            if (next.length === 0) return
            reported += next.length
            onBatch?.(next)
        }, state)
        return state.items.slice(0, maxConversations)
    }
    finally {
        // Preserve a retry path even if a later page fails after earlier pages loaded.
        onHasMore?.(state.items.length > maxConversations || state.hasMore)
    }
}

export async function deleteConversation(chatId: string): Promise<boolean> {
    const url = endpoint('/api/v0/chat_session/delete')
    await requestBiz<unknown>(url, {
        method: 'POST',
        body: JSON.stringify({ chat_session_id: chatId }),
    })
    resetSessionList()
    return true
}

function fragmentType(fragment: DeepSeekFragment): string {
    return typeof fragment.type === 'string' ? fragment.type.toUpperCase() : ''
}

function stringContent(value: unknown): string {
    return typeof value === 'string' ? value.trim() : ''
}

function visibleMessageText(message: DeepSeekRawMessage): string {
    const role = message.role.toUpperCase()
    const accepted = role === 'USER'
        ? new Set(['REQUEST'])
        : new Set(['RESPONSE', 'TEMPLATE_RESPONSE'])
    const parts = (message.fragments ?? [])
        .filter(fragment => accepted.has(fragmentType(fragment)))
        .map(fragment => stringContent(fragment.content))
        .filter(Boolean)

    if (parts.length > 0) return parts.join('\n\n')
    if (typeof message.content === 'string') return message.content

    return (message.fragments ?? [])
        .filter(fragment => !['THINK', 'TOOL_SEARCH', 'TOOL_OPEN', 'SEARCH', 'TIP', 'FILE'].includes(fragmentType(fragment)))
        .map(fragment => stringContent(fragment.content))
        .filter(Boolean)
        .join('\n\n')
}

function collectMessageFiles(message: DeepSeekRawMessage): DeepSeekFile[] {
    const files = [...(message.files ?? [])]
    for (const fragment of message.fragments ?? []) {
        if (fragmentType(fragment) !== 'FILE') continue
        if (Array.isArray(fragment.files)) files.push(...fragment.files)
        if (fragment.file && typeof fragment.file === 'object') files.push(fragment.file as DeepSeekFile)
    }
    return files
}

function messageContent(message: DeepSeekRawMessage, text: string): ConversationNodeMessage['content'] {
    const files = collectMessageFiles(message)
    if (files.length === 0) return { content_type: 'text', parts: [text] }

    const parts: Array<DeepSeekImagePart | string> = []
    if (text) parts.push(text)
    for (const file of files) {
        const name = file.file_name || file.filename || file.name || 'attachment'
        const url = fileUrl(file)
        if (url && isImageFile(file)) {
            parts.push({
                content_type: 'image_asset_pointer',
                asset_pointer: url,
                fovea: 0,
                height: typeof file.height === 'number' ? file.height : 0,
                width: typeof file.width === 'number' ? file.width : 0,
                size_bytes: typeof file.size === 'number'
                    ? file.size
                    : typeof file.file_size === 'number'
                        ? file.file_size
                        : 0,
            })
        }
        else if (url) {
            parts.push(`[${name}](${url})`)
        }
        else {
            parts.push(`[File: ${name}]`)
        }
    }
    return { content_type: 'multimodal_text', parts }
}

function extractThinking(message: DeepSeekRawMessage): ThinkingContent | undefined {
    const fragments = (message.fragments ?? []).filter(fragment => fragmentType(fragment) === 'THINK')
    const thoughts = fragments
        .map(fragment => stringContent(fragment.content))
        .filter(Boolean)
        .map(content => ({ summary: '', content }))
    if (thoughts.length === 0) return undefined

    const durations = fragments
        .map(fragment => fragment.elapsed_secs)
        .filter((value): value is number => typeof value === 'number' && Number.isFinite(value))
    return {
        thoughts,
        durationSeconds: durations.length > 0
            ? durations.reduce((total, duration) => total + duration, 0)
            : undefined,
    }
}

interface IndexedSource {
    index?: number
    source: ContentReferenceSource
}

function collectSourceEntries(value: unknown, entries: IndexedSource[], visited: Set<unknown>): void {
    if (!value || typeof value !== 'object' || visited.has(value)) return
    visited.add(value)

    if (Array.isArray(value)) {
        for (const item of value) collectSourceEntries(item, entries, visited)
        return
    }

    const record = value as Record<string, unknown>
    if (typeof record.url === 'string') {
        const source: ContentReferenceSource = {
            url: record.url,
            title: typeof record.title === 'string'
                ? record.title
                : typeof record.site_name === 'string'
                    ? record.site_name
                    : record.url,
            attribution: typeof record.site_name === 'string' ? record.site_name : undefined,
            snippet: typeof record.snippet === 'string'
                ? record.snippet
                : typeof record.description === 'string'
                    ? record.description
                    : undefined,
            publishedAt: typeof record.published_at === 'number' || typeof record.published_at === 'string'
                ? record.published_at
                : undefined,
        }
        const index = typeof record.cite_index === 'number'
            ? record.cite_index
            : typeof record.index === 'number'
                ? record.index
                : undefined
        entries.push({ index, source })
    }

    for (const child of Object.values(record)) collectSourceEntries(child, entries, visited)
}

function sourceReferences(message: DeepSeekRawMessage, content: string): ContentReference[] {
    const entries: IndexedSource[] = []
    for (const fragment of message.fragments ?? []) {
        const type = fragmentType(fragment)
        if (type === 'SEARCH' || type === 'TOOL_SEARCH' || type === 'TOOL_OPEN') {
            collectSourceEntries(fragment, entries, new Set<unknown>())
        }
    }

    const unique: IndexedSource[] = []
    const positions = new Map<string, number>()
    for (const entry of entries) {
        const key = entry.source.url || entry.source.title || ''
        if (!key) continue
        const position = positions.get(key)
        if (position == null) {
            positions.set(key, unique.length)
            unique.push(entry)
            continue
        }

        const existing = unique[position]
        existing.source = mergeSourceDetails(existing.source, entry.source)
        existing.index ??= entry.index
    }
    if (unique.length === 0) return []

    const byIndex = new Map<number, ContentReferenceSource>()
    unique.forEach((entry, index) => {
        byIndex.set(entry.index ?? index, entry.source)
    })
    const usesZeroBasedCitationIndexes = byIndex.has(0)

    const references: ContentReference[] = []
    const markerRegex = /\[(?:citation|reference):(\d+)\]/gi
    let match = markerRegex.exec(content)
    while (match !== null) {
        const index = Number(match[1])
        const source = byIndex.get(index) ?? unique[index]?.source ?? unique[index - 1]?.source
        references.push({
            type: 'webpage',
            matched_text: match[0],
            start_idx: match.index,
            end_idx: match.index + match[0].length,
            alt: source ? `[${String(usesZeroBasedCitationIndexes ? index + 1 : index)}]` : '',
            items: source ? [source] : [],
        })
        match = markerRegex.exec(content)
    }

    references.push({
        type: 'sources_footnote',
        start_idx: content.length,
        end_idx: content.length,
        sources: unique.map(entry => entry.source),
    })
    return references
}

function mergeSourceDetails(current: ContentReferenceSource, candidate: ContentReferenceSource): ContentReferenceSource {
    const currentTitle = current.title?.trim()
    const candidateTitle = candidate.title?.trim()
    const currentLooksGeneric = !currentTitle
        || currentTitle === current.url
        || currentTitle === current.attribution
    const candidateLooksSpecific = !!candidateTitle
        && candidateTitle !== candidate.url
        && candidateTitle !== candidate.attribution

    return {
        ...current,
        title: currentLooksGeneric && candidateLooksSpecific ? candidate.title : current.title || candidate.title,
        attribution: current.attribution || candidate.attribution,
        snippet: chooseLongerText(current.snippet, candidate.snippet),
        publishedAt: current.publishedAt ?? candidate.publishedAt,
    }
}

function chooseLongerText(current?: string, candidate?: string): string | undefined {
    if (!current) return candidate
    if (!candidate) return current
    return candidate.trim().length > current.trim().length ? candidate : current
}

function activeMessagePath(conversation: ApiConversationWithId): DeepSeekRawMessage[] {
    const messages = conversation.chat_messages
    const byId = new Map(messages.map(message => [String(message.message_id), message]))
    let currentId = conversation.chat_session.current_message_id == null
        ? ''
        : String(conversation.chat_session.current_message_id)

    if (!currentId || !byId.has(currentId)) {
        const parentIds = new Set(messages
            .map(message => message.parent_id)
            .filter((id): id is string | number => id != null)
            .map(String))
        const leaves = messages.filter(message => !parentIds.has(String(message.message_id)))
        const candidates = leaves.length > 0 ? leaves : messages
        const current = [...candidates].sort((left, right) => {
            return toEpochSeconds(left.inserted_at) - toEpochSeconds(right.inserted_at)
        }).at(-1)
        currentId = current ? String(current.message_id) : ''
    }

    const path: DeepSeekRawMessage[] = []
    const visited = new Set<string>()
    while (currentId && !visited.has(currentId)) {
        visited.add(currentId)
        const message = byId.get(currentId)
        if (!message) break
        path.push(message)
        currentId = message.parent_id == null ? '' : String(message.parent_id)
    }
    return path.reverse()
}

function normalizeRole(role: string): AuthorRole {
    const normalized = role.toUpperCase()
    if (normalized === 'USER') return 'user'
    if (normalized === 'ASSISTANT') return 'assistant'
    if (normalized === 'SYSTEM') return 'system'
    return 'tool'
}

function modelDisplayName(modelSlug: string): string {
    if (/reason|expert|r1/i.test(modelSlug)) return 'DeepSeek Reasoner'
    if (/vision|vl/i.test(modelSlug)) return 'DeepSeek Vision'
    return 'DeepSeek Chat'
}

export function shouldSkipMessageInExport(message?: ConversationNodeMessage): boolean {
    return !message
        || message.metadata?.is_visually_hidden_from_conversation === true
        || (message.author.role !== 'user' && message.author.role !== 'assistant')
}

export function processConversation(
    conversation: ApiConversationWithId,
    options: ProcessConversationOptions = {},
): ConversationResult {
    const rawPath = activeMessagePath(conversation)
    const pathIds = new Set(rawPath.map(message => String(message.message_id)))
    const children = new Map<string, string[]>()
    for (const message of conversation.chat_messages) {
        if (message.parent_id == null) continue
        const parentId = String(message.parent_id)
        if (!pathIds.has(parentId) || !pathIds.has(String(message.message_id))) continue
        children.set(parentId, [...(children.get(parentId) ?? []), String(message.message_id)])
    }

    const modelSlug = conversation.chat_session.model_type
        || rawPath.findLast(message => Boolean(message.model))?.model
        || 'deepseek-chat'
    const conversationNodes = rawPath.map((raw): ConversationNode => {
        const id = String(raw.message_id)
        const text = visibleMessageText(raw)
        const role = normalizeRole(raw.role)
        const metadata: MessageMeta = {
            model_slug: raw.model || modelSlug,
            content_references: role === 'assistant' ? sourceReferences(raw, text) : [],
        }
        const message: ConversationNodeMessage = {
            id,
            author: { role, metadata: {} },
            content: messageContent(raw, text),
            create_time: toEpochSeconds(raw.inserted_at),
            update_time: toEpochSeconds(raw.updated_at, toEpochSeconds(raw.inserted_at)),
            metadata,
            recipient: 'all',
            status: raw.status || 'FINISHED',
            end_turn: raw.status?.toUpperCase() === 'FINISHED',
            weight: 1,
        }
        return {
            id,
            parent: raw.parent_id == null ? undefined : String(raw.parent_id),
            children: children.get(id) ?? [],
            message,
            thinking: options.enableThinking ? extractThinking(raw) : undefined,
        }
    })

    return {
        id: conversation.id,
        title: conversation.title,
        modelSlug,
        model: modelDisplayName(modelSlug),
        createTime: conversation.create_time,
        updateTime: conversation.update_time,
        conversationNodes,
    }
}
