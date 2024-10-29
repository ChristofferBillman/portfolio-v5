import { Dispatch, ReactNode, SetStateAction, useLayoutEffect, useRef, useState } from 'react'
import GlassMaterial from '../GlassMaterial'
import style from './SliderSelector.module.css'
import { SliderSelectorItem } from './SliderSelectorItem'
import clsx from 'clsx'

interface Props {
	items: { text: string, value: string, icon?: string }[]
	selectedValue: string
	setSelection: Dispatch<SetStateAction<string>>
	className?: string
	rightSlot?: ReactNode
	wrapper?: 'glass' | 'div' | 'nav'
	direction?: 'vertical' | 'horizontal'
}

// This logic is insane and I will not understand it in 2 days.
export function SliderSelector({ wrapper = 'glass', direction = 'horizontal', ...props }: Props) {

	const sliderRef = useRef<HTMLDivElement>(null)
	const itemsRef = useRef<Array<HTMLDivElement | null>>([])

	const [offset, setOffset] = useState(0)
	const [selectedItemLen, setSelectedItemLen] = useState(0)

	const selectedIndex = props.items.map(item => item.value).indexOf(props.selectedValue)

	// Get these values before render, why they are in useLayoutEffect instead of directly in the component.
	useLayoutEffect(() => {		
		const mode = direction == 'horizontal' ? 'width' : 'height'
		// Calculate cumulative width/height up to the selected item
		const newOffset = itemsRef.current.slice(0, selectedIndex).reduce((total, item) => (
			item ? total + item.getBoundingClientRect()[mode] : total
		), 0)

		// Get the width/height of the selected item
		let newSelectedItemLen = itemsRef.current[selectedIndex]?.getBoundingClientRect()[mode] || 0
		// Lmao I can't even
		if(mode == 'height') newSelectedItemLen = 300

		setOffset(newOffset)
		setSelectedItemLen(newSelectedItemLen)

	}, [direction, selectedIndex])

	const Wrapper = getWrapper(wrapper)

	return (
		<Wrapper
			className={clsx(style.sliderSelector, props.className, direction == 'vertical' && style.vertical)}
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
			{props.rightSlot}
			<span
				className={style.selectedItem}
				style={{
					transform: `translate${direction == 'horizontal' ? 'X' : 'Y'}(${offset}px)`,
					width: selectedItemLen + 'px',
				}}
			/>
		</Wrapper>
	)
}

const getWrapper = (el: 'glass' | 'div' | 'nav') => {
	if (el == 'glass') return GlassMaterial
	else return el
}