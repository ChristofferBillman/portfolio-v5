import { ReactNode } from 'react'
import style from './GlassMaterial.module.css'

interface Props {
	className?: string
	children: ReactNode
	onClick?: () => void
}

export function GlassMaterial({ className = '', children, onClick }: Props) {

	const clickableStyle = onClick ? style.clickable : ''

	return (
		<div
			className={`${style.glass} ${clickableStyle} ${className}`}
			onClick={onClick}
		>
			{children}
		</div>
	)
}