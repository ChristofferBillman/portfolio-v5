import { useState } from "react";
import SliderSelector from "../common/SliderSelector";

import style from './Menu.module.css'

export function Menu() {

	const [selectedItem, setSelection] = useState('Menu')

	return (
		<SliderSelector
			items={[
				{value: 'Home', icon: 'home'},
				{value: 'Projects', icon: 'landscape'},
				{value: 'About', icon: 'person'},
				{value: 'Contact', icon: 'forum'}
			]}
			selectedValue={selectedItem}
			setSelection={setSelection}
			className={style.menu}	
		/>
	)
}