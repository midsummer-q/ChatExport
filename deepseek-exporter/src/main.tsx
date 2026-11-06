import { render } from 'preact'
import packageJson from '../package.json'
import exporterCss from './style.css?inline'
import utilityCss from './styles/missing-tailwind.css?inline'
import tailwindCss from './styles/tailwind.css?inline'
import checkBoxCss from './ui/CheckBox.css?inline'
import dialogCss from './ui/Dialog.css?inline'
import { Menu } from './ui/Menu'
import { onloadSafe } from './utils/utils'

import './i18n'

const HOST_ID = 'deepseek-exporter-root'
const PORTAL_HOST_ID = 'deepseek-exporter-portal'
const COMPONENT_CSS = [tailwindCss, utilityCss, exporterCss, dialogCss, checkBoxCss].join('\n')

interface MountTarget {
    parent: HTMLElement
    before: HTMLElement | null
}

let triggerHost: HTMLDivElement | null = null
let portalHost: HTMLDivElement | null = null
let triggerContainer: HTMLDivElement | null = null
let portalContainer: HTMLDivElement | null = null
let cachedNativeTarget: MountTarget | null = null
let rendered = false
let syncScheduled = false

main()

function main() {
    onloadSafe(() => {
        syncMount()

        const observer = new MutationObserver(scheduleSyncMount)
        observer.observe(document.body, { childList: true, subtree: true })

        window.addEventListener('resize', () => {
            cachedNativeTarget = null
            scheduleSyncMount()
        })
    })
}

function scheduleSyncMount() {
    if (syncScheduled) return
    syncScheduled = true
    requestAnimationFrame(() => {
        syncScheduled = false
        syncMount()
    })
}

function createShell(id: string, role: 'trigger' | 'portal') {
    const host = document.createElement('div')
    host.id = id
    host.dataset.deepseekExporter = ''
    host.dataset.version = packageJson.version
    host.dataset.role = role

    const shadowRoot = host.attachShadow({ mode: 'open' })
    const style = document.createElement('style')
    style.textContent = COMPONENT_CSS
    const container = document.createElement('div')
    container.className = role === 'portal'
        ? 'deepseek-exporter-shell deepseek-exporter-portal-shell'
        : 'deepseek-exporter-shell'
    shadowRoot.append(style, container)

    return { host, container }
}

function ensureShells() {
    if (!triggerHost || !triggerContainer) {
        const shell = createShell(HOST_ID, 'trigger')
        triggerHost = shell.host
        triggerContainer = shell.container
    }

    if (!portalHost || !portalContainer) {
        const shell = createShell(PORTAL_HOST_ID, 'portal')
        portalHost = shell.host
        portalContainer = shell.container
    }
}

function syncMount() {
    if (!document.body) return
    ensureShells()
    if (!triggerHost || !triggerContainer || !portalHost || !portalContainer) return

    if (!portalHost.isConnected) document.body.append(portalHost)

    const target = getNativeMountTarget()
    if (target) {
        triggerHost.dataset.placement = 'native'
        if (triggerHost.parentElement !== target.parent || triggerHost.nextElementSibling !== target.before) {
            target.parent.insertBefore(triggerHost, target.before)
        }
    }
    else {
        triggerHost.dataset.placement = 'floating'
        if (triggerHost.parentElement !== document.body) document.body.append(triggerHost)
    }

    if (!rendered) {
        render(<Menu container={portalContainer} />, triggerContainer)
        rendered = true
        setupThemeSync()
    }
}

function isVisible(element: HTMLElement) {
    const rect = element.getBoundingClientRect()
    if (rect.width < 1 || rect.height < 1) return false
    const style = getComputedStyle(element)
    return style.display !== 'none' && style.visibility !== 'hidden'
}

function isCachedTargetUsable(target: MountTarget) {
    return target.parent.isConnected
        && isVisible(target.parent)
        && (target.before == null || target.before.parentElement === target.parent)
}

function getNativeMountTarget() {
    if (cachedNativeTarget && isCachedTargetUsable(cachedNativeTarget)) return cachedNativeTarget
    cachedNativeTarget = findNativeMountTarget()
    return cachedNativeTarget
}

