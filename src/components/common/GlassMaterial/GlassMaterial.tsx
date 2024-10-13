import { createElement, forwardRef, ReactNode } from 'react'
import style from './GlassMaterial.module.css'
import getBrowser from '../../../util/GetBrowser'

interface Props {
	className?: string
	children?: ReactNode
	onClick?: () => void
	baseElement?: 'div' | 'button'
}

export const GlassMaterial = forwardRef(function ({ className = '', children, onClick, baseElement = 'div' }: Props, ref: React.ForwardedRef<HTMLDivElement>) {

	const clickableStyle = onClick ? style.clickable : ''

	const getElement = () => {
		return createElement(
			baseElement,
			{
				className: `${style.glass} ${clickableStyle} ${className}`,
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