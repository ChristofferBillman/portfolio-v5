import { useNavigate } from "react-router-dom"
import { useTranslation } from "../../contexts/TranslationContext"
import Project from "../../types/Project"
import Button from "../common/Button"
import Icon from "../common/Icon"

import style from './ProjectListItem.module.css'
import APP_CONFIG from "../../../AppConfig"
import Img from "../common/Img"

interface Props {
	project: Project
	variant?: 'large' | 'normal'
}

export function ProjectListItem({ project, variant = 'normal' }: Props) {

	const [ translation ] = useTranslation()
	const navigate = useNavigate()

	const isLarge = variant == 'large' 

	return (
		<div className={`${style.container} ${isLarge ? style.largeContainer : ''}`}>
			<div className={style.infoContainer}>
				<div>
					<span className={'accent'}>{project.name}</span>
					<p className={style.desc}>{project.title}</p>
				</div>
				<Button
					text={translation.ReadMore}
					rightSlot={<Icon name='arrow_forward'/>}
					onClick={() => navigate('/projects/' + project.id)}
				/>
			</div>
			<Img
				src={project.thumbnail + APP_CONFIG.IMG_FILEEXTENSION}
				className={style.coverImage}
			/>
		</div>
	)
}