import assert from 'node:assert/strict'
import { writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

// Use the existing runtime instead of adding a production dependency.
const { chromium } = createRequire(import.meta.url)(process.env.PLAYWRIGHT_MODULE_PATH || 'playwright')
const output = dirname(fileURLToPath(import.meta.url))
const browser = await chromium.launch({ channel: 'msedge', headless: true })
try {
    const page = await browser.newPage({ viewport: { width: 1120, height: 1000 }, deviceScaleFactor: 1 })
    const errors = []
    page.on('pageerror', error => errors.push(String(error)))
    await page.goto(pathToFileURL(join(output, 'thinking-format.html')).href, { waitUntil: 'networkidle' })
    const details = page.locator('details.thinking')
    assert.equal(await details.count(), 1)
    assert.equal(await details.evaluate(element => element.open), false)
    await details.locator('summary').click()
    assert.equal(await details.evaluate(element => element.open), true)
    assert.equal(await details.locator('strong').count(), 3)
    assert.equal(await details.locator('table tbody tr').count(), 3)
    assert.equal(await details.locator('pre code').count(), 1)
    assert.match(await details.locator('pre code').textContent(), /std::forward<Args>/)
    const paragraph = details.locator('p').filter({ hasText: '先检查模板参数' })
    assert.equal(await paragraph.evaluate(element => getComputedStyle(element).whiteSpace), 'pre-wrap')
    assert.match(await paragraph.textContent(), /\n/)
    await page.screenshot({ path: join(output, 'thinking-light.png'), fullPage: true })
    const mathCount = await details.locator('.katex').count()
    await page.locator('.toggle:not(.width-toggle)').click()
    assert.equal(await page.locator('html').getAttribute('data-theme'), 'dark')
    assert.equal(await details.evaluate(element => getComputedStyle(element).color), 'rgb(156, 163, 175)')
    await page.screenshot({ path: join(output, 'thinking-dark.png'), fullPage: true })
    await page.setViewportSize({ width: 560, height: 900 })
    await page.screenshot({ path: join(output, 'thinking-narrow.png'), fullPage: true })
    await details.locator('summary').click()
    assert.equal(await details.evaluate(element => element.open), false)
    const result = {
        listsBoldTableCpp: 'passed',
        softLineBreaks: 'passed',
        detailsToggle: 'passed',
        darkTheme: 'passed',
        renderedMathCount: mathCount,
        pageErrors: errors,
    }
    writeFileSync(join(output, 'browser-check.json'), `${JSON.stringify(result, null, 2)}\n`)
    process.stdout.write(`${JSON.stringify(result)}\n`)
}
finally {
    await browser.close()
}
