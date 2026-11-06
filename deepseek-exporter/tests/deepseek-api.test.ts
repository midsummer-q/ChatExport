import { afterEach, describe, expect, it, vi } from 'vitest'
import { RateLimitError, deleteConversation, fetchAllConversations, fetchConversation, parseUserToken, processConversation } from '../src/api'
import { transformContentReferences } from '../src/utils/citations'
import { convertToOoba, convertToTavern } from '../src/utils/conversion'
import { formatDurationSeconds } from '../src/utils/duration'
import type { ApiConversationWithId } from '../src/api'
import fixture from './fixtures/history-messages.json'

const conversationFixture = fixture as ApiConversationWithId

afterEach(() => {
    vi.unstubAllGlobals()
    vi.useRealTimers()
})

describe('formatDurationSeconds', () => {
    it('removes floating-point noise while keeping useful precision', () => {
        expect(formatDurationSeconds(5.5712626069999995)).toBe('5.6')
        expect(formatDurationSeconds(12)).toBe('12')
        expect(formatDurationSeconds(0.04)).toBe('0')
        expect(formatDurationSeconds(Number.NaN)).toBeNull()
    })
})

describe('parseUserToken', () => {
    it('accepts every token representation used by DeepSeek clients', () => {
        expect(parseUserToken('plain-token')).toBe('plain-token')
        expect(parseUserToken('"json-token"')).toBe('json-token')
        expect(parseUserToken('{"value":"wrapped-token"}')).toBe('wrapped-token')
        expect(parseUserToken('{"value":{"token":"nested-token"}}')).toBe('nested-token')
        expect(parseUserToken(null)).toBeNull()
    })
})

describe('rate-limit handling', () => {
    it('supports both seconds and HTTP-date Retry-After values', () => {
        vi.useFakeTimers()
        vi.setSystemTime(new Date('2026-08-13T00:00:00.000Z'))

        expect(new RateLimitError('1.5').retryAfterMs).toBe(1_500)
        expect(new RateLimitError('Thu, 13 Aug 2026 00:00:05 GMT').retryAfterMs).toBe(5_000)
        expect(new RateLimitError(null).retryAfterMs).toBe(30_000)
    })
})

