import JSZip from 'jszip'
import { fetchConversation, getCurrentChatId, processConversation, shouldSkipMessageInExport } from '../api'
import { KEY_SOURCES_ENABLED, KEY_THINKING_ENABLED, KEY_TIMESTAMP_24H, KEY_TIMESTAMP_ENABLED, KEY_TIMESTAMP_MARKDOWN, baseUrl } from '../constants'
import i18n from '../i18n'
import { checkIfConversationStarted } from '../page'
import { transformContentReferences } from '../utils/citations'
import { buildZipFileName, downloadFile, getFileNameWithFormat, prepareDownload } from '../utils/download'
import { formatDurationSeconds } from '../utils/duration'
import { fromMarkdown, toMarkdown } from '../utils/markdown'
import { ScriptStorage } from '../utils/storage'
import { standardizeLineBreaks } from '../utils/text'
import { dateStr, timestamp, unixTimestampToISOString } from '../utils/utils'
import type { ApiConversationWithId, ConversationNodeMessage, ConversationResult, ThinkingContent } from '../api'
import type { ExportMeta } from '../ui/SettingContext'
import type { PartInfo } from '../utils/download'

export async function exportToMarkdown(fileNameFormat: string, metaList: ExportMeta[]) {
    if (!checkIfConversationStarted()) {
        alert(i18n.t('Please start a conversation first'))
        return false
    }

    const chatId = await getCurrentChatId()
    const rawConversation = await fetchConversation(chatId, true)
    const enableThinking = ScriptStorage.get<boolean>(KEY_THINKING_ENABLED) ?? false
    const conversation = processConversation(rawConversation, { enableThinking })
    const markdown = conversationToMarkdown(conversation, metaList)

    const fileName = getFileNameWithFormat(fileNameFormat, 'md', { title: conversation.title, chatId, createTime: conversation.createTime, updateTime: conversation.updateTime })
    await downloadFile(fileName, 'text/markdown', standardizeLineBreaks(markdown))

    return true
}

export async function createMarkdownArchive(fileNameFormat: string, apiConversations: ApiConversationWithId[], metaList?: ExportMeta[]) {
    const zip = new JSZip()
    const filenameMap = new Map<string, number>()
    const enableThinking = ScriptStorage.get<boolean>(KEY_THINKING_ENABLED) ?? false
    const conversations = apiConversations.map(x => processConversation(x, { enableThinking }))
    conversations.forEach((conversation) => {
        let fileName = getFileNameWithFormat(fileNameFormat, 'md', {
            title: conversation.title,
            chatId: conversation.id,
            createTime: conversation.createTime,
            updateTime: conversation.updateTime,
        })
        if (filenameMap.has(fileName)) {
            const count = filenameMap.get(fileName) ?? 1
            filenameMap.set(fileName, count + 1)
            fileName = `${fileName.slice(0, -3)} (${count}).md`
        }
        else {
            filenameMap.set(fileName, 1)
        }
        const content = conversationToMarkdown(conversation, metaList)
        zip.file(fileName, content)
    })

    return await zip.generateAsync({
        type: 'blob',
        mimeType: 'application/zip',
        compression: 'DEFLATE',
        compressionOptions: {
            level: 9,
        },
    })
}

export async function exportAllToMarkdown(fileNameFormat: string, apiConversations: ApiConversationWithId[], metaList?: ExportMeta[], projectName?: string, partIndex?: number, totalParts?: number) {
    const blob = await createMarkdownArchive(fileNameFormat, apiConversations, metaList)
    const partInfo: PartInfo | undefined = (partIndex != null && totalParts != null)
        ? { part: partIndex, total: totalParts }
        : undefined
    return prepareDownload(buildZipFileName('markdown', projectName, partInfo), 'application/zip', blob)
}

