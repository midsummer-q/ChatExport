import JSZip from 'jszip'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { processConversation } from '../src/api'
import { conversationToHtml } from '../src/exporter/html'
import { conversationToMarkdown, createMarkdownArchive } from '../src/exporter/markdown'
import i18n from '../src/i18n'
import { getFileNameWithFormat } from '../src/utils/download'
import { escapeHtml, safeImageUrl } from '../src/utils/html'
import { parseConversationExport } from '../src/utils/import'
import { fromMarkdown, toHtml } from '../src/utils/markdown'
import type { ApiConversationWithId } from '../src/api'
import fixture from './fixtures/history-messages.json'

vi.mock('vite-plugin-monkey/dist/client', () => ({
    GM_deleteValue: undefined,
    GM_getValue: undefined,
    GM_setValue: undefined,
}))

const conversationFixture = fixture as ApiConversationWithId

afterEach(() => {
    vi.unstubAllGlobals()
})

describe('local export validation', () => {
    it('accepts DeepSeek raw exports and normalizes their id', () => {
        const imported = parseConversationExport(JSON.stringify([conversationFixture]))
        expect(imported).toHaveLength(1)
        expect(imported[0].id).toBe(String(conversationFixture.chat_session.id))
    })

    it('rejects arbitrary JSON arrays before they reach an exporter', () => {
        expect(() => parseConversationExport('[{"title":"not a conversation"}]')).toThrow(TypeError)
        expect(() => parseConversationExport('{"chat_messages":[]}')).toThrow(TypeError)
        expect(() => parseConversationExport('not-json')).toThrow()
    })
})

describe('standalone HTML safety', () => {
    it('escapes markup and rejects executable image URLs', () => {
        expect(escapeHtml('<script>"x"</script>')).toBe('&lt;script&gt;&quot;x&quot;&lt;/script&gt;')
        expect(safeImageUrl('javascript:alert(1)')).toBe('')
        expect(safeImageUrl('data:text/html,<script>alert(1)</script>')).toBe('')
        expect(safeImageUrl('https://example.com/image.png')).toBe('https://example.com/image.png')
    })

    it('sanitizes dangerous Markdown protocols', () => {
        const html = toHtml(fromMarkdown('[unsafe](javascript:alert(1))\n\n<script>alert(1)</script>'))
        expect(html).toContain('<a>unsafe</a>')
        expect(html).not.toContain('javascript:')
        expect(html).not.toContain('<script>')
    })

    it('escapes conversation titles and metadata in the generated document', () => {
        const classList = { contains: () => false }
        vi.stubGlobal('document', {
            documentElement: { lang: 'en', classList, dataset: {} },
            body: { classList, dataset: {} },
        })
        vi.stubGlobal('getComputedStyle', () => ({ colorScheme: 'light' }))
        vi.stubGlobal('window', { matchMedia: () => ({ matches: false }) })

        const conversation = processConversation(structuredClone(conversationFixture))
        conversation.title = '<img src=x onerror=alert(1)>'
        const html = conversationToHtml(conversation, 'javascript:alert(1)', [
            { name: '<script>name</script>', value: '{title}' },
        ])

        expect(html).toContain('&lt;img src=x onerror=alert(1)&gt;')
        expect(html).toContain('&lt;script&gt;name&lt;/script&gt;')
        expect(html).not.toContain('<script>name</script>')
        expect(html).toContain('content: url("");')

        const dataUrlHtml = conversationToHtml(conversation, 'data:image/svg+xml,</style><script>alert(1)</script>')
        expect(dataUrlHtml).not.toContain('</style><script>alert(1)</script>')
    })

    it('preserves blockquotes and LaTeX when the same answer contains a code fence', () => {
        const classList = { contains: () => false }
        vi.stubGlobal('document', {
            documentElement: { lang: 'en', classList, dataset: {} },
            body: { classList, dataset: {} },
        })
        vi.stubGlobal('getComputedStyle', () => ({ colorScheme: 'light' }))
        vi.stubGlobal('window', { matchMedia: () => ({ matches: false }) })

        const conversation = processConversation(structuredClone(conversationFixture))
        const answer = conversation.conversationNodes.find(node => node.id === 'a2')?.message
        if (!answer) throw new Error('Fixture answer is missing')
        answer.content = {
            content_type: 'text',
            parts: [
                '> Outer quote with \\(E=mc^2\\).\n> > Nested quote.\n\n\\[\n\\int_0^1 x^2\\,dx=\\frac{1}{3}\n\\]\n\n```js\nconst formula = String.raw`\\(...\\)`;\n```',
            ],
        }

        const html = conversationToHtml(conversation, '')
        const markdown = conversationToMarkdown(conversation)

        expect(html).toContain('<blockquote>')
        expect(html).toContain('\\(E=mc^2\\)')
        expect(html).toContain('\\[\n\\int_0^1 x^2\\,dx=\\frac{1}{3}\n\\]')
        expect(html).toContain('String.raw`\\(...\\)`')
        expect(html).toContain('<pre><code class="language-js">')
        expect(markdown).toContain('> Outer quote with $E=mc^2$.')
        expect(markdown).toContain('String.raw`\\(...\\)`')
        expect(markdown).not.toContain('String.raw`$...$`')
    })

    it('keeps literal brackets in citation titles out of KaTeX', () => {
        const classList = { contains: () => false }
        vi.stubGlobal('document', {
            documentElement: { lang: 'en', classList, dataset: {} },
            body: { classList, dataset: {} },
        })
        vi.stubGlobal('getComputedStyle', () => ({ colorScheme: 'light' }))
        vi.stubGlobal('window', { matchMedia: () => ({ matches: false }) })

        const apiConversation = structuredClone(conversationFixture)
        const answer = apiConversation.chat_messages.find(message => message.message_id === 'a2')
        if (!answer) throw new Error('Fixture answer is missing')
        answer.fragments = [{
            type: 'SEARCH',
            results: [{
                cite_index: 1,
                title: 'generateAsync(options[, onUpdate])',
                url: 'https://stuk.github.io/jszip/documentation/api_jszip/generate_async.html',
                site_name: 'JSZip Docs',
                snippet: 'Generate a ZIP archive asynchronously.',
                published_at: 1_695_916_800,
            }],
        }, {
            type: 'RESPONSE',
            content: 'See the API[citation:1].',
        }]

        const conversation = processConversation(apiConversation)
        const markdown = conversationToMarkdown(conversation)
        const html = conversationToHtml(conversation, '')

        expect(markdown).toContain('[generateAsync(options\\[, onUpdate\\])]')
        expect(markdown).toContain('— JSZip Docs')
        expect(markdown).toContain(`<summary>${i18n.t('Sources')} (1)</summary>`)
        expect(markdown).not.toContain('<details open>')
        expect(markdown).not.toContain('generateAsync(options$, onUpdate$)')
        expect(html).toContain('>generateAsync(options[, onUpdate])</a>')
        expect(html).toContain('JSZip Docs · stuk.github.io · 2023-')
        expect(html).toContain('Generate a ZIP archive asynchronously.')
        expect(html).toContain('<details class="export-sources">')
        expect(html).toContain(`<summary>${i18n.t('Sources')} (1)</summary>`)
        expect(html).not.toContain('<details class="export-sources" open>')
        expect(html).not.toContain('generateAsync(options\\[, onUpdate\\])')
    })
})

