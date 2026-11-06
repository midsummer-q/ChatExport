import JSZip from 'jszip'
import { fetchConversation, getCurrentChatId, processConversation, shouldSkipMessageInExport } from '../api'
import { KEY_SOURCES_ENABLED, KEY_THINKING_ENABLED, KEY_TIMESTAMP_24H, KEY_TIMESTAMP_ENABLED, KEY_TIMESTAMP_HTML, baseUrl } from '../constants'
import i18n from '../i18n'
import { checkIfConversationStarted, getUserAvatar } from '../page'
import templateHtml from '../template.html?raw'
import { transformContentReferences } from '../utils/citations'
import { buildZipFileName, downloadFile, getFileNameWithFormat, prepareDownload } from '../utils/download'
import { formatDurationSeconds } from '../utils/duration'
import { escapeCssString, escapeHtml, safeImageUrl } from '../utils/html'
import { fromMarkdown, toHtml } from '../utils/markdown'
import { ScriptStorage } from '../utils/storage'
import { standardizeLineBreaks } from '../utils/text'
import { dateStr, getColorScheme, timestamp, unixTimestampToISOString } from '../utils/utils'
import type { ApiConversationWithId, ConversationNodeMessage, ConversationResult, ThinkingContent } from '../api'
import type { ExportMeta } from '../ui/SettingContext'
import type { PartInfo } from '../utils/download'

export async function exportToHtml(fileNameFormat: string, metaList: ExportMeta[]) {
    if (!checkIfConversationStarted()) {
        alert(i18n.t('Please start a conversation first'))
        return false
    }

    const userAvatar = await getUserAvatar()

    const chatId = await getCurrentChatId()
    const rawConversation = await fetchConversation(chatId, true)
    const enableThinking = ScriptStorage.get<boolean>(KEY_THINKING_ENABLED) ?? false
    const conversation = processConversation(rawConversation, { enableThinking })
    const html = conversationToHtml(conversation, userAvatar, metaList)

    const fileName = getFileNameWithFormat(fileNameFormat, 'html', { title: conversation.title, chatId, createTime: conversation.createTime, updateTime: conversation.updateTime })
    await downloadFile(fileName, 'text/html', standardizeLineBreaks(html))

    return true
}

export async function exportAllToHtml(fileNameFormat: string, apiConversations: ApiConversationWithId[], metaList?: ExportMeta[], projectName?: string, partIndex?: number, totalParts?: number) {
    const userAvatar = await getUserAvatar()

    const zip = new JSZip()
    const filenameMap = new Map<string, number>()
    const enableThinking = ScriptStorage.get<boolean>(KEY_THINKING_ENABLED) ?? false
    const conversations = apiConversations.map(x => processConversation(x, { enableThinking }))
    conversations.forEach((conversation) => {
        let fileName = getFileNameWithFormat(fileNameFormat, 'html', {
            title: conversation.title,
            chatId: conversation.id,
            createTime: conversation.createTime,
            updateTime: conversation.updateTime,
        })
        if (filenameMap.has(fileName)) {
            const count = filenameMap.get(fileName) ?? 1
            filenameMap.set(fileName, count + 1)
            fileName = `${fileName.slice(0, -5)} (${count}).html`
        }
        else {
            filenameMap.set(fileName, 1)
        }
        const content = conversationToHtml(conversation, userAvatar, metaList)
        zip.file(fileName, content)
    })

    const blob = await zip.generateAsync({
        type: 'blob',
        compression: 'DEFLATE',
        compressionOptions: {
            level: 9,
        },
    })
    const partInfo: PartInfo | undefined = (partIndex != null && totalParts != null)
        ? { part: partIndex, total: totalParts }
        : undefined
    return prepareDownload(buildZipFileName('html', projectName, partInfo), 'application/zip', blob)
}

