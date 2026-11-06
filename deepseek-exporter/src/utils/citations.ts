import type { ContentReference, ContentReferenceSource, ConversationNodeMessage } from '../api'

type CitationOutput = 'markdown' | 'html' | 'text'
type CitationLabelMode = 'title' | 'compact'

interface TransformContentReferenceOptions {
    output?: CitationOutput
    inlineReferenceMode?: 'expanded' | 'alt'
    includeSourceList?: boolean
    sourceListLabel?: string
}

const CitationMarkerRegex = /\uE200cite(?:\uE202[^\uE200\uE201]*)+\uE201/gu

export function normalizeCitationText(input: string): string {
    return input
        .replaceAll(/[\u00A0\u202F\u2007\u2060]/gu, ' ')
        .replaceAll(/[\u2010-\u2015\u2212]/gu, '-')
        .replaceAll(/[\uE203\uE204]/gu, '')
}

export function transformContentReferences(
    input: string,
    metadata: ConversationNodeMessage['metadata'],
    options: TransformContentReferenceOptions = {},
): string {
    const outputType = options.output ?? 'markdown'
    const inlineReferenceMode = options.inlineReferenceMode ?? 'expanded'
    const contentRefs = metadata?.content_references ?? []
    let output = normalizeCitationText(input)

    const sortedRefs = [...contentRefs]
        .filter(ref => ref.type !== 'sources_footnote')
        .sort((a, b) => (b.matched_text?.length || 0) - (a.matched_text?.length || 0))

    for (const ref of sortedRefs) {
        if (!ref.matched_text) continue

        const matchedText = normalizeCitationText(ref.matched_text)
        if (!matchedText) continue

        const replacement = formatInlineReference(ref, outputType, inlineReferenceMode)
        output = output.replaceAll(matchedText, replacement)
    }

    output = output.replace(CitationMarkerRegex, '')

    if (options.includeSourceList !== false) {
        const sources = getSourcesFootnoteSources(contentRefs)
        if (sources.length > 0) {
            output = appendSourcesSection(output, sources, outputType, options.sourceListLabel ?? 'Sources')
        }
    }

    return output
}

export function formatCitationSource(
    source: ContentReferenceSource,
    output: CitationOutput,
    labelMode: CitationLabelMode = 'title',
): string {
    const label = labelMode === 'compact' ? getCompactSourceLabel(source) : getSourceTitle(source)
    const url = safeCitationUrl(source.url)

    if (!url) {
        if (output === 'markdown') return escapeMarkdownText(label)
        if (output === 'html') return escapeHtmlText(label)
        return label
    }

    if (output === 'text') {
        return `${label}: ${url}`
    }

    if (output === 'html') {
        return `<a href="${escapeHtmlAttribute(url)}" target="_blank" rel="noopener noreferrer">${escapeHtmlText(label)}</a>`
    }

    return `[${escapeMarkdownText(label)}](<${escapeMarkdownUrl(url)}>)`
}

function formatInlineReference(ref: ContentReference, output: CitationOutput, mode: 'expanded' | 'alt'): string {
    if (mode === 'alt') return ref.alt || ''

    const sources = getInlineSources(ref)

    if (sources.length > 0) {
        const separator = output === 'text' ? '; ' : ', '
        return `(${sources.map(source => formatCitationSource(source, output, 'compact')).join(separator)})`
    }

    if (ref.alt) return ref.alt

    return ''
}

function getInlineSources(ref: ContentReference): ContentReferenceSource[] {
    const sources: ContentReferenceSource[] = []

    for (const item of ref.items ?? []) {
        sources.push(item)
        sources.push(...(item.supporting_websites ?? []))
    }

    sources.push(...(ref.fallback_items ?? []))

    if (sources.length === 0 && (ref.url || ref.title || ref.attribution)) {
        sources.push(ref)
    }

    if (sources.length === 0 && ref.safe_urls?.length) {
        sources.push(...ref.safe_urls.map(url => ({ title: url, url })))
    }

    return dedupeSources(sources)
}

function getSourcesFootnoteSources(contentRefs: ContentReference[]): ContentReferenceSource[] {
    const sources = contentRefs
        .filter(ref => ref.type === 'sources_footnote')
        .flatMap((ref) => {
            if (ref.sources?.length) return ref.sources
            if (ref.items?.length) return ref.items
            if (ref.fallback_items?.length) return ref.fallback_items
            if (ref.safe_urls?.length) return ref.safe_urls.map(url => ({ title: url, url }))
            return []
        })

    return dedupeSources(sources)
}