describe('markdown metadata safety', () => {
    it('keeps metadata values inside valid quoted YAML scalars', () => {
        const conversation = processConversation(structuredClone(conversationFixture))
        conversation.title = 'Title\n---\ninjected: true'

        const markdown = conversationToMarkdown(conversation, [
            { name: 'custom:key', value: '{title}\nunsafe: true' },
        ])

        expect(markdown).toContain('"custom:key": "Title\\n---\\ninjected: true\\nunsafe: true"')
        expect(markdown).toContain('# Title --- injected: true')
        expect(markdown).not.toContain('\nunsafe: true\n')
    })

    it('creates a readable ZIP containing every selected Markdown conversation', async () => {
        const secondConversation = structuredClone(conversationFixture)
        secondConversation.id = 'second-conversation'
        secondConversation.chat_session.id = 'second-conversation'
        secondConversation.title = 'Second conversation'

        const blob = await createMarkdownArchive(
            '{title}-{chat_id}',
            [conversationFixture, secondConversation],
        )
        const archive = await JSZip.loadAsync(new Uint8Array(await blob.arrayBuffer()))
        const files = Object.values(archive.files).filter(file => !file.dir)

        expect(blob.type).toBe('application/zip')
        expect(files).toHaveLength(2)
        expect(files.every(file => file.name.endsWith('.md'))).toBe(true)
        await expect(files[0].async('string')).resolves.toContain('# Exporter fixture')
        await expect(files[1].async('string')).resolves.toContain('# Second conversation')
    })
})

describe('filenames', () => {
    it('sanitizes placeholders after rendering and replaces repeated placeholders', () => {
        const name = getFileNameWithFormat('{title}-{title}-{chat_id}', 'json', {
            title: 'bad/name',
            chatId: '../session',
            createTime: 1,
            updateTime: 1,
        })
        expect(name).toBe('bad_name-bad_name-.._session.json')
        expect(name).not.toContain('/')
    })
})
