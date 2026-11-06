import JSZip from 'jszip'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import type { ApiConversationWithId } from '../src/api'

const downloadFile = vi.hoisted(() => vi.fn())
const settings = vi.hoisted(() => ({ thinking: true }))
vi.mock('vite-plugin-monkey/dist/client', () => ({ unsafeWindow: {} }))
vi.stubGlobal('location', { href: 'https://chatgpt.com/' })
vi.stubGlobal('document', { documentElement: { lang: 'zh-CN' } })
vi.mock('../src/i18n', () => ({
    default: {
        t: (key: string, options?: { duration: string }) => key === 'Thinking' ? '思考过程' : key === 'Thought for {{duration}} seconds' ? `已思考 ${options?.duration} 秒` : key,
    },
}))
vi.mock('../src/page', () => ({ getUserAvatar: async () => '' }))
vi.mock('../src/temporaryChat', () => ({}))
vi.mock('../src/utils/storage', () => ({ ScriptStorage: { get: (key: string) => key === 'exporter:enable_thinking' ? settings.thinking : null } }))
vi.mock('../src/utils/utils', async importOriginal => ({
    ...await importOriginal<typeof import('../src/utils/utils')>(),
    getColorScheme: () => 'light',
}))
vi.mock('../src/utils/download', async importOriginal => ({
    ...await importOriginal<typeof import('../src/utils/download')>(),
    downloadFile,
}))

const { exportAllToHtml } = await import('../src/exporter/html')
const { exportAllToMarkdown } = await import('../src/exporter/markdown')

const thought = '1. **分析请求**\n   - 保留 `Args&&... args`。\n\n```cpp\ntemplate <class... Args>\nvoid Func(Args&&... args);\n```\n\n先看类型。\n再看引用。\n\n公式：\\(E=mc^2\\)。'

function conversation(text = thought): ApiConversationWithId {
    const contents = [
        { content_type: 'text', parts: ['解释 C++ 模板。'] },
        { content_type: 'thoughts', thoughts: [{ summary: '', content: text }] },
        { content_type: 'reasoning_recap', content: 'Thought for 7.2 seconds' },
        { content_type: 'text', parts: ['正文回答。'] },
    ]
    return {
        id: 'test-chat',
        title: '思考格式示例',
        create_time: 1,
        update_time: 2,
        current_node: 'm3',
        mapping: Object.fromEntries(contents.map((content, index) => [`m${index}`, {
            id: `m${index}`,
            parent: index ? `m${index - 1}` : null,
            children: index < 3 ? [`m${index + 1}`] : [],
            message: {
                id: `m${index}`,
                author: { role: index === 0 ? 'user' : 'assistant' },
                content,
                recipient: 'all',
                metadata: index === 2 ? { finished_duration_sec: 7.234 } : {},
            },
        }])),
    } as unknown as ApiConversationWithId
}

async function exported(exporter: typeof exportAllToHtml, text = thought): Promise<string> {
    downloadFile.mockClear()
    await exporter('{title}', [conversation(text)])
    const zip = await JSZip.loadAsync(await (downloadFile.mock.calls[0][2] as Blob).arrayBuffer())
    return Object.values(zip.files).find(file => !file.dir)!.async('string')
}

beforeEach(() => settings.thinking = true)

describe('local thinking formatting', () => {
    it('renders lists, emphasis, C++ code, line breaks and math in the HTML export', async () => {
        const html = await exported(exportAllToHtml)
        expect(html).toContain('<summary>已思考 7.2 秒</summary>')
        expect(html).toContain('<strong>分析请求</strong>')
        expect(html).toContain('<ol>')
        expect(html).toContain('<ul>')
        expect(html).toContain('<pre><code class="language-cpp">template &lt;class... Args&gt;')
        expect(html).toContain('先看类型。\n再看引用。')
        expect(html).toContain('\\(E=mc^2\\)')
        expect(html).not.toContain('**分析请求**')
    })

    it('preserves reasoning Markdown and emits math usable in Markdown editors', async () => {
        const markdown = await exported(exportAllToMarkdown)
        expect(markdown).toContain('<summary>已思考 7.2 秒</summary>\n\n')
        expect(markdown).toContain('**分析请求**')
        expect(markdown).toContain('```cpp\ntemplate <class... Args>')
        expect(markdown).toContain('$E=mc^2$')
        expect(markdown).toContain('\n\n</details>\n\n正文回答。')
    })

    it('does not turn thinking text into executable markup', async () => {
        const html = await exported(exportAllToHtml, '**safe**\n\n<script>alert(999)</script>\n\n[bad](javascript:alert(999))')
        expect(html).toContain('<strong>safe</strong>')
        expect(html).not.toContain('<script>alert(999)</script>')
        expect(html).not.toContain('href="javascript:')
    })

    it('excludes reasoning from HTML and Markdown when disabled', async () => {
        settings.thinking = false
        expect(await exported(exportAllToHtml)).not.toContain('<details class="thinking">')
        expect(await exported(exportAllToMarkdown)).not.toContain('<summary>')
    })
})
