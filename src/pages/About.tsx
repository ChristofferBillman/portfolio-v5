import { useTranslation } from "../contexts/TranslationContext"

export default function About() {

	const [ translation ] = useTranslation()
	
	return (
	<>
		<h1>{translation.About}</h1>
	</>
	)
}