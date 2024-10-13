import { useEffect, useLayoutEffect, useRef, useState } from "react";
import SliderSelector from "../common/SliderSelector";

import style from './Menu.module.css'
import Icon from "../common/Icon";
import GlassMaterial from "../common/GlassMaterial";
import useOutsideClick from "../../hooks/useOutsideClick";
import Button from "../common/Button";
import { useLocation, useNavigate } from "react-router-dom";

export function Menu() {

	const navigate = useNavigate()
	const location = useLocation()

	const [selectedItem, setSelection] = useState('Home')
	const [open, setOpen] = useState(false)

	useEffect(() => {
		setSelection(location.pathname)
	}, [location])

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
						{ text: 'Home', icon: 'home', value: '/' },
						{ text: 'Projects', icon: 'landscape', value: '/projects' },
						{ text: 'About', icon: 'person', value: '/about' },
						{ text: 'Contact', icon: 'forum', value: '/contact' }
					]}
					selectedValue={selectedItem}
					setSelection={item => {
						setSelection(item)
						navigate(item.toString().toLowerCase())
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
					<Button
						text="Playground"
						onClick={() => {
							navigate('/playground')
							setOpen(false)
						}}
						leftSlot={<Icon name='toys'/>}
					/>
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