import { useTranslation } from "../../contexts/TranslationContext"
import { useNavigate } from 'react-router-dom'
import Button from '../../components/common/Button'
import ProjectListItem from '../../components/ProjectListItem'
import getProjects from '../../util/getProjects'
import style from './Home.module.css'
import Icon from '../../components/common/Icon'
import ContactCard from '../../components/ContactCard'
import Img from "../../components/common/Img"

export function Home() {

	const [ translation ] = useTranslation()
	const navigate = useNavigate()
	
	return (
	<>
		<div className={style.container}>
			<div className={style.introContainer}>
				<Img src='../img/me.webp' className={style.heroImg}/>
				<div>
					<p>{translation.NiceToMeet}</p>
					<h1>Christoffer <br/> Billman</h1>
				</div>
			</div>

			<p>{translation.HeroDesc}</p>

		</div>

		<h1 style={{marginBottom: '2rem'}}>{translation.HighlightedProjects}</h1>
		<section className={style.projectsContainer}>
			<ProjectListItem project={getProjects()[0]} variant='large'/>
			<ProjectListItem project={getProjects()[8]} variant='large'/>
			<ProjectListItem project={getProjects()[3]} variant='large'/>
		</section>

		<div className={style.btnContainer}>
			<Button
				text={translation.AllProjects}
				onClick={() => navigate('/projects')}
				rightSlot={<Icon name='landscape'/>}
			/>
			<Button
				text={translation.About}
				onClick={() => navigate('/about')}
				rightSlot={<Icon name='person'/>}
			/>
		</div>

		<h1 style={{textAlign: 'center'}}>{translation.ContactCTAText}</h1>

		<section className={style.contactContainer}>
			<ContactCard
				title='LinkedIn'
				info='Christoffer Billman'
				img='../img/linkedin.png'
				href={['www.linkedin.com/in/christoffer-billman-840029212']}
				className={style.r1}
			/>
			<ContactCard
				title='GitHub'
				info='ChristofferBillman'
				img='../img/gh.png'
				href={['https://github.com/ChristofferBillman']}
				className={style.r2}
			/>
			<ContactCard
				title={translation.Phone}
				info='+46 70 577 22 97'
				copy
				href={['sms:+46705772297', 'tel:+46705772297']}
				className={style.r3}
			/>
			<ContactCard
				title={translation.Email}
				info='christoffer.billman@gmail.com'
				copy
				href={['mailto:christoffer.billman@gmail.com']}
				className={style.r4}
			/>
		</section>


	</>
	)
}