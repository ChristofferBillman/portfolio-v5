import { useLayoutEffect, useRef, useState } from "react";
import SliderSelector from "../common/SliderSelector";

import style from './Menu.module.css'
import Icon from "../common/Icon";
import GlassMaterial from "../common/GlassMaterial";
import useOutsideClick from "../../hooks/useOutsideClick";
import Button from "../common/Button";

export function Menu() {

	const [selectedItem, setSelection] = useState('Home')
	const [open, setOpen] = useState(false)

	const menuItemsRef = useRef<HTMLDivElement>(null)
	const menuRef = useRef<HTMLDivElement>(null)
	const menuContentRef = useRef<HTMLDivElement>(null)

	useLayoutEffect(() => {
		if (menuRef.current == null || menuItemsRef.current == null || menuContentRef.current == null) return
		menuRef.current.style.width = menuItemsRef.current?.offsetWidth + 'px'
		menuContentRef.current.style.width = menuItemsRef.current?.offsetWidth + 'px'
	}, [open])

	useOutsideClick(() => setOpen(false), [menuRef, menuItemsRef, menuContentRef])

	return (
		<>
			<GlassMaterial
				className={`${style.menuWrapper} ${open ? style.open : ''}`}
				ref={menuRef}
			/>

			<div ref={menuItemsRef} className={style.menuItemsWrapper}>
				<SliderSelector
					items={[
						{ value: 'Home', icon: 'home' },
						{ value: 'Projects', icon: 'landscape' },
						{ value: 'About', icon: 'person' },
						{ value: 'Contact', icon: 'forum' }
					]}
					selectedValue={selectedItem}
					setSelection={item => {
						setSelection(item)
						setOpen(false)
					}}
					className={style.slider}
					wrapper='div'
				/>
				<MenuButton onClick={() => setOpen(!open)} open={open} />
			</div>

			<div
				className={`${style.menuContents} ${open ? style.menuContentsOpen : ''}`}
				ref={menuContentRef}
			>
				<div className={style.line}/>
				<div className={style.projectsContainer}>
					<p>Hello there how are you yes im good sir!</p>
				</div>
				<div className={style.line}/>
				<div className={style.controlsContainer}>
					<Button text="Test" leftSlot={<Icon name='bento'/>}/>
					<Button text="Test" leftSlot={<Icon name='bento'/>}/>
					<Button text="Test" leftSlot={<Icon name='bento'/>}/>
				</div>
			</div>
		</>
	)
}

interface ButtonProps {
	onClick: () => void
	open: boolean
}

function MenuButton({ onClick, open }: ButtonProps) {
	return (
		<button className={style.menuButton} onClick={onClick}>
			<Icon name={open ? 'close' : 'more_horiz'} color="black" size="0.75rem" />
			<label style={{ color: 'black' }}>{open ? 'Close' : 'Menu'}</label>
		</button>
	)
}