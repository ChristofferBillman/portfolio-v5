import { MouseEventHandler, ReactNode } from 'react'
import GlassMaterial from '../GlassMaterial'
import style from './Button.module.css'
import clsx from 'clsx'

interface Props {
	text?: string
	onClick?: () => void
	leftSlot?: ReactNode
	rightSlot?: ReactNode
	type?: 'white' | 'glass' | 'dark'
	className?: string
}
export function Button({ text, onClick, leftSlot = '', rightSlot = '', type = 'glass', className='' }: Props) {

	const Wrapper = type == 'white' ? WhiteMaterial : GlassMaterial

	return (
		<Wrapper
			className={`${style.button} ${className}`}
			onClick={onClick}
			baseElement='button'
			dark={type == 'dark'}
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
	onClick?: MouseEventHandler<HTMLElement>
	className: string
}
function WhiteMaterial({children, onClick, className}: WhiteMaterialProps) {
	return (
		<button className={clsx(style.whiteWrapper, className)} onClick={onClick}>
			{children}
		</button>
	)
}