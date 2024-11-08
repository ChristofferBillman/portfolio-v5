import { useTranslation } from "../../contexts/TranslationContext"
import style from './Home.module.css'
import Img from "../../components/common/Img"
import FloatingContactLinks from "../../components/FloatingContactLinks"

import clsx from "clsx"
import FloatingProjects from "../../components/FloatingProjects"

export function Home() {

	const [ translation ] = useTranslation()
	
	return (
	<>
		<div className={style.container}>
			<div className={style.introContainer}>
				<Img src='../img/me.webp' className={clsx(style.heroImg, style.fadeIn)}/>
				<div>
					<p className={style.fadeIn}>{translation.NiceToMeet}</p>
					<h1 className={clsx(style.fadeIn, style.stagger1)}>Christoffer <br/> Billman</h1>
					<p className={clsx(style.scrollCTA, style.fadeIn, style.stagger2)}>
						{translation.ScrollToSeeMore} 
					</p>
				</div>
			</div>

			<p>{translation.HeroDesc}</p>

			<p style={{maxWidth: '50vw'}}>{translation.HeroDesc2}</p>

			<p style={{maxWidth: '50vw'}}>{translation.HeroGuide}</p>

		</div>

		<h1 style={{marginBottom: '2rem'}}>{translation.HighlightedProjects}</h1>
		<FloatingProjects/>

		<h1 style={{textAlign: 'center', marginTop: '20vh'}}>{translation.ContactCTAText}</h1>
		<FloatingContactLinks/>
	</>
	)
}

/*
function FullwidthProjects() {
	return (
		<section className={style.projectsContainer}>
			<ProjectListItem project={getProjects()[0]} variant='large'/>
			<ProjectListItem project={getProjects()[8]} variant='large'/>
			<ProjectListItem project={getProjects()[3]} variant='large'/>
		</section>
	)
}*/