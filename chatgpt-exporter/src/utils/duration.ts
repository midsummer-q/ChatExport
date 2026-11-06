export function formatDurationSeconds(seconds: number): string | null {
    if (!Number.isFinite(seconds) || seconds < 0) return null
    return String(Math.round(seconds * 10) / 10)
}