describe('processConversation', () => {
    it('follows current_message_id and excludes unselected regenerated branches', () => {
        const result = processConversation(conversationFixture)

        expect(result.conversationNodes.map(node => node.id)).toEqual([
            'u1',
            'a-current',
            'u2',
            'a2',
        ])
        expect(result.conversationNodes.map(node => node.id)).not.toContain('a-old')
        expect(result.title).toBe('Exporter fixture')
        expect(result.model).toBe('DeepSeek Reasoner')
    })

    it('keeps reasoning, attachments, and search references in normalized output', () => {
        const result = processConversation(conversationFixture, { enableThinking: true })
        const attachment = result.conversationNodes[2].message?.content
        const answer = result.conversationNodes[3]

        expect(attachment?.content_type).toBe('multimodal_text')
        if (attachment?.content_type === 'multimodal_text') {
            expect(attachment.parts[1]).toMatchObject({
                content_type: 'image_asset_pointer',
                asset_pointer: 'https://chat.deepseek.com/api/v0/file/diagram.png',
                width: 640,
                height: 480,
            })
        }

        expect(answer.thinking?.durationSeconds).toBe(12)
        expect(answer.thinking?.thoughts[0].content).toBe('I should verify the primary source.')
        expect(answer.message?.content).toEqual({
            content_type: 'text',
            parts: ['The primary source confirms it.[reference:0]'],
        })

        const references = answer.message?.metadata?.content_references ?? []
        expect(references.filter(reference => reference.type === 'webpage')).toHaveLength(1)
        expect(references.find(reference => reference.type === 'sources_footnote')?.sources).toHaveLength(2)

        const rendered = transformContentReferences(
            'The primary source confirms it.[reference:0]',
            answer.message?.metadata,
        )
        expect(rendered).toContain('https://www.deepseek.com/')
        expect(rendered).toContain('https://api-docs.deepseek.com/')
        expect(rendered).not.toContain('[reference:0]')
    })

    it('supports the current one-based citation markers returned by DeepSeek search', () => {
        const conversation = structuredClone(conversationFixture)
        const answer = conversation.chat_messages.find(message => message.message_id === 'a2')
        if (!answer) throw new Error('Fixture answer is missing')
        answer.fragments = [{
            type: 'SEARCH',
            results: [{
                cite_index: 1,
                title: 'JSZip Tampermonkey regression',
                url: 'https://github.com/Stuk/jszip/issues/934',
                site_name: 'GitHub',
            }],
        }, {
            type: 'RESPONSE',
            content: 'Confirmed once[citation:1] and again[citation:1].',
        }]

        const result = processConversation(conversation)
        const message = result.conversationNodes.find(node => node.id === 'a2')?.message
        const content = message?.content.parts[0]
        const rendered = transformContentReferences(String(content), message?.metadata)
        const plainText = transformContentReferences(String(content), message?.metadata, {
            output: 'text',
            inlineReferenceMode: 'alt',
            includeSourceList: false,
        })

        expect(rendered).not.toContain('[citation:1]')
        expect(rendered).toContain('https://github.com/Stuk/jszip/issues/934')
        expect(plainText).toBe('Confirmed once[1] and again[1].')
    })

    it('omits reasoning unless the setting is enabled', () => {
        const result = processConversation(conversationFixture)
        expect(result.conversationNodes.every(node => node.thinking == null)).toBe(true)
    })

    it('adds the elapsed time of multi-stage thinking', () => {
        const conversation = structuredClone(conversationFixture)
        const answer = conversation.chat_messages.find(message => message.message_id === 'a2')
        if (!answer) throw new Error('Fixture answer is missing')
        answer.fragments = [{ type: 'THINK', content: 'Search first.', elapsed_secs: 1.705 }, {
            type: 'THINK',
            content: 'Open sources.',
            elapsed_secs: 0.954,
        }, {
            type: 'THINK',
            content: 'Compose answer.',
            elapsed_secs: 1.278,
        }, {
            type: 'RESPONSE',
            content: 'Done.',
        }]

        const result = processConversation(conversation, { enableThinking: true })
        const thinking = result.conversationNodes.find(node => node.id === 'a2')?.thinking
        if (!thinking) throw new Error('Thinking content is missing')

        expect(thinking.thoughts.map(thought => thought.content)).toEqual([
            'Search first.',
            'Open sources.',
            'Compose answer.',
        ])
        expect(thinking.durationSeconds).toBeCloseTo(3.937)
        expect(formatDurationSeconds(thinking.durationSeconds!)).toBe('3.9')
    })

    it('keeps messages with attachments in Tavern and Ooba conversions', () => {
        const result = processConversation(conversationFixture)

        expect(convertToTavern(result)).toContain('Use this diagram and search the web.\\n[image]')
        expect(convertToOoba(result)).toContain('Use this diagram and search the web.\\n[image]')
    })
})

