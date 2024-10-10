import { ReactNode } from 'react'
import style from './GlassMaterial.module.css'

interface Props {
	className: string
	children: ReactNode
}

export function GlassMaterial({ className, children }: Props) {
	return (
		<div className={`${style.glass} ${className}`}>
			{children}
		</div>
	)
}