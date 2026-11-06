import sanitize from 'sanitize-filename'
import { getPageTitle } from '../page'
import { dateStr, timestamp, unixTimestampToISOString } from './utils'

export interface DownloadArtifact {
    filename: string
    blob: Blob
}

export function prepareDownload(filename: string, type: string, content: string | Blob): DownloadArtifact {
    const blob = content instanceof Blob ? content : new Blob([content], { type })
    return { filename, blob }
}

/**
 * Trigger a browser-native download. Batch exports call this from the explicit
 * "Download" button so Chrome receives a fresh user gesture.
 */
export function triggerBrowserDownload(download: DownloadArtifact): void {
    const url = URL.createObjectURL(download.blob)
    const a = document.createElement('a')
    a.href = url
    a.download = download.filename
    try {
        document.body.appendChild(a)
        a.click()
    }
    finally {
        a.remove()
        // Keep the object URL alive through the browser's download task.
        setTimeout(() => URL.revokeObjectURL(url), 1_000)
    }
}

export function downloadFile(filename: string, type: string, content: string | Blob): void {
    triggerBrowserDownload(prepareDownload(filename, type, content))
}

export function downloadUrl(filename: string, url: string) {
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

export function normalizeProjectName(projectName: string) {
    return projectName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
}

export interface PartInfo {
    part: number
    total: number
}

function partSuffix(partInfo?: PartInfo): string {
    if (!partInfo || partInfo.total <= 1) return ''
    const pad = (n: number) => String(n).padStart(2, '0')
    return `-part-${pad(partInfo.part)}-of-${pad(partInfo.total)}`
}

export function buildZipFileName(format: string, projectName?: string, partInfo?: PartInfo) {
    const suffix = partSuffix(partInfo)
    if (projectName) {
        return `deepseek-export-${format}-project-${normalizeProjectName(projectName)}${suffix}.zip`
    }
    return `deepseek-export-${format}${suffix}.zip`
}

export function buildJsonBatchFileName(projectName?: string, partInfo?: PartInfo) {
    const suffix = partSuffix(partInfo)
    if (projectName) {
        return `deepseek-export-project-${normalizeProjectName(projectName)}${suffix}.json`
    }
    return `deepseek-export${suffix}.json`
}

export function getFileNameWithFormat(format: string, ext: string, {
    title = getPageTitle(),
    // chatId will be empty when exporting all conversations
    chatId = '',
    // convert to seconds for unixTimestampToISOString which expects a unix
    // timestamp (in seconds). using Date.now() directly would pass
    // milliseconds which results in an invalid far future date.
    createTime = Math.floor(Date.now() / 1000),
    updateTime = Math.floor(Date.now() / 1000),
} = {}) {
    const _createTime = unixTimestampToISOString(createTime)
    const _updateTime = unixTimestampToISOString(updateTime)

    const rendered = format
        .replaceAll('{title}', title)
        .replaceAll('{date}', dateStr())
        .replaceAll('{timestamp}', timestamp())
        .replaceAll('{chat_id}', chatId)
        .replaceAll('{create_time}', _createTime)
        .replaceAll('{update_time}', _updateTime)
        .concat(`.${ext}`)
    return sanitize(rendered, { replacement: '_' }).replace(/\s+/g, '_') || `DeepSeek.${ext}`
}
