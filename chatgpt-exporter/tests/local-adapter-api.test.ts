import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import type { ApiConversationItem, ConversationPagePosition } from '../src/api'

vi.mock('vite-plugin-monkey/dist/client', () => ({ unsafeWindow: {} }))

let api: typeof import('../src/api')
const json = (data: unknown, status = 200) => new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
})
const items = (count: number): ApiConversationItem[] => Array.from({ length: count }, (_, i) => ({
    id: `chat-${i}`,
    title: `对话 ${i}`,
    create_time: 1_790_000_000 - i,
}))

function serve(handler: (url: URL, init?: RequestInit) => Response | Promise<Response>) {
    const fetchMock = vi.fn(async (input: string | URL, init?: RequestInit) => {
        const url = new URL(String(input))
        if (url.pathname === '/api/auth/session') return json({ accessToken: 'test-token' })
        return handler(url, init)
    })
    vi.stubGlobal('fetch', fetchMock)
    return fetchMock
}

beforeEach(async () => {
    vi.resetModules()
    vi.stubGlobal('location', new URL('https://chatgpt.com/'))
    vi.stubGlobal('document', { cookie: '' })
    api = await import('../src/api')
})

afterEach(() => vi.unstubAllGlobals())

describe('local adapter pagination', () => {
    it('loads 237 conversations when the server returns only 50 per page', async () => {
        const all = items(237)
        const offsets: number[] = []
        serve((url) => {
            expect(url.pathname).toBe('/backend-api/conversations')
            const offset = Number(url.searchParams.get('offset'))
            offsets.push(offset)
            return json({ items: all.slice(offset, offset + Math.min(50, Number(url.searchParams.get('limit')))), total: all.length })
        })
        const streamed: ApiConversationItem[] = []
        const more = vi.fn()
        const result = await api.fetchAllConversations(null, 1000, batch => streamed.push(...batch), more)
        expect(result).toEqual(all)
        expect(streamed).toEqual(all)
        expect(offsets).toEqual([0, 50, 100, 150, 200])
        expect(more).toHaveBeenLastCalledWith(false)
    })

    it('continues without a total instead of treating a short page as complete', async () => {
        const all = items(87)
        const offsets: number[] = []
        serve((url) => {
            const offset = Number(url.searchParams.get('offset'))
            offsets.push(offset)
            return json({ items: all.slice(offset, offset + 50) })
        })
        expect(await api.fetchAllConversations()).toEqual(all)
        expect(offsets).toEqual([0, 50, 87])
    })

    it('deduplicates overlapping items without using the unique count as an API offset', async () => {
        const all = items(120)
        const serverItems = [...all.slice(0, 50), all[49], ...all.slice(50)]
        serve((url) => {
            const offset = Number(url.searchParams.get('offset'))
            return json({ items: serverItems.slice(offset, offset + 50), total: serverItems.length })
        })
        expect(await api.fetchAllConversations()).toEqual(all)
    })

    it('honors an initial limit and resumes a project using the opaque cursor', async () => {
        const all = items(137)
        const requestedCursors: string[] = []
        const cursors = new Map([['0', 0], ['opaque-A', 50], ['opaque-B', 70], ['opaque-C', 120]])
        serve((url) => {
            expect(url.pathname).toBe('/backend-api/gizmos/project-1/conversations')
            const cursor = url.searchParams.get('cursor')!
            requestedCursors.push(cursor)
            const offset = cursors.get(cursor)
            if (offset == null) throw new Error('incorrect project cursor')
            const end = Math.min(all.length, offset + Number(url.searchParams.get('limit')))
            const next = [...cursors].find(([, value]) => value === end)?.[0] ?? null
            return json({ items: all.slice(offset, end), cursor: next })
        })
        let position: ConversationPagePosition = { offset: 0 }
        const more = vi.fn()
        const result = await api.fetchAllConversations('project-1', 70, undefined, more, undefined, next => position = next)
        expect(result).toHaveLength(70)
        expect(position).toEqual({ offset: 70, cursor: 'opaque-B' })
        expect(more).toHaveBeenCalledWith(true)
        const next = await api.fetchConversationsPage('project-1', position.offset, 100, position.cursor)
        const last = await api.fetchConversationsPage('project-1', next.next_offset!, 100, next.cursor)
        expect([...result, ...next.items, ...last.items]).toEqual(all)
        expect(requestedCursors).toEqual(['0', 'opaque-A', 'opaque-B', 'opaque-C'])
        expect(last.has_more).toBe(false)
    })

    it('preserves the failed offset and retry availability after a 429', async () => {
        const all = items(60)
        let failed = false
        serve((url) => {
            const offset = Number(url.searchParams.get('offset'))
            if (offset === 50 && !failed) {
                failed = true
                return new Response('', { status: 429, headers: { 'Retry-After': '2' } })
            }
            return json({ items: all.slice(offset, offset + 50), total: all.length })
        })
        let position: ConversationPagePosition = { offset: 0 }
        const more = vi.fn()
        const error = vi.fn()
        const partial = await api.fetchAllConversations(null, 1000, undefined, more, error, next => position = next)
        expect(partial).toHaveLength(50)
        expect(position.offset).toBe(50)
        expect(more).toHaveBeenCalledWith(true)
        expect(error.mock.calls[0][0]).toBeInstanceOf(api.RateLimitError)
        const tail = await api.fetchConversationsPage(null, position.offset, 100)
        expect([...partial, ...tail.items]).toEqual(all)
    })

    it('reports a repeated page instead of looping indefinitely', async () => {
        serve(() => json({ items: items(50), total: 200 }))
        await expect(api.fetchAllConversations()).rejects.toThrow('no progress')
    })

    it('rejects malformed responses and does not report them as an empty account', async () => {
        serve(() => json({ detail: 'missing data' }))
        await expect(api.fetchAllConversations()).rejects.toThrow('invalid conversation list')
    })

    it('accepts a genuinely empty account', async () => {
        serve(() => json({ items: [], total: 0 }))
        const more = vi.fn()
        expect(await api.fetchAllConversations(null, 1000, undefined, more)).toEqual([])
        expect(more).toHaveBeenCalledWith(false)
    })
})

