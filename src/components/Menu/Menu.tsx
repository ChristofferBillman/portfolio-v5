import { useRef, useState } from "react";
import SliderSelector from "../common/SliderSelector";

import style from './Menu.module.css'
import Icon from "../common/Icon";
import GlassMaterial from "../common/GlassMaterial";
import useOutsideClick from "../../hooks/useOutsideClick";

export function Menu() {

	const [selectedItem, setSelection] = useState('Home')
	const [open, setOpen] = useState(false)

	const menuRef = useRef(null)
	useOutsideClick(menuRef, () => setOpen(false))

	return (
		<GlassMaterial
			className={`${style.menuWrapper} ${open ? style.open : ''}`}
			ref={menuRef}
		>
			<SliderSelector
				items={[
					{value: 'Home', icon: 'home'},
					{value: 'Projects', icon: 'landscape'},
					{value: 'About', icon: 'person'},
					{value: 'Contact', icon: 'forum'}
				]}
				selectedValue={selectedItem}
				setSelection={item => {
					setSelection(item)
					setOpen(false)
				}}
				rightSlot={<MenuButton onClick={() => setOpen(!open)} open={open}/>}
				wrapper='div'
			/>
		</GlassMaterial>
	)
}

interface ButtonProps {
	onClick: () => void
	open: boolean
}

function MenuButton({onClick, open}: ButtonProps) {
	return (
		<button className={style.menuButton} onClick={onClick}>
			<Icon name={open ? 'close' : 'more_horiz'} color="black" size="0.75rem"/>
			<label style={{color: 'black'}}>{open ? 'Close' : 'Menu'}</label>
		</button>
	)
}