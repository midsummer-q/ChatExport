/**
 * The document title carries a " - DeepSeek" site suffix that must not leak
 * into exported filenames or metadata.
 */
export function getPageTitle(): string {
    return document.title.replace(/\s*[-|·]\s*DeepSeek\s*$/i, '')
}

export function getChatIdFromUrl(): string | null {
    const match = location.pathname.match(/^\/a\/[^/]+\/s\/([^/?#]+)/i)
    return match?.[1] ?? null
}

export function isSharePage(): boolean {
    return location.pathname.startsWith('/share/')
}

export function getConversationFromSharePage(): null {
    return null
}

const defaultAvatar = 'data:image/svg+xml,%3Csvg%20stroke%3D%22white%22%20fill%3D%22none%22%20stroke-width%3D%221.5%22%20viewBox%3D%22-6%20-6%2036%2036%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20style%3D%22background%3A%20%234c89ff%3B%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M20%2021v-2a4%204%200%200%200-4-4H8a4%204%200%200%200-4%204v2%22%2F%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%227%22%20r%3D%224%22%2F%3E%3C%2Fsvg%3E'

export async function getUserAvatar(): Promise<string> {
    return defaultAvatar
}

export function checkIfConversationStarted(): boolean {
    return getChatIdFromUrl() !== null
}
