/**
 * Format API timing values for human-readable export labels.
 *
 * DeepSeek occasionally returns floating-point arithmetic noise such as
 * `5.5712626069999995`; one decimal place preserves useful precision without
 * leaking that noise into Markdown or HTML exports.
 */
export function formatDurationSeconds(seconds: number): string | null {
    if (!Number.isFinite(seconds) || seconds < 0) return null

    const rounded = Math.round((seconds + Number.EPSILON) * 10) / 10
    return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1)
}
