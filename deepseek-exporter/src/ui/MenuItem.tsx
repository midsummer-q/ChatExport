import { useState } from 'preact/hooks'
import type { FC } from '../type'
import { IconLoading } from './Icons'

const TIMEOUT = 2500

export interface MenuItemProps {
    text: string
    description?: string
    icon?: FC
    successText?: string
    disabled?: boolean
    title?: string
    ariaLabel?: string
    className?: string
    onClick?: (() => boolean) | (() => Promise<boolean>)
}

export const MenuItem: FC<MenuItemProps> = ({ text, description, successText, disabled = false, title, ariaLabel, icon: Icon, onClick, className }) => {
    const [loading, setLoading] = useState(false)
    const [succeed, setSucceed] = useState(false)

    const handleClick = typeof onClick === 'function'
        ? async (e: Event) => {
            e.preventDefault()
            if (loading) return

            try {
                setLoading(true)
                const result = await onClick()
                if (result) {
                    setSucceed(true)
                    setTimeout(() => setSucceed(false), TIMEOUT)
                }
            }
            catch (error) {
                console.error('[DeepSeek Exporter] Menu action failed:', error)
            }
            finally {
                setLoading(false)
            }
        }
        : undefined

    return (
        <button
            type="button"
            className={`
            menu-item
            flex flex-shrink-0 m-0 items-center gap-3 rounded-lg
            transition-colors duration-200
            cursor-pointer
            border border-menu ${className ?? ''}`}
            onClick={handleClick}
            disabled={disabled}
            aria-label={ariaLabel ?? (description ? `${text}: ${description}` : undefined)}
            title={title}
        >
            {loading
                ? (
                        <div className="flex justify-center items-center w-full h-full">
                            <IconLoading className="w-4 h-4" />
                        </div>
                    )
                : (
                        <>
                            {Icon && <Icon />}
                            <span className="ce-menu-item-copy">
                                <span className="ce-menu-item-text">
                                    {(succeed && successText) ? successText : text}
                                </span>
                                {description && !succeed && (
                                    <span className="ce-menu-item-description">{description}</span>
                                )}
                            </span>
                        </>
                    )}
        </button>
    )
}
