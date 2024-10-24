import { Dispatch, forwardRef, SetStateAction } from 'react'
import style from './SliderSelector.module.css'
import Icon from '../Icon'

interface Props {
	item: {text: string, value: string, icon?: string}
	selectedValue: string
	setSelection: Dispatch<SetStateAction<string>>
}
export const SliderSelectorItem = forwardRef(function({ item, selectedValue, setSelection }: Props, ref: React.ForwardedRef<HTMLDivElement>) {

	const icon = item.icon

	return (
	<div className={style.sliderSelectorItem} ref={ref}>
		<input
			type='radio'
			id={item.value}
			value={item.value}
			checked={selectedValue == item.value}
			onChange={() => setSelection(item.value)}
		/>
		<label
			htmlFor={item.value}
			tabIndex={0}
			onKeyDown={e => {
				if (e.key === 'Enter' || e.key === ' ') {
				  e.preventDefault();
				  setSelection(item.value)
				}
			}}
		>
			{item.text}
			{icon && <Icon name={icon} size='0.75rem'/>}
		</label>
	</div>
	)
})