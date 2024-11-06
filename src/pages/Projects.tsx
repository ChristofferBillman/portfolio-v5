import { SetStateAction, useRef, useState } from 'react'
import SliderSelector from '../components/common/SliderSelector'
import { useTranslation } from '../contexts/TranslationContext'
import getProjects from '../util/getProjects'
import ProjectListItem from '../components/ProjectListItem'
import isMobile from '../util/IsMobile'
import ProjectBentoItem from '../components/ProjectBentoItem'
import BentoGrid from '../components/BentoGrid'
import TransitionLifecycle from '../components/TransitionLifecycle'
import useLocalStorage from '../hooks/useLocalStorage'

const VIEW_TRANSITION_DURATION = 500

export default function Projects() {

	const [translation] = useTranslation()
	const [view, setView] = useLocalStorage('project_view_preference', 'list')
	const [sliderViewSetting, setSliderViewSetting] = useState(view)

	const pageRef = useRef(null)

	const destopViewOptions = [
		{ text: translation.List, value: 'list', icon: 'list' },
		{ text: translation.Grid, value: 'grid', icon: 'grid_view' },
		{ text: 'Bento', value: 'bento', icon: 'bento' }
	]

	const mobileViewOptions = [
		{ text: translation.List, value: 'list', icon: 'list' },
		{ text: translation.CardView, value: 'grid', icon: 'view_agenda' },
	]

	const viewOptions = isMobile() ? mobileViewOptions : destopViewOptions

	const [projectsRendered, setProjectsRendered] = useState(true)

	const handleViewChange = (newState: SetStateAction<string>) => {
		setProjectsRendered(false)
		setSliderViewSetting(newState)

		const timeout = setTimeout(() => {
			setView(newState)
			setProjectsRendered(true)
		}, VIEW_TRANSITION_DURATION + 100)

		return () => clearTimeout(timeout)
	}

	return (
		<>
			<div ref={pageRef}>
				<h1>{translation.Projects}</h1>
				<p style={{ maxWidth: '40rem' }}>{translation.ProjectsPreamle}</p>

				<div className='row' style={{marginTop: '20vh'}}>
					<SliderSelector
						items={viewOptions}
						selectedValue={sliderViewSetting}
						setSelection={handleViewChange}
					/>
				</div>

				<TransitionLifecycle
					willRender={projectsRendered}
					transition={{
						initial: { opacity: 0, transform: 'scale(.98)' },
						transition: { opacity: 1, transform: 'scale(1)' },
						exit: { opacity: 0, transform: 'scale(.98)' },
						duration: VIEW_TRANSITION_DURATION
					}}
				>
					<ProjectsView view={view} />
				</TransitionLifecycle>

			</div>
		</>
	)
}

interface ProjectsViewProps {
	view: string
}
function ProjectsView({ view }: ProjectsViewProps) {
	const [bentoSizes] = useState(getProjects().map(() => randomBentoSizing()))

	switch (view) {
		case 'list': return (
			getProjects().map(project => <ProjectListItem project={project} key={project.id} />)
		)
		case 'bento': return (
			<BentoGrid>
				{getProjects().map((project, i) => {
					return (
						<ProjectBentoItem
							key={project.id}
							project={project}
							height={bentoSizes[i].h}
							width={bentoSizes[i].w}
						/>)
				})}
			</BentoGrid>
		)
		case 'grid': return (
			<BentoGrid>
				{getProjects().map(project => {
					return (
						<ProjectBentoItem
							key={project.id}
							project={project}
							height={2}
							width={2}
						/>)
				})}
			</BentoGrid>
		)
	}
}

function randomBentoSizing(): { w: number, h: number } {
	const r = Math.ceil(Math.random() * 4)
	switch (r) {
		case 1: return { w: 2, h: 3 }
		case 2: return { w: 3, h: 2 }
		case 3: return { w: 2, h: 2 }
		case 4: return { w: 2, h: 3 }
		default: return { w: 2, h: 3 }
	}
}