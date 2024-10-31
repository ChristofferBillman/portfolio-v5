import { useNavigate, useParams } from "react-router-dom"
import Markdown from "../../components/Markdown"
import Button from "../../components/common/Button"
import Icon from "../../components/common/Icon"
import { useEffect } from "react"
import useAnimatedBackground from "../../contexts/AnimatedBackgroundContext"

import style from './ProjectPage.module.css'
import { useTranslation } from "../../contexts/TranslationContext"
import getProjects from "../../util/getProjects"
import { Resource } from "../../types/Project"
import A from "../../components/common/A"

export function ProjectPage() {

	const { name } = useParams()
	const animationController = useAnimatedBackground()

	const [ translation ] = useTranslation()

	const project = getProjects().find(project => project.id == name)
	
	useEffect(() => {
		if (!project) return
		animationController.setColors(project.colors)
	}, [animationController, project])

	if (!project) return <NoProject />

	return (
		<div className={style.container}>
			<div className={style.navContainer}>
				<BackButton/>
				<span className='accent'>
					{project.name}
				</span>
			</div>
			<h1>{project.title}</h1>
			<Markdown content={project.content} />

			{project.resources && project.resources.length != 0 &&
			<>
				<h2>{translation.LinksAndResources}</h2>
				
				<div className={style.resourceContainer}>
					{project.resources?.map(r => <ResourceItem resource={r}/>)}
				</div>
			</>
			}
			<div className={style.backhome}>
				<BackButton/>
			</div>
		</div>
	)
}

function BackButton() {
	const [translation] = useTranslation()
	const navigate = useNavigate()
	const animationController = useAnimatedBackground()

	return (
		<Button
			text={translation.AllProjects}
			onClick={() => {
				animationController.restoreColors()
				navigate(-1)
			}}
			leftSlot={<Icon name='arrow_back' />}
		/>
	)
}

function NoProject() {
	return (
		<div style={{ padding: '1rem' }}>
			<h1>Oops!</h1>
			<p>There doesn't seem to be a project with that name. It may have been deleted or moved.</p>
		</div>
	)
}

function ResourceItem({resource}: {resource: Resource}) {

	const getIconName = (resourceType: string | undefined) => {
		switch(resourceType) {
			case 'pdf': return 'picture_as_pdf'
			case 'figma': return 'design_services'
			case 'code': return 'code'
			default: return 'arrow_outward'
		}
	}

	const iconName = getIconName(resource.type)

	return (
		<A
			href={resource.href}
			text={resource.text}
			iconName={iconName}
		/>
	)
}