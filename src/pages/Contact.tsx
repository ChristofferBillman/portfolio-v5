import { useTranslation } from "../contexts/TranslationContext"

export default function Contact() {

	const [ translation ] = useTranslation()
	
	return (
	<>
		<h1>{translation.Contact}</h1>
	</>
	)
}