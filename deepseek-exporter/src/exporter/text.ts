import type { Emphasis, Strong } from 'mdast'
import { fetchConversation, getCurrentChatId, processConversation, shouldSkipMessageInExport } from '../api'
import i18n from '../i18n'
import { checkIfConversationStarted } from '../page'
import { transformContentReferences } from '../utils/citations'
import { copyToClipboard } from '../utils/clipboard'
import { flatMap, fromMarkdown, toMarkdown } from '../utils/markdown'
import { standardizeLineBreaks } from '../utils/text'
import type { ConversationNodeMessage } from '../api'

export async function exportToText() {
    if (!checkIfConversationStarted()) {
        alert(i18n.t('Please start a conversation first'))
        return false
    }

    const chatId = await getCurrentChatId()
    // All image in text output will be replaced with `[image]`
    // So we don't need to waste time to download them
    const rawConversation = await fetchConversation(chatId, false)

    const { conversationNodes } = processConversation(rawConversation)
    const text = conversationNodes
        .map(({ message }) => transformMessage(message))
        .filter(Boolean)
        .join('\n\n')

    return await copyToClipboard(standardizeLineBreaks(text))
}

const LatexRegex = /(\s\$\$.+\$\$\s|\s\$.+\$\s|\\\[.+\\\]|\\\(.+\\\))|(^\$$[\S\s]+^\$$)|(^\$\$[\S\s]+^\$\$$)/gm

function transformMessage(message?: ConversationNodeMessage) {
    if (!message || !message.content) return null

    if (shouldSkipMessageInExport(message)) return null

    const author = transformAuthor(message.author)
    let content = transformContent(message.content)

    const matches = content.match(LatexRegex)
    if (matches) {
        let index = 0
        content = content.replace(LatexRegex, () => {
            // Replace it with `╬${index}╬` to avoid markdown processor ruin the formula
            return `╬${index++}╬`
        })
    }

    if (message.author.role === 'assistant') {
        content = transformContentReferences(content, message.metadata, {
            output: 'text',
            inlineReferenceMode: 'alt',
            includeSourceList: false,
        })
    }

    // Only message from assistant will be reformatted
    if (message.author.role === 'assistant' && content) {
        content = reformatContent(content)
    }

    if (matches) {
        // Replace `╬${index}╬` back to the original latex
        content = content.replace(/╬(\d+)╬/g, (_, index) => {
            return matches[+index]
        })
    }

    return `${author}:\n${content}`
}

/**
 * Convert the content based on the type of message
 */
function transformContent(
    content: ConversationNodeMessage['content'],
) {
    switch (content.content_type) {
        case 'text':
            return content.parts?.join('\n') || ''
        case 'multimodal_text': {
            return content.parts?.map((part) => {
                if (typeof part === 'string') return part
                return '[image]'
            }).join('\n') || ''
        }
    }
}

/**
 * Remove some markdown syntaxes from the content
 */
function reformatContent(input: string) {
    const root = fromMarkdown(input)
    flatMap(root, (item) => {
        // Replace strong/bold with text
        if (item.type === 'strong') return (item as Strong).children
        // Replace emphasis/italic with text
        if (item.type === 'emphasis') return (item as Emphasis).children

        return [item]
    })
    const result = toMarkdown(root)
    // HACK: render to markdown will let [ be escaped, so we need to remove the first character
    if (result.startsWith('\\[') && input.startsWith('[')) {
        return result.slice(1)
    }
    return result
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