function appendSourcesSection(input: string, sources: ContentReferenceSource[], output: CitationOutput, label: string): string {
    const trimmed = input.trimEnd()
    let sourceList: string
    if (output === 'markdown') {
        sourceList = [
            '<details>',
            `<summary>${escapeMarkdownText(label)} (${sources.length})</summary>`,
            '',
            ...sources.map(source => `- ${formatMarkdownSourceListItem(source)}`),
            '',
            '</details>',
        ].join('\n')
    }
    else if (output === 'html') {
        sourceList = formatHtmlSourcesSection(sources, label)
    }
    else {
        sourceList = [
            `${label}:`,
            ...sources.map((source, index) => `${index + 1}. ${formatCitationSource(source, output)}`),
        ].join('\n')
    }

    return trimmed ? `${trimmed}\n\n${sourceList}` : sourceList
}

function formatMarkdownSourceListItem(source: ContentReferenceSource): string {
    const link = formatCitationSource(source, 'markdown')
    const attribution = source.attribution?.trim()
    const title = getSourceTitle(source)
    if (!attribution || attribution === title) return link
    return `${link} — ${escapeMarkdownText(attribution)}`
}

function formatHtmlSourcesSection(sources: ContentReferenceSource[], label: string): string {
    const items = sources.map((source) => {
        const title = formatCitationSource(source, 'html')
        const meta = getSourceMeta(source)
        const snippet = normalizeSnippet(source.snippet)
        return `<li class="export-source-item">
    <div class="export-source-title">${title}</div>
    ${meta ? `<div class="export-source-meta">${escapeHtmlText(meta)}</div>` : ''}
    ${snippet ? `<p class="export-source-snippet">${escapeHtmlText(snippet)}</p>` : ''}
</li>`
    }).join('\n')

    return `<details class="export-sources">
<summary>${escapeHtmlText(label)} (${sources.length})</summary>
<ol class="export-source-list">
${items}
</ol>
</details>`
}

function dedupeSources(sources: ContentReferenceSource[]): ContentReferenceSource[] {
    const seen = new Set<string>()
    const result: ContentReferenceSource[] = []

    for (const source of sources) {
        const key = source.url?.trim() || getSourceTitle(source)
        if (!key || seen.has(key)) continue
        seen.add(key)
        result.push(source)
    }

    return result
}

function getSourceTitle(source: ContentReferenceSource): string {
    return source.title?.trim()
        || source.attribution?.trim()
        || source.url?.trim()
        || 'Source'
}

function getCompactSourceLabel(source: ContentReferenceSource): string {
    return source.attribution?.trim() || getSourceTitle(source)
}

function getSourceMeta(source: ContentReferenceSource): string {
    const parts: string[] = []
    const attribution = source.attribution?.trim()
    const host = getHostname(source.url)
    const published = formatPublishedDate(source.publishedAt)

    if (attribution) parts.push(attribution)
    if (host && host.toLocaleLowerCase() !== attribution?.toLocaleLowerCase()) parts.push(host)
    if (published) parts.push(published)
    return parts.join(' · ')
}

function getHostname(url?: string): string {
    if (!url) return ''
    try {
        return new URL(url).hostname.replace(/^www\./, '')
    }
    catch {
        return ''
    }
}

function formatPublishedDate(value?: number | string): string {
    if (value == null || value === '') return ''
    const numeric = typeof value === 'number' ? value : Number(value)
    const milliseconds = Number.isFinite(numeric)
        ? numeric > 1e12 ? numeric : numeric * 1000
        : Date.parse(String(value))
    if (!Number.isFinite(milliseconds)) return ''
    const date = new Date(milliseconds)
    if (!Number.isFinite(date.getTime())) return ''
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
}

function normalizeSnippet(value?: string): string {
    if (!value) return ''
    const normalized = value
        .replaceAll(/<[^>]*>/g, ' ')
        .replaceAll(/\s+/g, ' ')
        .trim()
    if (normalized.length <= 360) return normalized
    return `${normalized.slice(0, 357).trimEnd()}…`
}

function escapeMarkdownText(input: string): string {
    return input
        .replaceAll('\\', '\\\\')
        .replaceAll('[', '\\[')
        .replaceAll(']', '\\]')
        .replaceAll('\n', ' ')
}

function escapeHtmlText(input: string): string {
    return input
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll('\'', '&#39;')
        .replaceAll('\n', ' ')
}

function escapeHtmlAttribute(input: string): string {
    return escapeHtmlText(input)
        .replaceAll('\r', '')
}

function safeCitationUrl(value?: string): string {
    const url = value?.trim()
    if (!url) return ''
    try {
        const parsed = new URL(url)
        return parsed.protocol === 'http:' || parsed.protocol === 'https:' ? url : ''
    }
    catch {
        return ''
    }
}

function escapeMarkdownUrl(input: string): string {
    return input
        .replaceAll('<', '%3C')
        .replaceAll('>', '%3E')
        .replaceAll('\n', '')
}