describe('local adapter session handling', () => {
    it('refreshes an expired session once and sends same-origin credentials', async () => {
        let sessionCount = 0
        const authHeaders: string[] = []
        vi.stubGlobal('fetch', vi.fn(async (input: string | URL, init?: RequestInit) => {
            expect(init?.credentials).toBe('same-origin')
            if (String(input).includes('/api/auth/session')) return json({ accessToken: `token-${++sessionCount}` })
            const authorization = new Headers(init?.headers).get('Authorization')!
            authHeaders.push(authorization)
            return authorization === 'Bearer token-1' ? json({}, 401) : json({ items: [], total: 0 })
        }))
        expect(await api.fetchAllConversations()).toEqual([])
        expect(sessionCount).toBe(2)
        expect(authHeaders).toEqual(['Bearer token-1', 'Bearer token-2'])
    })

    it('allows retry after session lookup fails instead of caching the rejection', async () => {
        let sessionCount = 0
        vi.stubGlobal('fetch', vi.fn(async (input: string | URL) => {
            if (String(input).includes('/api/auth/session')) return ++sessionCount === 1 ? json({}, 503) : json({ accessToken: 'test-token' })
            return json({ items: [], total: 0 })
        }))
        await expect(api.fetchAllConversations()).rejects.toThrow('503')
        await expect(api.fetchAllConversations()).resolves.toEqual([])
    })

    it('reports sign-in or verification errors without attempting to bypass them', async () => {
        const fetchMock = serve(() => json({}, 403))
        await expect(api.fetchAllConversations()).rejects.toThrow('verification')
        expect(fetchMock).toHaveBeenCalledTimes(2)
    })

    it('uses the selected workspace account id', async () => {
        vi.stubGlobal('document', { cookie: '_account=workspace-1' })
        serve((url, init) => {
            if (url.pathname.includes('/accounts/check/')) return json({ accounts: { 'workspace-1': { account: { account_id: 'team-account' } } } })
            expect(new Headers(init?.headers).get('Chatgpt-Account-Id')).toBe('team-account')
            return json({ items: [], total: 0 })
        })
        expect(await api.fetchAllConversations()).toEqual([])
    })

    it('never exports the latest saved chat when the current chat has no id', async () => {
        const fetchMock = serve(() => json({ items: items(1), total: 1 }))
        await expect(api.getCurrentChatId()).rejects.toThrow('Unable to identify')
        expect(fetchMock).not.toHaveBeenCalled()
    })
})
