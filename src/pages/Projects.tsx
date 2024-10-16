import { useRef, useState } from 'react'
import Button from '../components/common/Button'
import Icon from '../components/common/Icon'
import SliderSelector from '../components/common/SliderSelector'
import { useTranslation } from '../contexts/TranslationContext'
import { Modal } from '../components/common/Modal/Modal'

export default function Projects() {

	const [ translation ] = useTranslation()
	const [ view, setView ] = useState('bento')

	const [ filterModalVisible, setFilterModalVisible ] = useState(false)
	const pageRef = useRef(null)

	return (
	<>
	<div ref={pageRef}>
		<h1>{translation.Projects}</h1>
		<p>{translation.ProjectsPreamle}</p>

		<div className='row'>
			<Button
				text='Filter'
				leftSlot={<Icon name='filter_list'/>}
				rightSlot={<Icon name='circle'/>}
				onClick={() => setFilterModalVisible(true)}
			/>
			<SliderSelector
				items={[
					{ text: translation.List, value: 'list', icon: 'list' },
					{ text: translation.Grid, value: 'grid', icon: 'grid_view' },
					{ text: 'Bento',value: 'bento', icon: 'bento'}
				]}
				selectedValue={view}
				setSelection={setView}
			/>
		</div>
	</div>
	<Modal
		visible={filterModalVisible}
		setVisible={setFilterModalVisible}
		bgRef={pageRef}
		className='p-1'	
	>
		<Button
			text={translation.Close}
			leftSlot={<Icon name='close'/>}
			onClick={() => setFilterModalVisible(false)}
		/>
	</Modal>
	</>
	)
}