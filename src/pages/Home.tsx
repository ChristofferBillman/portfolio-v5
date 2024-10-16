import { useTranslation } from "../contexts/TranslationContext"

export default function Home() {

	const [ translation ] = useTranslation()
	
	return (
	<>
		<h1>{translation.HeyThere}</h1>
		<p>{translation.UnderConstructionText}</p>
		<a style={{fontSize: 'inherit'}} href='https://christofferbillman.se' target='_blank'>christofferbillman.se</a>
	</>
	)
}