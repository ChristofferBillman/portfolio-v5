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
		<div style={{padding: '1rem'}}>
			<h1>Hey there!</h1>
			<p>As of now this is really just my personal playground. Eventually, this page will be moved to christofferbillman.se and become my new portfolio!</p>
			<GlassMaterial className='p-std'>
				<p>This glass material is so cool! I can't believe that gradient borders + border radius + transparency is possible!!!</p>
			</GlassMaterial>
			<div style={{margin: '1rem'}}/>
			<div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
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
				items={[{value: 'List', icon: 'list'},{value: 'Grid', icon: 'grid_view'},{value: 'Bento', icon: 'bento'}]}
			/>
			</div>
		</div>
	)
}