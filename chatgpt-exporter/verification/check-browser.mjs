import assert from 'node:assert/strict'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import JSZip from 'jszip'

const require = createRequire(import.meta.url)
const { chromium } = require(process.env.PLAYWRIGHT_MODULE_PATH || 'playwright')
const root = dirname(dirname(fileURLToPath(import.meta.url)))
const output = join(root, 'verification', 'output')
mkdirSync(output, { recursive: true })
const id = index => `00000000-0000-0000-0000-${String(index).padStart(12, '0')}`
const list = Array.from({ length: 137 }, (_, index) => ({
    id: id(index + 1),
    title: `测试对话 ${String(index + 1).padStart(3, '0')}`,
    create_time: 1790000000 - index,
    update_time: 1790000010 - index,
}))
function conversation(chatId) {
    const messages = [
        { role: 'user', content: { content_type: 'text', parts: ['解释 C++ 可变参数模板。'] } },
        { role: 'assistant', content: { content_type: 'thoughts', thoughts: [{ summary: '', content: '1. **分析请求**\n   - 区分 `Args...` 和 `Args&&...`。\n\n```cpp\ntemplate <class... Args>\nvoid Func(Args&&... args);\n```\n\n先确认参数类型。\n再检查引用折叠。\n\n公式：\\(E=mc^2\\)。' }] } },
        { role: 'assistant', content: { content_type: 'reasoning_recap', content: 'Thought for 7.2 seconds' }, metadata: { finished_duration_sec: 7.234 } },
        { role: 'assistant', content: { content_type: 'text', parts: ['**回答示例**：按值接收和转发引用具有不同的类型推导行为。'] }, metadata: { model_slug: 'gpt-test' } },
    ]
    return {
        id: chatId,
        conversation_id: chatId,
        title: list.find(item => item.id === chatId)?.title ?? '项目测试对话',
        create_time: 1790000000,
        update_time: 1790000010,
        current_node: 'm3',
        is_archived: false,
        moderation_results: [],
        mapping: Object.fromEntries(messages.map((message, index) => [`m${index}`, {
            id: `m${index}`,
            parent: index === 0 ? null : `m${index - 1}`,
            children: index < 3 ? [`m${index + 1}`] : [],
            message: { id: `m${index}`, author: { role: message.role }, content: message.content, recipient: 'all', metadata: message.metadata ?? {}, create_time: 1790000000 + index },
        }])),
    }
}

const shell = `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><title>测试对话 - ChatGPT</title><style>
body{margin:0;background:#fff;color:#171717;font:16px system-ui}aside{position:fixed;width:240px;left:0;top:0;height:100vh;background:#f5f5f5;display:flex;flex-direction:column;padding:12px;box-sizing:border-box}nav{flex:1}main{margin-left:270px;padding:36px}button{font:inherit}article{padding:20px;border-bottom:1px solid #ddd}#profile{margin-top:auto}h1{font-size:24px}
</style></head><body><aside><h2>ChatGPT</h2><nav>测试环境 · 合成对话</nav><div id="profile"><button data-testid="accounts-profile-button">测试账户</button></div></aside><main><h1>导出验证示例</h1><article data-testid="conversation-turn-0">解释 C++ 可变参数模板。</article><article data-testid="conversation-turn-1">这是一条用于验证导出的合成回答。</article></main></body></html>`

