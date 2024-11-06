import { useTranslation } from "../../contexts/TranslationContext";
import ContactCard from "../ContactCard";
import style from './FloatingContactLinks.module.css'

export function FloatingContactLinks() {

	const [ translation ] = useTranslation()
	
	return (
		<section className={style.contactContainer}>
			<ContactCard
				title='LinkedIn'
				info='Christoffer Billman'
				img='../img/linkedin.png'
				href={['https://www.linkedin.com/in/christoffer-billman-840029212']}
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
	)
}