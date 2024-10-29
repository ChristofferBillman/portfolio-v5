import { Dispatch, RefObject, SetStateAction, useCallback, useLayoutEffect, useRef } from 'react'

import TransitionLifecycle from '../../TransitionLifecycle'

import useOutsideClick from '../../../hooks/useOutsideClick'
import GlassMaterial from '../GlassMaterial'

import style from './Modal.module.css'
import clsx from 'clsx'

interface Props {
	visible: boolean
    setVisible: Dispatch<SetStateAction<boolean>>
    children: JSX.Element | JSX.Element[]
	className?: string
	bgRef: RefObject<HTMLDivElement>
}

export function Modal({ visible, setVisible, children, className = '', bgRef}: Props) {

	const ref = useRef<HTMLDivElement>(null)
	useOutsideClick(() => setVisible(false), [ref])

	const scaleBody = useCallback((scale: number) => {
		if(bgRef.current) {
			bgRef.current.style.transitionDuration = '500ms'
			bgRef.current.style.transform = `scale(${scale})`
		}
	}, [bgRef])

	useLayoutEffect(() => {
		if(visible) scaleBody(0.9)
		else scaleBody(1)
	},[visible, scaleBody])

	return (
		<TransitionLifecycle
			willRender={visible}
			transition={{
				initial: { opacity: 0, transform: 'translate(-50%, -50%) scale(1.2)', transformOrigin: 'center' },
				transition: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)', transformOrigin: 'center' },
				exit: { opacity: 0, transform: 'translate(-50%, -50%) scale(1.2)', transformOrigin: 'center' },
				duration: 500
			}}
			style={{zIndex: 1000, position: 'fixed', top:'50%', left:'50%'}}
			ref={ref}
		>
			<GlassMaterial className={clsx(style.modal, className)}>
				{children}
			</GlassMaterial>
		</TransitionLifecycle>
	)
}