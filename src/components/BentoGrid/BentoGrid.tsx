import { ReactNode } from "react"
import style from './BentoGrid.module.css'

interface Props {
	children: ReactNode
}
export function BentoGrid({ children }: Props) {
	return (
		<div className={style.grid}>
			{children}
		</div>
	)
}