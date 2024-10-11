import { Dispatch, forwardRef, SetStateAction } from 'react'
import style from './SliderSelector.module.css'
import Icon from '../Icon'

interface Props {
	item: {value: string, icon: string}
	selectedValue: string
	setSelection: Dispatch<SetStateAction<string>>
}
export const SliderSelectorItem = forwardRef(function({ item, selectedValue, setSelection }: Props, ref: React.ForwardedRef<HTMLDivElement>) {

	const icon = item.icon || 'circle'

	return (
	<div className={style.sliderSelectorItem} ref={ref}>
		<input
			type='radio'
			id={item.value}
			value={item.value}
			checked={selectedValue == item.value}
			onChange={() => setSelection(item.value)}
		/>
		<label htmlFor={item.value}>{item.value}<Icon name={icon} size='0.75rem'/></label>
	</div>
	)
})