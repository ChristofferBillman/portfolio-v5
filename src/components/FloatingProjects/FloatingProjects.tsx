import getProjects from '../../util/getProjects'
import BentoGrid from '../BentoGrid'
import ProjectBentoItem from '../ProjectBentoItem'
import style from './FloatingProjects.module.css'

export function FloatingProjects() {

	const highlights = [getProjects()[0], getProjects()[8], getProjects()[3]]
	
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