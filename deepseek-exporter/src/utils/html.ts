export function escapeHtml(value: unknown): string {
    return String(value ?? '')
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll('\'', '&#039;')
}

export function escapeCssString(value: string): string {
    return value
        .replaceAll('\\', '\\\\')
        .replaceAll('"', '\\"')
        .replaceAll('<', '\\3c ')
        .replaceAll('>', '\\3e ')
        .replaceAll('\n', '\\a ')
        .replaceAll('\r', '')
        .replaceAll('\f', '\\c ')
}

/** Only allow URL forms that are meaningful and safe in a standalone image element. */
export function safeImageUrl(value: unknown): string {
    if (typeof value !== 'string') return ''
    const url = value.trim()
    if (/^data:image\/(?:avif|bmp|gif|jpe?g|png|svg\+xml|webp)(?:;[^,]*)?,/i.test(url)) {
        return url
    }

    try {
        const parsed = new URL(url)
        return parsed.protocol === 'https:' || parsed.protocol === 'http:' ? parsed.href : ''
    }
    catch {
        return ''
    }
}