export function conversationToMarkdown(conversation: ConversationResult, metaList?: ExportMeta[]) {
    const { id, title, model, modelSlug, createTime, updateTime, conversationNodes } = conversation
    const source = `${baseUrl}/a/chat/s/${encodeURIComponent(id)}`

    const _metaList = metaList
        ?.filter(x => !!x.name)
        .map(({ name, value }) => {
            const val = value
                .replaceAll('{title}', title)
                .replaceAll('{date}', dateStr())
                .replaceAll('{timestamp}', timestamp())
                .replaceAll('{source}', source)
                .replaceAll('{model}', model)
                .replaceAll('{model_name}', modelSlug)
                .replaceAll('{create_time}', unixTimestampToISOString(createTime))
                .replaceAll('{update_time}', unixTimestampToISOString(updateTime))

            return `${quoteYamlScalar(name)}: ${quoteYamlScalar(val)}`
        })
        ?? []
    const frontMatter = _metaList.length > 0
        ? `---\n${_metaList.join('\n')}\n---\n\n`
        : ''

    const enableTimestamp = ScriptStorage.get<boolean>(KEY_TIMESTAMP_ENABLED) ?? false
    const timeStampMarkdown = ScriptStorage.get<boolean>(KEY_TIMESTAMP_MARKDOWN) ?? false
    const timeStamp24H = ScriptStorage.get<boolean>(KEY_TIMESTAMP_24H) ?? false
    const enableSources = ScriptStorage.get<boolean>(KEY_SOURCES_ENABLED) ?? true

    const content = conversationNodes.map(({ message, thinking }) => {
        if (!message || !message.content) return null

        if (shouldSkipMessageInExport(message)) return null

        const timestamp = message?.create_time ?? ''
        const showTimestamp = enableTimestamp && timeStampMarkdown && timestamp
        let timestampHtml = ''
        if (showTimestamp) {
            const date = new Date(timestamp * 1000)
            // format: 20:12 / 08:12 PM
            const conversationTime = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: !timeStamp24H })
            timestampHtml = `<time datetime="${escapeHtmlAttribute(date.toISOString())}" title="${escapeHtmlAttribute(date.toLocaleString())}">${escapeHtmlAttribute(conversationTime)}</time>\n\n`
        }

        const author = transformAuthor(message.author)
        const thinkingBlock = thinking ? formatThinkingMarkdown(thinking) : ''

        const postSteps: Array<(input: string) => string> = []
        // Only message from assistant will be reformatted
        if (message.author.role === 'assistant') {
            postSteps.push(normalizeAssistantMarkdown)
            // Inject links after Markdown/LaTeX normalization so escaped literal
            // brackets in source titles cannot be mistaken for math delimiters.
            postSteps.push(input => transformContentReferences(input, message.metadata, {
                includeSourceList: enableSources,
                sourceListLabel: i18n.t('Sources'),
            }))
        }
        const postProcess = (input: string) => postSteps.reduce((acc, fn) => fn(acc), input)
        const content = transformContent(message.content, postProcess)

        return `#### ${author}:\n${timestampHtml}${thinkingBlock}${content}`
    }).filter(Boolean).join('\n\n')

    const markdown = `${frontMatter}# ${escapeMarkdownHeading(title)}\n\n${content}`

    return markdown
}

function normalizeAssistantMarkdown(input: string): string {
    const protectedParts: string[] = []
    const protect = (value: string) => {
        const token = `╬DEEPSEEK${protectedParts.length}╬`
        protectedParts.push(value)
        return token
    }

    // Preserve fenced code byte-for-byte before touching DeepSeek's LaTeX
    // delimiters. This keeps examples such as String.raw`\(...\)` intact.
    input = input.replace(/(?:^|\n)(?:```|~~~)[^\n]*\n[\s\S]*?\n(?:```|~~~)(?=\n|$)/g, protect)

    input = input
        .replace(/\\\[([\s\S]*?)\\\]/g, (_, formula: string) => protect(`$$${formula}$$`))
        .replace(/\\\(([^\n]*?)\\\)/g, (_, formula: string) => protect(`$${formula}$`))

    let transformed = toMarkdown(fromMarkdown(input))
    transformed = transformed.replace(/╬DEEPSEEK(\d+)╬/g, (_, index: string) => protectedParts[+index] ?? '')
    return transformed
}

function quoteYamlScalar(value: string): string {
    return JSON.stringify(value)
}

function escapeHtmlAttribute(value: string): string {
    return value
        .replaceAll('&', '&amp;')
        .replaceAll('"', '&quot;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
}

function escapeMarkdownHeading(value: string): string {
    return value
        .replaceAll('\\', '\\\\')
        .replaceAll('\n', ' ')
        .replaceAll('\r', ' ')
        .replaceAll(/([`*_[\]<>#])/g, '\\$1')
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
                return `![image](${part.asset_pointer})`
            }).join('\n') || ''
        }
    }
}

function formatThinkingMarkdown(thinking: ThinkingContent): string {
    const duration = thinking.durationSeconds == null
        ? null
        : formatDurationSeconds(thinking.durationSeconds)
    const durationLabel = duration == null ? i18n.t('Thinking') : i18n.t('Thought for {{duration}} seconds', { duration })

    const parts: string[] = []

    if (thinking.activities?.length) {
        parts.push(thinking.activities.map(a => `- ${a}`).join('\n'))
    }

    const thoughts = thinking.thoughts
        .map(t => t.content || t.summary)
        .filter(Boolean)
        .map(text => normalizeAssistantMarkdown(text).trim())
        .join('\n\n')
    if (thoughts) parts.push(thoughts)

    const body = parts.join('\n\n')

    if (!body) return ''

    return `<details>\n<summary>${durationLabel}</summary>\n\n${body}\n\n</details>\n\n`
}