export function conversationToHtml(conversation: ConversationResult, avatar: string, metaList?: ExportMeta[]) {
    const { id, title, model, modelSlug, createTime, updateTime, conversationNodes } = conversation

    const enableTimestamp = ScriptStorage.get<boolean>(KEY_TIMESTAMP_ENABLED) ?? false
    const timeStampHtml = ScriptStorage.get<boolean>(KEY_TIMESTAMP_HTML) ?? false
    const timeStamp24H = ScriptStorage.get<boolean>(KEY_TIMESTAMP_24H) ?? false
    const enableSources = ScriptStorage.get<boolean>(KEY_SOURCES_ENABLED) ?? true

    const conversationHtml = conversationNodes.map(({ message, thinking }) => {
        if (!message || !message.content) return null

        if (shouldSkipMessageInExport(message)) return null

        const author = transformAuthor(message.author)
        const authorType = message.author.role === 'user' ? 'user' : 'DeepSeek'
        const avatarEl = message.author.role === 'user'
            ? `<img alt="${escapeHtml(author)}" />`
            : '<span class="deepseek-avatar">DS</span>'

        let postSteps: Array<(input: string) => string> = []
        if (message.author.role === 'assistant') {
            postSteps.push(renderMarkdownHtml)
            // Add citation links and the rich source section after Markdown has
            // become HTML, so source metadata cannot be parsed as Markdown/math.
            postSteps.push(input => transformContentReferences(input, message.metadata, {
                output: 'html',
                includeSourceList: enableSources,
                sourceListLabel: i18n.t('Sources'),
            }))
        }
        if (message.author.role === 'user') {
            postSteps = [...postSteps, input => `<p class="no-katex">${escapeHtml(input)}</p>`]
        }
        const postProcess = (input: string) => postSteps.reduce((acc, fn) => fn(acc), input)
        const content = transformContent(message.content, postProcess)

        const timestamp = message?.create_time ?? ''
        const showTimestamp = enableTimestamp && timeStampHtml && timestamp
        let timestampHtml = ''
        let conversationTime = ''

        if (showTimestamp) {
            const date = new Date(timestamp * 1000)
            // format: 20:12 / 08:12 PM
            conversationTime = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: !timeStamp24H })
            timestampHtml = `<time class="time" datetime="${escapeHtml(date.toISOString())}" title="${escapeHtml(date.toLocaleString())}">${escapeHtml(conversationTime)}</time>`
        }

        const thinkingBlock = thinking ? formatThinkingHtml(thinking) : ''

        return `
<div class="conversation-item">
    <div class="author ${authorType}">
        ${avatarEl}
    </div>
    <div class="conversation-content-wrapper">
        ${thinkingBlock}
        <div class="conversation-content">
            ${content}
        </div>
    </div>
    ${timestampHtml}
</div>`
    }).filter(Boolean).join('\n\n')

    const date = dateStr()
    const time = new Date().toISOString()
    const source = `${baseUrl}/a/chat/s/${encodeURIComponent(id)}`
    const lang = document.documentElement.lang || 'en'
    const theme = getColorScheme()

    const _metaList = metaList
        ?.filter(x => !!x.name)
        .map(({ name, value }) => {
            const val = value
                .replaceAll('{title}', title)
                .replaceAll('{date}', date)
                .replaceAll('{timestamp}', timestamp())
                .replaceAll('{source}', source)
                .replaceAll('{model}', model)
                .replaceAll('{model_name}', modelSlug)
                .replaceAll('{create_time}', unixTimestampToISOString(createTime))
                .replaceAll('{update_time}', unixTimestampToISOString(updateTime))

            return [name, val] as const
        })
        ?? []
    const detailsHtml = _metaList.length > 0
        ? `<details>
    <summary>Metadata</summary>
    <div class="metadata_container">
        ${_metaList.map(([key, value]) => `<div class="metadata_item"><div>${escapeHtml(key)}</div><div>${escapeHtml(value)}</div></div>`).join('\n')}
    </div>
</details>`
        : ''

    const html = templateHtml
        .replaceAll('{{title}}', escapeHtml(title))
        .replaceAll('{{date}}', escapeHtml(date))
        .replaceAll('{{time}}', escapeHtml(time))
        .replaceAll('{{source}}', escapeHtml(source))
        .replaceAll('{{lang}}', escapeHtml(lang))
        .replaceAll('{{theme}}', escapeHtml(theme))
        .replaceAll('{{avatar}}', escapeCssString(safeImageUrl(avatar)))
        .replaceAll('{{details}}', detailsHtml)
        .replaceAll('{{content}}', conversationHtml)
    return html
}

function transformAuthor(author: ConversationNodeMessage['author']): string {
    switch (author.role) {
        case 'assistant':
            return 'DeepSeek'
        case 'user':
            return 'You'
        case 'tool':
            return `Plugin${author.name ? ` (${author.name})` : ''}`
        default:
            return author.role
    }
}

/**
 * Convert the content based on the type of message
 */
function transformContent(
    content: ConversationNodeMessage['content'],
    postProcess: (input: string) => string,
) {
    switch (content.content_type) {
        case 'text':
            return postProcess(content.parts?.join('\n') || '')
        case 'multimodal_text': {
            return content.parts?.map((part) => {
                if (typeof part === 'string') return postProcess(part)
                const source = safeImageUrl(part.asset_pointer)
                if (!source) return '<span>[image]</span>'
                const height = Number.isFinite(part.height) && part.height > 0 ? Math.round(part.height) : undefined
                const width = Number.isFinite(part.width) && part.width > 0 ? Math.round(part.width) : undefined
                return `<img src="${escapeHtml(source)}"${height ? ` height="${height}"` : ''}${width ? ` width="${width}"` : ''} />`
            }).join('\n') || ''
        }
    }
}

// Use the same sanitized Markdown/math rendering for answers and reasoning.
function renderMarkdownHtml(input: string): string {
    const latexRegex = /(\s\$\$.+?\$\$\s|\s\$.+?\$\s|\\\[[\S\s]+?\\\]|\\\([^\n]+?\\\))|(^\$$[\S\s]+?^\$$)|(^\$\$[\S\s]+?^\$\$)/gm
    const matches = input.match(latexRegex)
    if (matches) {
        let index = 0
        input = input.replace(latexRegex, () => `╬${index++}╬`)
    }
    let transformed = toHtml(fromMarkdown(input))
    if (matches) {
        transformed = transformed.replace(/╬(\d+)╬/g, (_, index: string) => escapeHtml(matches[+index]))
    }
    return transformed
}

function formatThinkingHtml(thinking: ThinkingContent): string {
    const duration = thinking.durationSeconds == null
        ? null
        : formatDurationSeconds(thinking.durationSeconds)
    const durationLabel = duration == null ? i18n.t('Thinking') : i18n.t('Thought for {{duration}} seconds', { duration })

    const parts: string[] = []

    if (thinking.activities?.length) {
        const items = thinking.activities.map(a => `<li>${escapeHtml(a)}</li>`).join('')
        parts.push(`<ul>${items}</ul>`)
    }

    const thoughts = thinking.thoughts
        .map(t => t.content || t.summary)
        .filter(Boolean)
        .map(renderMarkdownHtml)
        .join('\n')
    if (thoughts) parts.push(thoughts)

    const body = parts.join('\n')

    if (!body) return ''

    return `<details class="thinking"><summary>${escapeHtml(durationLabel)}</summary><div class="thinking-content">${body}</div></details>`
}
