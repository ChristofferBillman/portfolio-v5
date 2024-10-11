import { Dispatch, SetStateAction, useLayoutEffect, useRef, useState } from 'react'
import GlassMaterial from '../GlassMaterial'
import style from './SliderSelector.module.css'
import { SliderSelectorItem } from './SliderSelectorItem'

interface Props {
	items: { value: string, icon: string }[]
	selectedValue: string
	setSelection: Dispatch<SetStateAction<string>>
}
// This logic is insane and I will not understand it in 2 days.
export function SliderSelector(props: Props) {

	const sliderRef = useRef<HTMLDivElement>(null)
	const itemsRef = useRef<Array<HTMLDivElement | null>>([])

	const [offsetX, setOffsetX] = useState(0)
	const [selectedItemWidth, setSelectedItemWidth] = useState(0)

	const selectedIndex = props.items.map(item => item.value).indexOf(props.selectedValue)

	// Get these values before render, why they are in useLayoutEffect instead of directly in the component.
	useLayoutEffect(() => {
		// Calculate cumulative width up to the selected item
		const newOffsetX = itemsRef.current.slice(0, selectedIndex).reduce((total, item) => (
			item ? total + item.getBoundingClientRect().width : total
		), 0)

		// Get the width of the selected item
		const newSelectedItemWidth = itemsRef.current[selectedIndex]?.getBoundingClientRect().width || 0

		setOffsetX(newOffsetX)
		setSelectedItemWidth(newSelectedItemWidth)
	}, [selectedIndex])

return (
	<GlassMaterial
		className={style.sliderSelector}
		ref={sliderRef}
	>
		{props.items.map((item, i) => (
			<SliderSelectorItem
				key={i}
				item={item}
				ref={el => itemsRef.current[i] = el}
				{...props}
			/>
		))}
		<span
			className={style.selectedItem}
			style={{
				transform: `translateX(${offsetX}px)`,
				width: selectedItemWidth + 'px',
			}}
		/>
	</GlassMaterial>
)}