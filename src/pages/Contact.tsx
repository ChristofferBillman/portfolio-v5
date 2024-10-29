import FloatingContactLinks from "../components/FloatingContactLinks"
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
				<FloatingContactLinks/>
			</TransitionLifecycle>
		</>
	)
}