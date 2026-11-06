import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { fetchAllConversations, fetchConversationsPage } from '../src/api'
import type { ApiConversationItem, DeepSeekSession } from '../src/api'

function response(chatSessions: DeepSeekSession[], hasMore: boolean): Response {
    return new Response(JSON.stringify({
        code: 0,
        data: { biz_code: 0, biz_data: { chat_sessions: chatSessions, has_more: hasMore } },
    }), { headers: { 'Content-Type': 'application/json' } })
}

// Model the official client's boolean cursor and inclusive timestamp boundary.
function mockSessionServer(sessions: DeepSeekSession[]) {
    return vi.fn(async (input: URL | RequestInfo) => {
        const url = new URL(String(input))
        const pinned = url.searchParams.get('lte_cursor.pinned')
        const updatedAt = url.searchParams.get('lte_cursor.updated_at')
        if (pinned !== null && pinned !== 'true' && pinned !== 'false') {
            return new Response('invalid boolean cursor', { status: 400 })
        }
        const eligible = sessions.filter(session => pinned === null
            || (Boolean(session.pinned) === (pinned === 'true')
                ? Number(session.updated_at) <= Number(updatedAt)
                : pinned === 'true'))
        const count = Number(url.searchParams.get('count'))
        return response(eligible.slice(0, count), eligible.length > count)
    })
}

const sessions: DeepSeekSession[] = Array.from({ length: 137 }, (_, index) => ({
    id: `session-${index}`,
    title: `Conversation ${index}`,
    pinned: index < 55,
    updated_at: 1_790_000_000.875 - index * 0.125,
}))

beforeEach(() => {
    vi.stubGlobal('localStorage', { getItem: () => 'test-token' })
    vi.stubGlobal('document', { documentElement: { lang: 'zh-CN' } })
    vi.stubGlobal('navigator', { language: 'zh-CN' })
})

afterEach(() => vi.unstubAllGlobals())

describe('session pagination regressions', () => {
    it('reads beyond 50 and 100 with pinned sessions, fractional timestamps and inclusive duplicates', async () => {
        const server = mockSessionServer(sessions)
        vi.stubGlobal('fetch', server)
        const batches: ApiConversationItem[][] = []
        const hasMore = vi.fn()
        const result = await fetchAllConversations(null, 1000, batch => batches.push(batch), hasMore)

        expect(result.map(item => item.id)).toEqual(sessions.map(session => session.id))
        expect(batches.flat()).toEqual(result)
        expect(server).toHaveBeenCalledTimes(3)
        expect(hasMore).toHaveBeenLastCalledWith(false)
        const secondUrl = new URL(String(server.mock.calls[1][0]))
        expect(secondUrl.searchParams.get('lte_cursor.pinned')).toBe('true')
        expect(secondUrl.searchParams.get('lte_cursor.updated_at')).toBe(String(sessions[49].updated_at))
        expect(new URL(String(server.mock.calls[2][0])).searchParams.get('lte_cursor.pinned')).toBe('false')
    })

    it('keeps cached items beyond the initial display limit available to Load more', async () => {
        vi.stubGlobal('fetch', mockSessionServer(sessions))
        const hasMore = vi.fn()
        const initial = await fetchAllConversations(null, 51, undefined, hasMore)
        const page = await fetchConversationsPage(null, initial.length, 100)
        expect([...initial, ...page.items].map(item => item.id)).toEqual(sessions.map(session => session.id))
        expect(hasMore).toHaveBeenCalledWith(true)
        expect(page.total).toBe(137)
        expect(page.cursor).toBeNull()
    })

    it('retains the first page and retries the failed cursor after HTTP 400', async () => {
        const server = mockSessionServer(sessions)
        let requests = 0
        vi.stubGlobal('fetch', vi.fn(async (input: URL | RequestInfo) => {
            if (++requests === 2) return new Response('Bad request', { status: 400 })
            return server(input)
        }))
        const loaded: ApiConversationItem[] = []
        const hasMore = vi.fn()
        await expect(fetchAllConversations(null, 1000, batch => loaded.push(...batch), hasMore)).rejects.toThrow('400')
        expect(loaded).toHaveLength(50)
        expect(hasMore).toHaveBeenLastCalledWith(true)

        const page = await fetchConversationsPage(null, loaded.length, 100)
        expect([...loaded, ...page.items].map(item => item.id)).toEqual(sessions.map(session => session.id))
        expect(page.total).toBe(137)
    })

    it('does not silently report a repeated page as a complete archive', async () => {
        const server = vi.fn(async () => response(sessions.slice(0, 50), true))
        vi.stubGlobal('fetch', server)
        const hasMore = vi.fn()
        await expect(fetchAllConversations(null, 1000, undefined, hasMore)).rejects.toThrow('no progress')
        expect(server).toHaveBeenCalledTimes(2)
        expect(hasMore).toHaveBeenLastCalledWith(true)
    })

    it('does not turn a malformed response into an empty successful archive', async () => {
        vi.stubGlobal('fetch', vi.fn(async () => new Response(JSON.stringify({ code: 0, data: null }))))
        await expect(fetchAllConversations()).rejects.toThrow('invalid conversation list')
    })

    it('handles an actually empty account', async () => {
        vi.stubGlobal('fetch', vi.fn(async () => response([], false)))
        const hasMore = vi.fn()
        await expect(fetchAllConversations(null, 1000, undefined, hasMore)).resolves.toEqual([])
        expect(hasMore).toHaveBeenCalledWith(false)
    })

    it('keeps an older in-flight load isolated when the dialog opens again', async () => {
        let resolveOld!: (value: Response) => void
        const pending = new Promise<Response>((resolve) => {
            resolveOld = resolve
        })
        vi.stubGlobal('fetch', vi.fn()
            .mockReturnValueOnce(pending)
            .mockResolvedValueOnce(response([{ id: 'new', updated_at: 20 }], false)))
        const oldRequest = fetchAllConversations()
        const newResult = await fetchAllConversations()
        resolveOld(response([{ id: 'old', updated_at: 10 }], false))
        expect((await oldRequest).map(item => item.id)).toEqual(['old'])
        expect(newResult.map(item => item.id)).toEqual(['new'])
        expect((await fetchConversationsPage(null, 1, 50)).total).toBe(1)
    })
})
