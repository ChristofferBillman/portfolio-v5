import { createElement, forwardRef, MouseEventHandler, ReactNode } from 'react'
import style from './GlassMaterial.module.css'
import getBrowser from '../../../util/GetBrowser'
import clsx from 'clsx'

interface Props {
	className?: string
	children?: ReactNode
	onClick?: MouseEventHandler<HTMLElement>
	baseElement?: 'div' | 'button' | 'label'
	dark?: boolean
}

export const GlassMaterial = forwardRef(function ({ className = '', children, onClick, baseElement = 'div', dark = false }: Props, ref: React.ForwardedRef<HTMLDivElement>) {

	const clickableStyle = onClick ? style.clickable : ''
	const colorStyle = dark ? style.darkGlass : style.glass

	const getElement = () => {
		return createElement(
			baseElement,
			{
				className: clsx(colorStyle, clickableStyle, className),
				onClick,
				ref,
				tabIndex: onClick ? 0 : undefined,
				role: onClick ? 'button' : undefined
			},
			children
		)
	}

	// Glass border breaks if parent element is not positioned in Safari. Works in other browsers thorugh.
	if(getBrowser() == "Safari") {
		return <div className={style.safariGlassWrapper}>
			{getElement()}
		</div>
	}

	return getElement()

	
})