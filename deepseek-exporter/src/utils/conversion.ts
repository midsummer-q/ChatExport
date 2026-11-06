import { shouldSkipMessageInExport } from '../api'
import type { ConversationNode, ConversationResult } from '../api'
import { jsonlStringify, nonNullable } from './utils'

interface NameMessage {
    user_name: string
    character_name: string
}

interface TavernMessage {
    name: string
    is_user: boolean
    is_name: boolean
    send_date: number
    mes: string
    swipes: string[]
    swipe_id: number
}

interface OobaData {
    internal: [string, string][]
    visible: [string, string][]
}

function contentToText(node: ConversationNode): string {
    const content = node.message?.content
    if (!content) return ''
    return content.parts
        .map(part => typeof part === 'string' ? part : '[image]')
        .join('\n')
}

function convertMessageToTavern(node: ConversationNode): TavernMessage | null {
    if (!node.message || shouldSkipMessageInExport(node.message)) {
        return null
    }

    const authorRole = node.message.author.role
    const createTime = node.message.create_time || (new Date()).getTime() / 1000
    const text = contentToText(node)

    return {
        name: authorRole === 'assistant' ? 'DeepSeek' : 'You',
        is_user: authorRole === 'user',
        // This is the opposite of is_user! Not always true.
        is_name: authorRole === 'assistant',
        send_date: createTime,
        mes: text,
        swipes: [text],
        swipe_id: 0,
    }
}

export function convertToTavern(conversation: ConversationResult): string {
    const messages: (NameMessage | TavernMessage)[] = [
        {
            user_name: 'You',
            character_name: 'DeepSeek',
        },
        ...conversation.conversationNodes.map(convertMessageToTavern).filter(nonNullable),
    ]

    return jsonlStringify(messages)
}

export function convertToOoba(conversation: ConversationResult): string {
    const pairs: [string, string][] = []
    const messages = conversation.conversationNodes.filter((node) => {
        return !!node.message
            && !shouldSkipMessageInExport(node.message)
    })

    let idx = 0
    while (idx < messages.length) {
        const message = messages[idx]
        const nextMessage = messages[idx + 1]

        if (!message.message) {
            idx += 1
            continue
        }

        const role = message.message.author.role
        const text = contentToText(message)
        const nextRole = nextMessage?.message?.author.role
        const nextText = nextMessage ? contentToText(nextMessage) : ''

        if (role === 'system') {
            if (text !== '') {
                pairs.push(['<|BEGIN-VISIBLE-CHAT|>', text])
            }
            idx += 1
            continue
        }

        if (role === 'user') {
            if (nextRole === 'assistant') {
                pairs.push([text, nextText])
                idx += 2
                continue
            }
            else if (nextRole === 'user') {
                pairs.push([text, ''])
                idx += 1
                continue
            }
            pairs.push([text, ''])
            idx += 1
            continue
        }

        if (role === 'assistant') {
            pairs.push(['', text])
            idx += 1
            continue
        }

        idx += 1
    }

    const oobaData: OobaData = {
        internal: pairs,
        visible: JSON.parse(JSON.stringify(pairs)),
    }

    if (oobaData.visible[0] && oobaData.visible[0][0] === '<|BEGIN-VISIBLE-CHAT|>') {
        oobaData.visible[0][0] = ''
    }

    return JSON.stringify(oobaData, null, 2)
}
