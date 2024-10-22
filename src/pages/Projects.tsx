import { useRef, useState } from 'react'
import Button from '../components/common/Button'
import Icon from '../components/common/Icon'
import SliderSelector from '../components/common/SliderSelector'
import { useTranslation } from '../contexts/TranslationContext'
import { Modal } from '../components/common/Modal/Modal'
import getProjects from '../util/getProjects'
import ProjectListItem from '../components/ProjectListItem'
import isMobile from '../util/IsMobile'

export default function Projects() {

	const [ translation ] = useTranslation()
	const [ view, setView ] = useState('list')

	const [ filterModalVisible, setFilterModalVisible ] = useState(false)
	const pageRef = useRef(null)

	const destopViewOptions = [
		{ text: translation.List, value: 'list', icon: 'list' },
		{ text: translation.Grid, value: 'grid', icon: 'grid_view' },
		{ text: 'Bento',value: 'bento', icon: 'bento'}
	]

	const mobileViewOptions = [
		{ text: translation.List, value: 'list', icon: 'list' },
		{ text: translation.Grid, value: 'grid', icon: 'grid_view' },
	]

	const viewOptions = isMobile() ? mobileViewOptions : destopViewOptions

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
				items={viewOptions}
				selectedValue={view}
				setSelection={setView}
			/>
		</div>

		{getProjects().map(project => <ProjectListItem project={project}/>)}
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