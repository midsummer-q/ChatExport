export async function copyToClipboard(text: string): Promise<boolean> {
    try {
        if (!navigator.clipboard?.writeText) throw new Error('Clipboard API unavailable')
        await navigator.clipboard.writeText(text)
        return true
    }
    catch {
        const textarea = document.createElement('textarea')
        textarea.value = text
        textarea.style.position = 'fixed'
        textarea.style.opacity = '0'
        try {
            document.body.appendChild(textarea)
            textarea.focus()
            textarea.select()
            return document.execCommand('copy')
        }
        finally {
            textarea.remove()
        }
    }
}
