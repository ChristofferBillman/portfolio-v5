import { useState } from "react"
import Button from "../components/common/Button"
import GlassMaterial from "../components/common/GlassMaterial"
import Icon from "../components/common/Icon"
import SliderSelector from "../components/common/SliderSelector"
import useAnimatedBackground from "../contexts/AnimatedBackgroundContext"

export default function Playground() {

	const animationController = useAnimatedBackground()
	const [selectedItem, setSelection] = useState('List')

	return (
		<>
			<h1>Playground</h1>
			<p>This is where I test different components and features.</p>
			<div style={{margin: '1rem'}}/>
			<div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
			<Button
				onClick={() => {
					animationController.setColors(['#C91010', '#CE522D'])
				}}
				text='Red'
				rightSlot={<Icon name='palette' size='0.75rem'/>}
			/>
			<Button
				onClick={() => {
					animationController.setColors(['#18C754', '#096423', '#99B916'])
				}}
				text='Green'
				rightSlot={<Icon name='palette' size='0.75rem'/>}
			/>
			<Button
				onClick={() => {
					animationController.setColors(['#161616', '#353535', '#0A0A0A'])
				}}
				text='Black'
				rightSlot={<Icon name='palette' size='0.75rem'/>}
			/>
			<Button
				onClick={() => {
					animationController.setColors(['#2BA1FC','#84B2C0','#0D5473','#1980FF','#10ADC9'])
				}}
				text='Blue'
				rightSlot={<Icon name='palette' size='0.75rem'/>}
			/>

			<Button
				onClick={() => {
					animationController.restoreDefaultColors()
				}}
				text='Restore defaults'
				rightSlot={<Icon name='settings_backup_restore' size='0.75rem'/>}
			/>

			<SliderSelector
				selectedValue={selectedItem}
				setSelection={setSelection}
				items={[{text: 'List', value: 'list', icon: 'list'},{text: 'Grid', value: 'grid', icon: 'grid_view'},{text: 'Bento', value: 'bento', icon: 'bento'}]}
			/>
			</div>
			<GlassMaterial className='g-test'>
				<p>Glass Material</p>
			</GlassMaterial>
		</>
	)
}