const browser = await chromium.launch({ channel: 'msedge', headless: true })
try {
    const context = await browser.newContext({ viewport: { width: 1280, height: 960 }, acceptDownloads: true })
    let injectedFailure = false
    const listOffsets = []
    const projectCursors = []
    const errors = []
    await context.route('https://chatgpt.com/**', async (route) => {
        const url = new URL(route.request().url())
        const respond = (data, status = 200) => route.fulfill({ status, contentType: 'application/json', body: JSON.stringify(data) })
        if (url.pathname.startsWith('/c/')) return route.fulfill({ contentType: 'text/html', body: shell })
        assert.equal(route.request().method(), 'GET', 'verification must never mutate conversations')
        if (url.pathname === '/api/auth/session') return respond({ accessToken: 'synthetic-test-token' })
        if (url.pathname === '/backend-api/gizmos/snorlax/sidebar') {
            return respond({ items: [{ gizmo: { gizmo: { id: 'project-demo', organization_id: 'test', display: { name: '项目分页测试', description: '' } } } }], cursor: null })
        }
        if (url.pathname === '/backend-api/gizmos/project-demo/conversations') {
            const cursor = url.searchParams.get('cursor')
            projectCursors.push(cursor)
            assert.ok(cursor === '0' || cursor === 'opaque-project-next')
            return respond(cursor === '0' ? { items: list.slice(0, 2), cursor: 'opaque-project-next' } : { items: list.slice(2, 3), cursor: null })
        }
        if (url.pathname === '/backend-api/conversations') {
            const offset = Number(url.searchParams.get('offset'))
            listOffsets.push(offset)
            if (offset === 40 && !injectedFailure) {
                injectedFailure = true
                return respond({ error: 'synthetic transient failure' }, 500)
            }
            const count = Math.min(40, Number(url.searchParams.get('limit')))
            return respond({ items: list.slice(offset, offset + count), total: list.length })
        }
        if (url.pathname.startsWith('/backend-api/conversation/')) return respond(conversation(url.pathname.split('/').at(-1)))
        return route.fulfill({ status: 404, body: '' })
    })
    const page = await context.newPage()
    page.on('pageerror', error => errors.push(String(error)))
    page.on('dialog', dialog => dialog.dismiss())
    await page.addInitScript(() => {
        const values = new Map([
            ['exporter:language', JSON.stringify('zh-Hans')],
            ['exporter:enable_thinking', 'true'],
            ['exporter:export_all_limit', '1000'],
        ])
        window.unsafeWindow = window
        window.GM_getValue = (key, fallback) => values.get(key) ?? fallback
        window.GM_setValue = (key, value) => values.set(key, value)
        window.GM_deleteValue = key => values.delete(key)
    })
    await page.goto(`https://chatgpt.com/c/${id(1)}`)
    await page.addScriptTag({ path: require.resolve('jszip/dist/jszip.min.js') })
    await page.addScriptTag({ path: join(root, 'node_modules', '@zumer', 'snapdom', 'dist', 'snapdom.js') })
    await page.addScriptTag({ path: join(root, 'dist', 'chatgpt.user.js') })
    await page.getByRole('button', { name: '导出助手', exact: true }).click()
    await page.getByRole('button', { name: '批量导出', exact: true }).click()
    const rows = page.locator('.ce-select-list input[type="checkbox"]')
    await page.locator('.ce-load-more button').waitFor()
    assert.equal(await rows.count(), 40)
    assert.match(await page.locator('.ce-select-list').textContent(), /500/)
    for (const expected of [80, 120, 137]) {
        await page.locator('.ce-load-more button').click()
        await page.waitForFunction(count => document.querySelectorAll('.ce-select-list input[type="checkbox"]').length === count, expected)
    }
    assert.equal(await page.locator('.ce-load-more').count(), 0)
    await page.screenshot({ path: join(output, 'chatgpt-list-137.png'), fullPage: true })
    await rows.nth(0).check()
    await rows.nth(1).check()
    await page.locator('.ce-action-bar select').selectOption('HTML')
    const downloadPromise = page.waitForEvent('download')
    await page.getByRole('button', { name: '导出', exact: true }).click()
    const download = await downloadPromise
    const zipPath = join(output, 'chatgpt-html-test.zip')
    await download.saveAs(zipPath)
    const zip = await JSZip.loadAsync(readFileSync(zipPath))
    const files = Object.values(zip.files).filter(file => !file.dir)
    assert.equal(files.length, 2)
    const html = await files[0].async('string')
    assert.match(html, /<strong>分析请求<\/strong>/)
    assert.match(html, /<summary>已思考 7.2 秒<\/summary>/)
    assert.match(html, /<pre><code class="language-cpp">/)
    const htmlPath = join(output, 'chatgpt-thinking.html')
    writeFileSync(htmlPath, html)
    process.stdout.write('137 conversations and HTML ZIP download verified.\n')

    await page.locator('.ce-project-select select').selectOption('project-demo')
    await page.waitForFunction(() => document.querySelectorAll('.ce-select-list input[type="checkbox"]').length === 3)
    assert.deepEqual(projectCursors, ['0', 'opaque-project-next'])
    await page.screenshot({ path: join(output, 'chatgpt-project.png'), fullPage: true })
    await page.getByRole('button', { name: 'Close', exact: true }).click()
    await page.getByRole('button', { name: '导出助手', exact: true }).click()
    const markdownDownloadPromise = page.waitForEvent('download')
    await page.getByRole('button', { name: 'Markdown', exact: true }).click()
    const markdownDownload = await markdownDownloadPromise
    const markdownPath = join(output, 'chatgpt-single.md')
    await markdownDownload.saveAs(markdownPath)
    const markdown = readFileSync(markdownPath, 'utf8')
    assert.match(markdown, /<summary>已思考 7.2 秒<\/summary>/)
    assert.match(markdown, /\*\*分析请求\*\*/)
    assert.match(markdown, /```cpp/)
    await page.locator('aside').evaluate(element => element.remove())
    await page.locator('.ce-floating-fallback').waitFor()
    assert.equal(await page.locator('.ce-floating-fallback .ce-nav-trigger').count(), 1)
    await page.screenshot({ path: join(output, 'chatgpt-floating-entry.png'), fullPage: true })

    const preview = await context.newPage()
    await preview.goto(pathToFileURL(htmlPath).href, { waitUntil: 'networkidle' })
    await preview.locator('details.thinking summary').click()
    assert.equal(await preview.locator('details.thinking strong').count(), 1)
    assert.equal(await preview.locator('details.thinking .katex').count(), 1)
    await preview.screenshot({ path: join(output, 'chatgpt-thinking.png'), fullPage: true })
    const report = {
        syntheticDataOnly: true,
        totalConversations: 137,
        listOffsets,
        projectCursors,
        downloadedHtmlFiles: files.length,
        singleMarkdownDownload: 'passed',
        thinkingFormatting: 'passed',
        fallbackMount: 'passed',
        pageErrors: errors,
    }
    assert.deepEqual(errors, [])
    writeFileSync(join(output, 'browser-check.json'), `${JSON.stringify(report, null, 2)}\n`)
    process.stdout.write(`${JSON.stringify(report)}\n`)
}
finally {
    await browser.close()
}
