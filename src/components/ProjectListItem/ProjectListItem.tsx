import { useNavigate } from "react-router-dom"
import { useTranslation } from "../../contexts/TranslationContext"
import Project from "../../types/Project"
import Button from "../common/Button"
import Icon from "../common/Icon"

import style from './ProjectListItem.module.css'

interface Props {
	project: Project
}

export function ProjectListItem({ project }: Props) {

	const [ translation ] = useTranslation()
	const navigate = useNavigate()

	return (
		<div className={style.container}>
			<div className={style.infoContainer}>
				<span className={'accent'}>{project.name}</span>
				<p className={style.desc}>{project.title}</p>
				<Button
					text={translation.ReadMore}
					rightSlot={<Icon name='arrow_forward'/>}
					onClick={() => navigate('/projects/' + project.name.toLowerCase())}
				/>
			</div>
			<img src={project.thumbnail}/>
		</div>
	)
}