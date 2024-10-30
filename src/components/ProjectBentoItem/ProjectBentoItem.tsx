import { useNavigate } from "react-router-dom"
import Project from "../../types/Project"
import style from './ProjectBentoItem.module.css'
import APP_CONFIG from "../../../AppConfig"
import clsx from "clsx"

interface Props {
	project: Project
	height: number
	width: number
	className?: string
}

export function ProjectBentoItem({ project, height, width, className }: Props) {

	const navigate = useNavigate()

	return (
		<button
			className={clsx(style.container, className, 'observe')}
			style={{
				gridRow: `span ${height}`,
				gridColumn: `span ${width}`,
				backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%), url("${project.thumbnail + APP_CONFIG.IMG_FILEEXTENSION}")`
			}}
			onClick={() => navigate('/projects/' + project.id)}
			tabIndex={0}
		>
			<span className='accent'>{project.name}</span>
			<p>{project.title}</p>
		</button>
	)
}