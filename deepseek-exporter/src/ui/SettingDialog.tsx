import * as Dialog from '@radix-ui/react-dialog'
import { useTranslation } from 'react-i18next'
import sanitize from 'sanitize-filename'
import { baseUrl } from '../constants'
import { useTitle } from '../hooks/useTitle'
import { LOCALES } from '../i18n'
import { getChatIdFromUrl } from '../page'
import { getFileNameWithFormat } from '../utils/download'
import { timestamp as _timestamp, dateStr, unixTimestampToISOString } from '../utils/utils'
import type { FC } from '../type'
import { IconCross, IconTrash } from './Icons'
import { useSettingContext } from './SettingContext'
import { Toggle } from './Toggle'

const EXPORT_ALL_LIMIT_MIN = 100
const EXPORT_ALL_LIMIT_MAX = 20000
const EXPORT_ALL_LIMIT_STEP = 100

function Variable({ name, title }: { name: string, title: string }) {
    return <strong className="cursor-help select-all whitespace-nowrap" title={title}>{name}</strong>
}

interface SettingDialogProps {
    open: boolean
    onOpenChange: (value: boolean) => void
    portalContainer: HTMLElement
}

export const SettingDialog: FC<SettingDialogProps> = ({
    open,
    onOpenChange,
    portalContainer,
}) => {
    const {
        format,
        setFormat,
        enableTimestamp,
        setEnableTimestamp,
        timeStamp24H,
        setTimeStamp24H,
        enableTimestampHTML,
        setEnableTimestampHTML,
        enableTimestampMarkdown,
        setEnableTimestampMarkdown,
        enableMeta,
        setEnableMeta,
        exportMetaList,
        setExportMetaList,
        enableThinking,
        setEnableThinking,
        enableSources,
        setEnableSources,
        exportAllLimit,
        setExportAllLimit,
    } = useSettingContext()
    const { t, i18n } = useTranslation()
    const _title = useTitle()
    const date = dateStr()
    const timestamp = _timestamp()
    const title = sanitize(_title).replace(/\s+/g, '_')
    const chatId = getChatIdFromUrl() || 'this-is-a-mock-chat-id'
    const now = Date.now() / 1000
    const createTime = now
    const updateTime = now
    const preview = getFileNameWithFormat(format, '{ext}', { title, chatId, createTime, updateTime })

    const source = `${baseUrl}/a/chat/s/${chatId}`

    return (
        <Dialog.Root
            modal={false}
            open={open}
            onOpenChange={onOpenChange}
        >
            <Dialog.Portal container={portalContainer}>
                <div
                    aria-hidden="true"
                    className="DialogOverlay"
                    onClick={() => onOpenChange(false)}
                >
                </div>
                <Dialog.Content className="DialogContent _settings">
                    <Dialog.Title className="DialogTitle">{t('Exporter Settings')}</Dialog.Title>
                    <div className="DialogBody">
                        <dl className="space-y-3">
                            <div className="relative flex bg-white dark:bg-white/5 rounded p-4">
                                <div>
                                    <dt className="text-md font-medium text-gray-800 dark:text-white">
                                        {`${t('Language')} 🌐`}
                                    </dt>
                                    <dd>
                                        <select
                                            className="Select mt-3"
                                            value={i18n.language}
                                            onChange={e => i18n.changeLanguage(e.currentTarget.value)}
                                        >
                                            {LOCALES.map(({ name, code }) => (
                                                <option key={code} value={code}>{name}</option>
                                            ))}
                                        </select>
                                    </dd>
                                </div>
                            </div>
                            <div className="relative flex bg-white dark:bg-white/5 rounded p-4">
                                <div>
                                    <dt className="text-md font-medium text-gray-800 dark:text-white">
                                        {t('File Name')}
                                    </dt>
                                    <dd>
                                        <p className="text-sm text-gray-700 dark:text-gray-300">
                                            {t('Available variables')}
                                            :
                                            {' '}
                                            <Variable name="{title}" title={title} />
                                            ,
                                            {' '}
                                            <Variable name="{date}" title={date} />
                                            ,
                                            {' '}
                                            <Variable name="{timestamp}" title={timestamp} />
                                            ,
                                            {' '}
                                            <Variable name="{chat_id}" title={chatId} />
                                            ,
                                            {' '}
                                            <Variable name="{create_time}" title={unixTimestampToISOString(createTime)} />
                                            ,
                                            {' '}
                                            <Variable name="{update_time}" title={unixTimestampToISOString(updateTime)} />
                                        </p>
                                        <input className="Input mt-4" id="filename" value={format} onChange={e => setFormat(e.currentTarget.value)} />
                                        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                                            {t('Preview')}
                                            :
                                            {' '}
                                            <span className="select-all rounded bg-black/5 dark:bg-white/10 px-1.5 py-0.5 font-mono text-[0.8rem]">{preview}</span>
                                        </p>
                                    </dd>
                                </div>
                            </div>
                            <div className="relative flex bg-white dark:bg-white/5 rounded p-4">
                                <div>
                                    <dt className="text-md font-medium text-gray-800 dark:text-white">
                                        {t('Export Thinking Process')}
                                    </dt>
                                    <dd className="text-sm text-gray-700 dark:text-gray-300">
                                        {t('Export Thinking Process Description')}
                                    </dd>
                                </div>
                                <div className="absolute right-4">
                                    <Toggle label="" checked={enableThinking} onCheckedUpdate={setEnableThinking} />
                                </div>
                            </div>
                            <div className="relative flex bg-white dark:bg-white/5 rounded p-4">
                                <div>
                                    <dt className="text-md font-medium text-gray-800 dark:text-white">
                                        {t('Export Sources')}
                                    </dt>
                                    <dd className="text-sm text-gray-700 dark:text-gray-300">
                                        {t('Export Sources Description')}
                                    </dd>
                                </div>
                                <div className="absolute right-4">
                                    <Toggle label="" checked={enableSources} onCheckedUpdate={setEnableSources} />
                                </div>
                            </div>
                            <div className="relative flex bg-white dark:bg-white/5 rounded p-4">
                                <div>
                                    <dt className="text-md font-medium text-gray-800 dark:text-white">
                                        {t('Export All Limit')}
                                    </dt>
                                    <dd className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                                        {t('Export All Limit Description')}
                                        <div className="flex items-center gap-4 mt-3">
                                            <input
                                                type="range"
                                                min={EXPORT_ALL_LIMIT_MIN}
                                                max={EXPORT_ALL_LIMIT_MAX}
                                                step={EXPORT_ALL_LIMIT_STEP}
                                                value={exportAllLimit}
                                                onChange={e => setExportAllLimit(Number.parseInt(e.currentTarget.value, 10))}
                                                className="flex-grow h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                                                id="exportAllLimitSlider"
                                            />
                                            <input
                                                className="Input tabular-nums"
                                                style={{ width: '5.5rem', flex: 'none', textAlign: 'right' }}
                                                type="number"
                                                min={EXPORT_ALL_LIMIT_MIN}
                                                max={EXPORT_ALL_LIMIT_MAX}
                                                step={EXPORT_ALL_LIMIT_STEP}
                                                value={exportAllLimit}
                                                onChange={(e) => {
                                                    const value = Number.parseInt(e.currentTarget.value, 10)
                                                    if (Number.isFinite(value)) setExportAllLimit(value)
                                                }}
                                                onBlur={(e) => {
                                                    const value = Number.parseInt(e.currentTarget.value, 10)
                                                    setExportAllLimit(Number.isFinite(value)
                                                        ? Math.min(EXPORT_ALL_LIMIT_MAX, Math.max(EXPORT_ALL_LIMIT_MIN, value))
                                                        : EXPORT_ALL_LIMIT_MIN)
                                                }}
                                            />
                                        </div>
                                    </dd>
                                </div>
                            </div>
                            <div className="relative flex bg-white dark:bg-white/5 rounded p-4">
                                <div>
                                    <dt className="text-md font-medium text-gray-800 dark:text-white">
                                        {t('Conversation Timestamp')}
                                    </dt>
                                    <dd className="text-sm text-gray-700 dark:text-gray-300">
                                        {t('Conversation Timestamp Description')}
                                        {enableTimestamp && (
                                            <>
                                                <div className="mt-2">
                                                    <Toggle
                                                        label={t('Use 24-hour format')}
                                                        checked={timeStamp24H}
                                                        onCheckedUpdate={setTimeStamp24H}
                                                    />
                                                </div>
                                                <div className="mt-2">
                                                    <Toggle
                                                        label={t('Enable on HTML')}
                                                        checked={enableTimestampHTML}
                                                        onCheckedUpdate={setEnableTimestampHTML}
                                                    />
                                                </div>
                                                <div className="mt-2">
                                                    <Toggle
                                                        label={t('Enable on Markdown')}
                                                        checked={enableTimestampMarkdown}
                                                        onCheckedUpdate={setEnableTimestampMarkdown}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    </dd>
                                </div>
                                <div className="absolute right-4">
                                    <Toggle label="" checked={enableTimestamp} onCheckedUpdate={setEnableTimestamp} />
                                </div>
                            </div>
                            <div className="relative flex bg-white dark:bg-white/5 rounded p-4">
                                <div>
                                    <dt className="text-md font-medium text-gray-800 dark:text-white">
                                        {t('Export Metadata')}
                                    </dt>
                                    <dd className="text-sm text-gray-700 dark:text-gray-300">
                                        {t('Export Metadata Description')}

                                        {enableMeta && (
                                            <>
                                                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                                                    {t('Available variables')}
                                                    :
                                                    {' '}
                                                    <Variable name="{title}" title={title} />
                                                    ,
                                                    {' '}
                                                    <Variable name="{date}" title={date} />
                                                    ,
                                                    {' '}
                                                    <Variable name="{timestamp}" title={timestamp} />
                                                    ,
                                                    {' '}
                                                    <Variable name="{source}" title={source} />
                                                    ,
                                                    {' '}
                                                    <Variable name="{model}" title="DeepSeek Chat" />
                                                    ,
                                                    {' '}
                                                    <Variable name="{model_name}" title="text-davinci-002-render-sha" />
                                                    ,
                                                    {' '}
                                                    <Variable name="{create_time}" title="2023-04-10T21:45:35.027Z" />
                                                    ,
                                                    {' '}
                                                    <Variable name="{update_time}" title="2023-04-10T21:45:35.027Z" />
                                                </p>
                                                {exportMetaList.map((meta, i) => (
                                                    <div className="flex items-center mt-2" key={i}>
                                                        <input
                                                            className="Input"
                                                            value={meta.name}
                                                            onChange={(e) => {
                                                                const list = [...exportMetaList]
                                                                list[i] = { ...list[i], name: e.currentTarget.value }
                                                                setExportMetaList(list)
                                                            }}
                                                        />
                                                        <span className="mx-2">→</span>
                                                        <input
                                                            className="Input"
                                                            value={meta.value}
                                                            onChange={(e) => {
                                                                const list = [...exportMetaList]
                                                                list[i] = { ...list[i], value: e.currentTarget.value }
                                                                setExportMetaList(list)
                                                            }}
                                                        />
                                                        <button
                                                            type="button"
                                                            className="ml-2 rounded-full p-1 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition ease-in-out duration-150"
                                                            aria-label="Remove"
                                                            onClick={() => setExportMetaList(exportMetaList.filter((_, j) => j !== i))}
                                                        >
                                                            <IconTrash className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                ))}
                                                <div className="flex justify-center items-center mt-2 pr-8">
                                                    <button
                                                        type="button"
                                                        className="w-full border border-[#6f6e77] dark:border-gray-[#86858d] rounded-md py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition ease-in-out duration-150"
                                                        aria-label="Add"
                                                        onClick={() => setExportMetaList([...exportMetaList, { name: '', value: '' }])}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </>
                                        )}
                                    </dd>
                                </div>
                                <div className="absolute right-4">
                                    <Toggle label="" checked={enableMeta} onCheckedUpdate={setEnableMeta} />
                                </div>
                            </div>
                        </dl>
                    </div>
                    <div className="SettingsDialogFooter">
                        <Dialog.Close asChild>
                            <button type="button" className="Button green font-bold">{t('Save')}</button>
                        </Dialog.Close>
                    </div>
                    <Dialog.Close asChild>
                        <button type="button" className="IconButton CloseButton" aria-label="Close">
                            <IconCross />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}
