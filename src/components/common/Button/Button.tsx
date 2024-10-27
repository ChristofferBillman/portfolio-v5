import { ReactNode } from 'react'
import GlassMaterial from '../GlassMaterial'
import style from './Button.module.css'

interface Props {
	text?: string
	onClick?: () => void
	leftSlot?: ReactNode
	rightSlot?: ReactNode
	type?: 'white' | 'glass'
}
export function Button({ text, onClick, leftSlot = '', rightSlot = '', type = 'glass' }: Props) {

	const Wrapper = type == 'glass' ? GlassMaterial : WhiteMaterial

	return (
		<Wrapper
			className={style.button}
			onClick={onClick}
			baseElement='button'
		>
			{leftSlot}
			{text &&
				<a className={style.link}>
					{text}
				</a>
			}
			{rightSlot}
		</Wrapper>
	)
}

interface WhiteMaterialProps {
	children: ReactNode
	onClick?: () => void
	className: string
}
function WhiteMaterial({children, onClick, className}: WhiteMaterialProps) {
	return (
		<button className={`${className} ${style.whiteWrapper}`} onClick={onClick}>
			{children}
		</button>
	)
}