/**
 * Find DeepSeek's left navigation using its conversation links and geometry
 * instead of hashed class names. The exporter is inserted immediately above
 * the bottom account/settings row when one is present.
 */
function findNativeMountTarget(): MountTarget | null {
    const historyLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href*="/a/chat/s/"]'))
        .filter(isVisible)
        .slice(0, 24)
    if (historyLinks.length === 0) return null

    const candidateCounts = new Map<HTMLElement, number>()
    for (const link of historyLinks) {
        let element = link.parentElement
        while (element && element !== document.body) {
            const rect = element.getBoundingClientRect()
            const resemblesSidebar = rect.left <= 48
                && rect.right <= 420
                && rect.width >= 150
                && rect.width <= 360
                && rect.height >= window.innerHeight * 0.45
                && rect.top <= 80
                && rect.bottom >= window.innerHeight - 100
            if (resemblesSidebar) {
                candidateCounts.set(element, (candidateCounts.get(element) ?? 0) + 1)
            }
            element = element.parentElement
        }
    }

    const sidebar = Array.from(candidateCounts.entries())
        .sort(([a, aCount], [b, bCount]) => {
            const aRect = a.getBoundingClientRect()
            const bRect = b.getBoundingClientRect()
            const aScore = aCount * 1000 + aRect.height - Math.abs(window.innerHeight - aRect.bottom) * 4
            const bScore = bCount * 1000 + bRect.height - Math.abs(window.innerHeight - bRect.bottom) * 4
            return bScore - aScore
        })[0]?.[0]
    if (!sidebar) return null

    const sidebarRect = sidebar.getBoundingClientRect()
    const bottomRows = Array.from(sidebar.querySelectorAll<HTMLElement>('div, nav, section, footer'))
        .filter((element) => {
            if (element === triggerHost || element.contains(triggerHost)) return false
            const rect = element.getBoundingClientRect()
            return isVisible(element)
                && rect.width >= sidebarRect.width * 0.62
                && rect.height >= 30
                && rect.height <= 96
                && rect.left >= sidebarRect.left - 2
                && rect.right <= sidebarRect.right + 2
                && Math.abs(sidebarRect.bottom - rect.bottom) <= 32
        })
        .sort((a, b) => {
            const aRect = a.getBoundingClientRect()
            const bRect = b.getBoundingClientRect()
            const aDepth = getElementDepth(a)
            const bDepth = getElementDepth(b)
            return Math.abs(sidebarRect.bottom - aRect.bottom) - Math.abs(sidebarRect.bottom - bRect.bottom)
                || bRect.width - aRect.width
                || aDepth - bDepth
        })

    const footerRow = bottomRows[0] ?? null
    if (footerRow?.parentElement) {
        return { parent: footerRow.parentElement, before: footerRow }
    }

    return { parent: sidebar, before: null }
}

function getElementDepth(element: HTMLElement) {
    let depth = 0
    let current: HTMLElement | null = element
    while (current?.parentElement) {
        depth++
        current = current.parentElement
    }
    return depth
}

function setupThemeSync() {
    if (!triggerHost || !triggerContainer || !portalHost || !portalContainer) return

    const syncTheme = () => {
        if (!triggerHost || !triggerContainer || !portalHost || !portalContainer) return

        const roots = [document.documentElement, document.body]
        const explicitlyDark = roots.some(root => root.classList.contains('dark') || root.dataset.theme === 'dark')
        const explicitlyLight = roots.some(root => root.classList.contains('light') || root.dataset.theme === 'light')
        const dark = explicitlyDark
            || (!explicitlyLight && window.matchMedia('(prefers-color-scheme: dark)').matches)

        triggerContainer.classList.toggle('dark', dark)
        portalContainer.classList.toggle('dark', dark)
        triggerHost.dataset.theme = dark ? 'dark' : 'light'
        portalHost.dataset.theme = dark ? 'dark' : 'light'
    }

    syncTheme()
    const themeObserver = new MutationObserver(syncTheme)
    const observerOptions: MutationObserverInit = {
        attributes: true,
        attributeFilter: ['class', 'data-theme'],
    }
    themeObserver.observe(document.documentElement, observerOptions)
    themeObserver.observe(document.body, observerOptions)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', syncTheme)
}
