import { useTranslation } from "../../contexts/TranslationContext"
import style from './Home.module.css'
import FloatingContactLinks from "../../components/FloatingContactLinks"

import clsx from "clsx"
import ProjectListItem from "../../components/ProjectListItem"

export function Home() {

	const [ translation ] = useTranslation()
	
	return (
	<>
		<div className={style.container}>
			<div className={style.introContainer}>
				<img src='../img/me.webp' className={clsx(style.heroImg, style.fadeIn)} alt={translation.Name == 'EN' ? 'Christoffer smiling, looking friendly and approachable.' : 'Christoffer ler och ser trevlig och snäll ut.'}/>
				<div>
					<p className={style.fadeIn}>{translation.NiceToMeet}</p>
					<h1 className={clsx(style.fadeIn, style.stagger1)}>Christoffer <br/> Billman</h1>
					<p className={clsx(style.scrollCTA, style.fadeIn, style.stagger2)}>
						{translation.ScrollToSeeMore} 
					</p>
				</div>
			</div>

			<p style={{marginBottom: '75vh'}}>{translation.HeroDesc}</p>

		</div>

		<h1 style={{marginBottom: '2rem'}}>{translation.HighlightedProjects}</h1>
		<FullwidthProjects/>
		{/*<FloatingProjects/>*/}

		<h1 style={{textAlign: 'center', marginTop: '20vh'}}>{translation.ContactCTAText}</h1>
		<FloatingContactLinks/>
	</>
	)
}


function FullwidthProjects() {

	const [ translation ] = useTranslation()

	return (
		<section className={style.projectsContainer}>
			<ProjectListItem project={translation.ProjectPosts[0]} variant='large'/>
			<ProjectListItem project={translation.ProjectPosts[8]} variant='large'/>
			<ProjectListItem project={translation.ProjectPosts[3]} variant='large'/>
		</section>
	)
}