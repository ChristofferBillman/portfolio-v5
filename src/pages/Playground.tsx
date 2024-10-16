import { useRef, useState } from "react"
import Button from "../components/common/Button"
import GlassMaterial from "../components/common/GlassMaterial"
import Icon from "../components/common/Icon"
import SliderSelector from "../components/common/SliderSelector"
import useAnimatedBackground from "../contexts/AnimatedBackgroundContext"
import { Modal } from "../components/common/Modal/Modal"
import { useNavigate } from "react-router-dom"

export default function Playground() {

	const animationController = useAnimatedBackground()
	const [selectedItem, setSelection] = useState('List')

	const navigate = useNavigate()

	const [modalVisible, setModalVisible] = useState(false)
	const contentRef = useRef<HTMLDivElement>(null)

	return (
		<>
			<div ref={contentRef}>
				<h1>Playground</h1>
				<p>This is where I test different components and features.</p>
				<div style={{ margin: '1rem' }} />
				<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
					<Button
						onClick={() => {
							animationController.setColors(['#C91010', '#CE522D'])
						}}
						text='Red'
						rightSlot={<Icon name='palette' size='0.75rem' />}
					/>
					<Button
						onClick={() => {
							animationController.setColors(['#18C754', '#096423', '#99B916'])
						}}
						text='Green'
						rightSlot={<Icon name='palette' size='0.75rem' />}
					/>
					<Button
						onClick={() => {
							animationController.setColors(['#161616', '#353535', '#0A0A0A'])
						}}
						text='Black'
						rightSlot={<Icon name='palette' size='0.75rem' />}
					/>
					<Button
						onClick={() => {
							animationController.setColors(['#2BA1FC', '#84B2C0', '#0D5473', '#1980FF', '#10ADC9'])
						}}
						text='Blue'
						rightSlot={<Icon name='palette' size='0.75rem' />}
					/>

					<Button
						onClick={() => {
							animationController.restoreDefaultColors()
						}}
						text='Restore defaults'
						rightSlot={<Icon name='settings_backup_restore' size='0.75rem' />}
					/>

					<Button
						onClick={() => navigate('/projects/chare')}
						text='Go to sample project'
						rightSlot={<Icon name='arrow_forward' size='0.75rem' />}
					/>

					<Button
						onClick={() => {
							setModalVisible(true)
						}}
						text='Open modal'
						rightSlot={<Icon name='expand_content' size='0.75rem' />}
					/>

					<SliderSelector
						selectedValue={selectedItem}
						setSelection={setSelection}
						items={[{ text: 'List', value: 'list', icon: 'list' }, { text: 'Bento', value: 'bento', icon: 'bento' }]}
					/>
				</div>
				<GlassMaterial className='g-test'>
					<p>Glass Material</p>
				</GlassMaterial>
			</div>

			<Modal
				visible={modalVisible}
				setVisible={setModalVisible}
				bgRef={contentRef}
				className="p-1"
			>
				<p>This is some modal content. I should have the effect present in visionOS modals.</p>
				<Button
					onClick={() => {
						setModalVisible(false)
					}}
					text='Close'
					rightSlot={<Icon name='close' size='0.75rem' />}
				/>
			</Modal>
		</>
	)
}