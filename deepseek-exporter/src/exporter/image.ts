import html2canvas from 'html2canvas'
import i18n from '../i18n'
import { checkIfConversationStarted, getChatIdFromUrl } from '../page'
import { downloadUrl, getFileNameWithFormat } from '../utils/download'
import { Effect } from '../utils/effect'
import { sleep } from '../utils/utils'

// https://github.com/niklasvh/html2canvas/issues/2792#issuecomment-1042948572
function fnIgnoreElements(el: any) {
    return typeof el.shadowRoot === 'object' && el.shadowRoot !== null
}

const CAPTURE_STICKY_ATTRIBUTE = 'data-deepseek-exporter-capture-sticky'
const CAPTURE_OVERLAY_ATTRIBUTE = 'data-deepseek-exporter-capture-overlay'

/**
 * DeepSeek keeps each reasoning header sticky and draws an empty gradient below
 * it. Both are useful while scrolling, but html2canvas places the gradient over
 * the first line when it renders the entire conversation at once.
 */
function markThinkingCaptureElements(thread: Element): () => void {
    const markedSticky: HTMLElement[] = []
    const markedOverlays: HTMLElement[] = []

    for (const content of Array.from(thread.querySelectorAll<HTMLElement>('.ds-think-content'))) {
        const container = content.parentElement
        if (!container) continue

        for (const sibling of Array.from(container.children)) {
            if (!(sibling instanceof HTMLElement)) continue
            if (getComputedStyle(sibling).position !== 'sticky') continue

            sibling.setAttribute(CAPTURE_STICKY_ATTRIBUTE, '')
            markedSticky.push(sibling)

            const stickyRect = sibling.getBoundingClientRect()
            for (const descendant of Array.from(sibling.querySelectorAll<HTMLElement>('*'))) {
                const style = getComputedStyle(descendant)
                const rect = descendant.getBoundingClientRect()
                if (
                    style.position === 'absolute'
                    && !descendant.textContent?.trim()
                    && rect.bottom > stickyRect.bottom
                ) {
                    descendant.setAttribute(CAPTURE_OVERLAY_ATTRIBUTE, '')
                    markedOverlays.push(descendant)
                }
            }
        }
    }

    return () => {
        markedSticky.forEach(element => element.removeAttribute(CAPTURE_STICKY_ATTRIBUTE))
        markedOverlays.forEach(element => element.removeAttribute(CAPTURE_OVERLAY_ATTRIBUTE))
    }
}

export async function exportToPng(fileNameFormat: string) {
    if (!checkIfConversationStarted()) {
        alert(i18n.t('Please start a conversation first'))
        return false
    }

    const effect = new Effect()

    const thread = document.querySelector('.ds-virtual-list-items')
        ?? document.querySelector('.ds-virtual-list--printable')
    if (!thread || thread.children.length === 0 || thread.scrollHeight < 50) {
        alert(i18n.t('Failed to export to PNG. Failed to find the element node.'))
        return false
    }

    const isDarkMode = document.body.classList.contains('dark')

    effect.add(() => markThinkingCaptureElements(thread))

    effect.add(() => {
        const style = document.createElement('style')
        style.textContent = `
            .ds-virtual-list-items,
            .ds-virtual-list-visible-items {
                color: ${isDarkMode ? '#f4f4f5' : '#1f2329'};
                background-color: ${isDarkMode ? '#202124' : '#f8faff'};
            }

            /* https://github.com/niklasvh/html2canvas/issues/2775#issuecomment-1204988157 */
            img {
                display: initial !important;
            }

            pre {
                margin-top: 8px !important;
            }

            pre > div > div > span {
                margin-top: -12px;
                padding-bottom: 2px;
            }

            [${CAPTURE_STICKY_ATTRIBUTE}] {
                position: static !important;
                inset: auto !important;
                z-index: auto !important;
            }

            [${CAPTURE_OVERLAY_ATTRIBUTE}] {
                display: none !important;
            }

            #page-header,
            #thread-bottom-container,
            /* any other elements that are not conversation turns */
            #thread div:has(> [data-testid="conversation-turn-1"]) > :not([data-testid^="conversation-turn-"]),
            /* hide back to top button */
            button.absolute,
            /* question button */
            .group.absolute > button {
                display: none;
            }

            /* conversation action bar */
            .group\\/conversation-turn > div > div.absolute,
            /* code block buttons */
            #thread pre button,
            .ds-virtual-list-items button,
            .ds-virtual-list-items [role="button"],
            .ds-virtual-list-items textarea {
                visibility: hidden;
            }
            `
        thread!.appendChild(style)
        return () => style.remove()
    })

    const threadEl = thread as HTMLElement

    const passLimit = 10
    const takeScreenshot = async (width: number, height: number, additionalScale = 1, currentPass = 1): Promise<string | null> => {
        const ratio = window.devicePixelRatio || 1
        const scale = ratio * 2 * additionalScale // scale up to 2x to avoid blurry images

        let canvas: HTMLCanvasElement | null = null
        try {
            canvas = await html2canvas(threadEl, {
                scale,
                useCORS: true,
                scrollX: -window.scrollX,
                scrollY: -window.scrollY,
                windowWidth: width,
                windowHeight: height,
                ignoreElements: fnIgnoreElements,
            })
        }
        catch (error) {
            console.error('[DeepSeek Exporter] Failed to take screenshot:', error)
        }

        const context = canvas?.getContext('2d')
        if (context) context.imageSmoothingEnabled = false

        const dataUrl = canvas?.toDataURL('image/png', 1)
            .replace(/^data:image\/[^;]/, 'data:application/octet-stream')

        /**
         * corrupted image
         * meaning we might hit on the canvas size limit
         * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas#maximum_canvas_size
         * Chromium will not throw, we can only get an empty canvas
         * Firefox will throw "DOMException: CanvasRenderingContext2D.scale: Canvas exceeds max size."
         */
        if (!canvas || !dataUrl || dataUrl === 'data:,') {
            if (currentPass > passLimit) return null

            // 1.4 ^ 5 ~= 5.37, should be enough for most cases
            return takeScreenshot(width, height, additionalScale / 1.4, currentPass + 1)
        }

        return dataUrl
    }

    let dataUrl: string | null = null
    effect.run()
    try {
        await sleep(100)
        dataUrl = await takeScreenshot(thread.scrollWidth, thread.scrollHeight)
    }
    finally {
        effect.dispose()
    }

    if (!dataUrl) {
        alert('Failed to export to PNG. This might be caused by the size of the conversation. Please try to export a smaller conversation.')
        return false
    }

    const chatId = getChatIdFromUrl() || undefined
    const fileName = getFileNameWithFormat(fileNameFormat, 'png', { chatId })
    downloadUrl(fileName, dataUrl)

    return true
}