describe('fetchConversation', () => {
    it('resolves DeepSeek signed image paths through the file service', async () => {
        vi.stubGlobal('localStorage', { getItem: () => 'test-token' })
        vi.stubGlobal('document', { documentElement: { lang: 'en-US' } })
        vi.stubGlobal('navigator', { language: 'en-US' })

        const conversation = structuredClone(conversationFixture)
        const attachment = conversation.chat_messages[3].files?.[0]
        if (!attachment) throw new Error('Fixture attachment is missing')
        attachment.signed_path = '/file?file_id=image-1&state=signed'

        const fetchMock = vi.fn()
            .mockResolvedValueOnce(new Response(JSON.stringify({
                code: 0,
                data: {
                    biz_code: 0,
                    biz_data: {
                        chat_session: conversation.chat_session,
                        chat_messages: conversation.chat_messages,
                    },
                },
            }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            }))
            .mockResolvedValueOnce(new Response(null, { status: 404 }))
        vi.stubGlobal('fetch', fetchMock)

        const result = await fetchConversation('session-1', true)

        expect(String(fetchMock.mock.calls[1]?.[0])).toBe(
            'https://files.deepseeksvc.com/api/file?file_id=image-1&state=signed&ty=p',
        )
        const normalized = processConversation(result)
        const content = normalized.conversationNodes[2].message?.content
        expect(content?.content_type).toBe('multimodal_text')
        if (content?.content_type === 'multimodal_text') {
            expect(content.parts[1]).toMatchObject({
                asset_pointer: 'https://files.deepseeksvc.com/api/file?file_id=image-1&state=signed&ty=p',
            })
        }
    })
})

describe('fetchAllConversations', () => {
    it('follows DeepSeek cursors, de-duplicates the inclusive boundary, and streams pages', async () => {
        vi.stubGlobal('localStorage', { getItem: () => 'test-token' })
        vi.stubGlobal('document', { documentElement: { lang: 'en-US' } })
        vi.stubGlobal('navigator', { language: 'en-US' })

        const pages = [
            {
                chat_sessions: [
                    { id: 's1', title: 'First', pinned: true, inserted_at: 30, updated_at: 30 },
                    { id: 's2', title: 'Second', pinned: false, inserted_at: 20, updated_at: 20 },
                ],
                has_more: true,
            },
            {
                chat_sessions: [
                    { id: 's2', title: 'Second', pinned: false, inserted_at: 20, updated_at: 20 },
                    { id: 's3', title: 'Third', pinned: false, inserted_at: 10, updated_at: 10 },
                ],
                has_more: false,
            },
        ]
        const requestedUrls: string[] = []
        vi.stubGlobal('fetch', vi.fn(async (input: URL | RequestInfo) => {
            requestedUrls.push(String(input))
            const page = pages.shift()
            return new Response(JSON.stringify({
                code: 0,
                data: { biz_code: 0, biz_data: page },
            }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            })
        }))

        const batches: string[][] = []
        const result = await fetchAllConversations(
            null,
            3,
            batch => batches.push(batch.map(item => item.id)),
        )

        expect(result.map(item => item.id)).toEqual(['s1', 's2', 's3'])
        expect(batches).toEqual([['s1', 's2'], ['s3']])
        expect(requestedUrls).toHaveLength(2)
        expect(requestedUrls[1]).toContain('lte_cursor.pinned=false')
        expect(requestedUrls[1]).toContain('lte_cursor.updated_at=20')
    })
})

describe('deleteConversation', () => {
    it('posts only the selected conversation id to the DeepSeek delete endpoint', async () => {
        vi.stubGlobal('localStorage', { getItem: () => 'test-token' })
        vi.stubGlobal('document', { documentElement: { lang: 'en-US' } })
        vi.stubGlobal('navigator', { language: 'en-US' })

        const fetchMock = vi.fn(async (_input: URL | RequestInfo, _init?: RequestInit) => new Response(JSON.stringify({
            code: 0,
            data: { biz_code: 0, biz_data: null },
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        }))
        vi.stubGlobal('fetch', fetchMock)

        await expect(deleteConversation('selected-chat-id')).resolves.toBe(true)

        expect(fetchMock).toHaveBeenCalledOnce()
        const [input, init] = fetchMock.mock.calls[0]
        const headers = new Headers(init?.headers)
        expect(String(input)).toBe('https://chat.deepseek.com/api/v0/chat_session/delete')
        expect(init).toMatchObject({
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({ chat_session_id: 'selected-chat-id' }),
        })
        expect(headers.get('Authorization')).toBe('Bearer test-token')
        expect(headers.get('Content-Type')).toBe('application/json')
    })
})
