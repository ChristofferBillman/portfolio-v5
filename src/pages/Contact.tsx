import ContactCard from "../components/ContactCard"
import TransitionLifecycle from "../components/TransitionLifecycle"
import { useTranslation } from "../contexts/TranslationContext"

export default function Contact() {

	const [translation] = useTranslation()

	return (
		<>
			<h1>{translation.Contact}</h1>
			<p>{translation.ContactPreamble}</p>
			<TransitionLifecycle
				willRender={true}
				transition={{
					initial: { opacity: 0, transform: 'scale(.98)' },
					transition: { opacity: 1, transform: 'scale(1)' },
					exit: { opacity: 0, transform: 'scale(.98)' },
					duration: 500
				}}
			>
				<div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '5rem' }}>
					<ContactCard
						title='LinkedIn'
						info='Christoffer Billman'
						img='../img/linkedin.png'
						href={['www.linkedin.com/in/christoffer-billman-840029212']}
					/>
					<ContactCard
						title='GitHub'
						info='ChristofferBillman'
						img='../img/gh.png'
						href={['https://github.com/ChristofferBillman']}
					/>
					<ContactCard
						title={translation.Phone}
						info='+46 07 577 22 97'
						copy
						href={['sms:+46705772297', 'tel:+46705772297']} 
					/>
					<ContactCard
						title={translation.Email}
						info='christoffer.billman@gmail.com'
						copy
						href={['mailto:christoffer.billman@gmail.com']}
					/>
				</div>
			</TransitionLifecycle>
		</>
	)
}