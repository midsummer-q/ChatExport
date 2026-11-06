import * as Dialog from '@radix-ui/react-dialog'
import { createPortal } from 'preact/compat'
import { useCallback, useEffect, useMemo, useRef, useState } from 'preact/hooks'
import { useTranslation } from 'react-i18next'
import { exportToHtml } from '../exporter/html'
import { exportToPng } from '../exporter/image'
import { exportToJson, exportToOoba, exportToTavern } from '../exporter/json'
import { exportToMarkdown } from '../exporter/markdown'
import { exportToText } from '../exporter/text'
import { useWindowResize } from '../hooks/useWindowResize'
import { ExportDialog } from './ExportDialog'
import { FileCode, IconArrowRightFromBracket, IconCamera, IconCopy, IconJSON, IconMarkdown, IconSetting, IconZip } from './Icons'
import { MenuItem } from './MenuItem'
import { SettingProvider, useSettingContext } from './SettingContext'
import { SettingDialog } from './SettingDialog'

function MenuInner({ container }: { container: HTMLDivElement }) {
    const { t } = useTranslation()

    const [open, setOpen] = useState(false)
    const [jsonOpen, setJsonOpen] = useState(false)
    const [exportOpen, setExportOpen] = useState(false)
    const [settingOpen, setSettingOpen] = useState(false)
    const menuRootRef = useRef<HTMLDivElement>(null)
    const [menuPosition, setMenuPosition] = useState({ left: 12, bottom: 12 })

    const {
        format,
        enableMeta,
        exportMetaList,
    } = useSettingContext()

    const metaList = useMemo(() => enableMeta ? exportMetaList : [], [enableMeta, exportMetaList])

    const onClickText = useCallback(() => exportToText(), [])
    const onClickPng = useCallback(() => exportToPng(format), [format])
    const onClickMarkdown = useCallback(() => exportToMarkdown(format, metaList), [format, metaList])
    const onClickHtml = useCallback(() => exportToHtml(format, metaList), [format, metaList])
    const openDialog = useCallback((dialog: 'settings' | 'json' | 'export') => {
        setOpen(false)
        if (dialog === 'settings') setSettingOpen(true)
        if (dialog === 'json') setJsonOpen(true)
        if (dialog === 'export') setExportOpen(true)
        return false
    }, [])
    const onClickOfficialJSON = useCallback(() => exportToJson(format), [format])
    const onClickTavern = useCallback(() => exportToTavern(format), [format])
    const onClickOoba = useCallback(() => exportToOoba(format), [format])

    const width = useWindowResize(() => window.innerWidth)
    const isMobile = width < 768

    useEffect(() => {
        if (!open) return

        const updatePosition = () => {
            const rect = menuRootRef.current?.getBoundingClientRect()
            if (!rect) return

            if (isMobile) {
                setMenuPosition({ left: 12, bottom: 64 })
                return
            }

            const panelWidth = 268
            const panelGap = 8
            const viewportPadding = 12
            const roomOnRight = window.innerWidth - rect.right
            const left = roomOnRight >= panelWidth + panelGap + viewportPadding
                ? rect.right + panelGap
                : Math.max(viewportPadding, rect.left - panelWidth - panelGap)

            setMenuPosition({
                left,
                bottom: Math.max(viewportPadding, window.innerHeight - rect.bottom),
            })
        }

        updatePosition()
        window.addEventListener('resize', updatePosition)
        window.addEventListener('scroll', updatePosition, true)
        return () => {
            window.removeEventListener('resize', updatePosition)
            window.removeEventListener('scroll', updatePosition, true)
        }
    }, [isMobile, open])

    return (
        <>
            <div className="ce-menu-root" ref={menuRootRef}>
                <MenuItem
                    className="ce-nav-trigger"
                    text={t('ExportHelper')}
                    ariaLabel={t('ExportHelper')}
                    icon={IconArrowRightFromBracket}
                    onClick={() => {
                        setOpen(value => !value)
                        return true
                    }}
                />

            </div>

            {open && createPortal(
                <>
                    <div
                        aria-hidden="true"
                        className={isMobile
                            ? 'dropdown-backdrop animate-fadeIn'
                            : 'ce-clickout-backdrop'}
                        onClick={() => setOpen(false)}
                    >
                    </div>
                    <div
                        className={`
                            ce-menu-panel
                            grid grid-cols-2
                            bg-menu
                            ce-card
                            transition-opacity duration-200
                            gap-1 py-2 px-1
                            ${isMobile
            ? 'animate-slideUp'
            : 'animate-fadeIn'}`}
                        style={isMobile ? undefined : menuPosition}
                        role="menu"
                    >
                        <MenuItem
                            className="row-full"
                            text={t('Setting')}
                            icon={IconSetting}
                            onClick={() => openDialog('settings')}
                        />
                        <div aria-hidden="true" className="ce-menu-divider row-full" />
                        <MenuItem
                            text={t('Copy Text')}
                            successText={t('Copied!')}
                            icon={IconCopy}
                            className="row-full"
                            onClick={onClickText}
                        />
                        <MenuItem
                            text={t('Screenshot')}
                            icon={IconCamera}
                            className="row-half"
                            onClick={onClickPng}
                        />
                        <MenuItem
                            text={t('Markdown')}
                            icon={IconMarkdown}
                            className="row-half"
                            onClick={onClickMarkdown}
                        />
                        <MenuItem
                            text={t('HTML')}
                            icon={FileCode}
                            className="row-half"
                            onClick={onClickHtml}
                        />
                        <MenuItem
                            text={t('JSON')}
                            icon={IconJSON}
                            className="row-half"
                            onClick={() => openDialog('json')}
                        />
                        <div aria-hidden="true" className="ce-menu-divider row-full" />
                        <MenuItem
                            className="row-full"
                            text={t('Export All')}
                            icon={IconZip}
                            onClick={() => openDialog('export')}
                        />
                    </div>
                </>,
                container,
            )}

            <SettingDialog
                open={settingOpen}
                onOpenChange={setSettingOpen}
                portalContainer={container}
            />

            <Dialog.Root
                modal={false}
                open={jsonOpen}
                onOpenChange={setJsonOpen}
            >
                <Dialog.Portal container={container}>
                    <div
                        aria-hidden="true"
                        className="DialogOverlay"
                        onClick={() => setJsonOpen(false)}
                    >
                    </div>
                    <Dialog.Content className="DialogContent JsonExportDialog">
                        <Dialog.Title className="DialogTitle">{t('JSON')}</Dialog.Title>
                        <MenuItem
                            text="DeepSeek Raw"
                            description={t('Native Format')}
                            icon={IconCopy}
                            className="row-full JsonExportOption"
                            onClick={onClickOfficialJSON}
                        />
                        <MenuItem
                            text="JSONL"
                            description="TavernAI · SillyTavern"
                            icon={IconCopy}
                            className="row-full JsonExportOption"
                            onClick={onClickTavern}
                        />
                        <MenuItem
                            text="Ooba"
                            description="text-generation-webui"
                            icon={IconCopy}
                            className="row-full JsonExportOption"
                            onClick={onClickOoba}
                        />
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>

            <ExportDialog
                format={format}
                open={exportOpen}
                onOpenChange={setExportOpen}
                portalContainer={container}
            />
        </>
    )
}

export function Menu({ container }: { container: HTMLDivElement }) {
    return (
        <SettingProvider>
            <MenuInner container={container} />
        </SettingProvider>
    )
}
