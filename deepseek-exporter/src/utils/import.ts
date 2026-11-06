import type { ApiConversationWithId, DeepSeekRawMessage, DeepSeekSession } from '../api'

function isRecord(value: unknown): value is Record<string, unknown> {
    return value != null && typeof value === 'object' && !Array.isArray(value)
}

function isConversation(value: unknown): value is ApiConversationWithId {
    if (!isRecord(value) || !isRecord(value.chat_session) || !Array.isArray(value.chat_messages)) {
        return false
    }

    const session = value.chat_session as Partial<DeepSeekSession>
    const id = value.id ?? session.id
    if ((typeof id !== 'string' && typeof id !== 'number') || String(id).trim() === '') {
        return false
    }

    return value.chat_messages.every((message): message is DeepSeekRawMessage => (
        isRecord(message)
        && (typeof message.message_id === 'string' || typeof message.message_id === 'number')
        && typeof message.role === 'string'
    ))
}

/** Parse and minimally validate the raw DeepSeek JSON format accepted by batch export. */
export function parseConversationExport(input: string): ApiConversationWithId[] {
    const value: unknown = JSON.parse(input)
    if (!Array.isArray(value) || value.length === 0 || !value.every(isConversation)) {
        throw new TypeError('Invalid DeepSeek conversation export')
    }

    return value.map((conversation) => {
        const session = conversation.chat_session
        const id = String(conversation.id ?? session.id)
        return {
            ...conversation,
            id,
            title: typeof conversation.title === 'string'
                ? conversation.title
                : session.title?.trim() || 'DeepSeek Conversation',
            create_time: typeof conversation.create_time === 'number' ? conversation.create_time : 0,
            update_time: typeof conversation.update_time === 'number' ? conversation.update_time : 0,
        }
    })
}
