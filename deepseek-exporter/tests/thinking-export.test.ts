import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { processConversation } from '../src/api'
import { conversationToHtml } from '../src/exporter/html'
import { conversationToMarkdown } from '../src/exporter/markdown'
import i18n from '../src/i18n'
import type { ApiConversationWithId } from '../src/api'
import thinkingMarkdown from './fixtures/thinking-markdown.md?raw'

vi.mock('vite-plugin-monkey/dist/client', () => ({
    GM_deleteValue: undefined,
    GM_getValue: undefined,
    GM_setValue: undefined,
}))

function rawConversation(thought = thinkingMarkdown): ApiConversationWithId {
    return {
        id: 'thinking-format-example',
        title: 'C++ 可变参数模板：导出格式示例',
        create_time: 1_790_000_000,
        update_time: 1_790_000_010,
        chat_session: { id: 'thinking-format-example', current_message_id: 'answer' },
        chat_messages: [
            { message_id: 'question', role: 'USER', content: '解释这三种 C++ 可变参数模板写法。' },
            {
                message_id: 'answer',
                parent_id: 'question',
                role: 'ASSISTANT',
                fragments: [
                    { type: 'THINK', content: thought, elapsed_secs: 7.234 },
                    { type: 'RESPONSE', content: '正文示例：三种写法分别按值、左值引用，以及满足推导条件时的转发引用接收参数。' },
                ],
            },
        ],
    }
}

function thinkingHtml(thought: string): string {
    const html = conversationToHtml(processConversation(rawConversation(thought), { enableThinking: true }), '')
    return html.match(/<details class="thinking">[\s\S]*?<\/details>/)?.[0] ?? ''
}

beforeEach(async () => {
    const classList = { contains: () => false }
    vi.stubGlobal('document', {
        documentElement: { lang: 'zh-CN', classList, dataset: {} },
        body: { classList, dataset: {} },
    })
    vi.stubGlobal('getComputedStyle', () => ({ colorScheme: 'light' }))
    vi.stubGlobal('window', { matchMedia: () => ({ matches: false }) })
    await i18n.changeLanguage('zh-Hans')
})

afterEach(() => vi.unstubAllGlobals())

describe('thinking export formatting', () => {
    it('renders Markdown lists, emphasis, tables and C++ code inside the collapsible HTML section', () => {
        const html = thinkingHtml(thinkingMarkdown)
        expect(html).toContain('<summary>已思考 7.2 秒</summary>')
        expect(html).toContain('<strong>分析用户请求</strong>')
        expect(html).toContain('<ol>')
        expect(html).toContain('<ul>')
        expect(html).toContain('<table>')
        expect(html).toContain('<blockquote>')
        expect(html).toContain('<pre><code class="language-cpp">')
        expect(html).toContain('    call(std::forward&#x3C;Args>(args)...);')
        expect(html).toContain('先检查模板参数。\n再确认实参类型。')
        expect(html).toContain('\\(E = mc^2\\)')
        expect(html).toContain('\\sum_{i=1}^{n}')
        expect(html).not.toContain('**分析用户请求**')
    })

    it('preserves Markdown structure and fenced code while normalizing reasoning math', () => {
        const markdown = conversationToMarkdown(processConversation(rawConversation(), { enableThinking: true }))
        expect(markdown).toContain('<summary>已思考 7.2 秒</summary>\n\n')
        expect(markdown).toContain('**分析用户请求**')
        expect(markdown).toContain('```cpp\n   template <class... Args>')
        expect(markdown).toContain('call(std::forward<Args>(args)...);')
        expect(markdown).toContain('$E = mc^2$')
        expect(markdown).toContain('$$\n\\sum_{i=1}^{n}')
        expect(markdown).toContain('\n\n</details>\n\n正文示例')
    })

    it('sanitizes reasoning HTML and unsafe links without losing safe formatting', () => {
        const html = thinkingHtml('**安全文本**\n\n[危险链接](javascript:alert(1))\n\n<img src=x onerror=alert(1)>\n\n<script>alert(1)</script>\n\n\\(<img src=x onerror=alert(1)>\\)')
        expect(html).toContain('<strong>安全文本</strong>')
        expect(html).not.toContain('javascript:')
        expect(html).not.toContain('<img')
        expect(html).not.toContain('<script>')
        expect(html).toContain('&lt;img src=x onerror=alert(1)&gt;')
    })

    it('omits thinking from both formats when the option is disabled', () => {
        const conversation = processConversation(rawConversation(), { enableThinking: false })
        expect(conversationToHtml(conversation, '')).not.toContain('<details class="thinking">')
        expect(conversationToMarkdown(conversation)).not.toContain('<summary>')
    })

    it('keeps separate reasoning stages and falls back to the summary', () => {
        const conversation = processConversation(rawConversation(), { enableThinking: true })
        conversation.conversationNodes[1].thinking = {
            thoughts: [
                { content: '**第一阶段**', summary: '' },
                { content: '', summary: '**第二阶段**' },
            ],
        }
        const html = conversationToHtml(conversation, '')
        expect(html).toContain('<summary>思考过程</summary>')
        expect(html).toContain('<p><strong>第一阶段</strong></p>\n<p><strong>第二阶段</strong></p>')
    })

    it('generates the standalone export used for visual verification', () => {
        const conversation = processConversation(rawConversation(), { enableThinking: true })
        const html = conversationToHtml(conversation, '')
        expect(html).toContain('.thinking-content')
        // Optional local artifacts use only this synthetic fixture, never account data.
        const previewDir = process.env.DEEPSEEK_PREVIEW_DIR
        if (previewDir) {
            mkdirSync(previewDir, { recursive: true })
            writeFileSync(join(previewDir, 'thinking-format.html'), html)
            writeFileSync(join(previewDir, 'thinking-format.md'), conversationToMarkdown(conversation))
        }
    })
})
