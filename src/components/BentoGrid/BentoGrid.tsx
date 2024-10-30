import { ReactNode } from "react"
import style from './BentoGrid.module.css'
import clsx from "clsx"

interface Props {
	children: ReactNode
	className?: string
}
export function BentoGrid({ children, className }: Props) {
	return (
		<div className={clsx(style.grid, className)}>
			{children}
		</div>
	)
}