import { useTranslation } from '../../contexts/TranslationContext'
import BentoGrid from '../BentoGrid'
import ProjectBentoItem from '../ProjectBentoItem'
import style from './FloatingProjects.module.css'

export function FloatingProjects() {

	const [translation] = useTranslation()
	
	const highlights = [
		translation.ProjectPosts[0],
		translation.ProjectPosts[8],
		translation.ProjectPosts[3]
	]
	
	return (
		<BentoGrid className={style.container}>
			{highlights.map((p, i) => (
				<ProjectBentoItem
					className={style[`r${i+1}`]}
					key={p.id}
					project={p}
					height={2}
					width={3}
				/>
			))}
		</BentoGrid>
	)
}