import { ReactNode } from 'react'
import GlassMaterial from '../GlassMaterial'
import style from './Button.module.css'

interface Props {
	text: string
	onClick?: () => void
	leftSlot?: ReactNode
	rightSlot?: ReactNode
}
export function Button({ text, onClick, leftSlot = '', rightSlot = '' }: Props) {
	return (
		<GlassMaterial
			className={style.button}
			onClick={onClick}
			baseElement='button'
		>
			{leftSlot}
			<a
				className={style.link}
			>
				{text}
			</a>
			{rightSlot}
		</GlassMaterial>
	)
}