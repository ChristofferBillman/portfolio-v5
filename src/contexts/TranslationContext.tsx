import React, {createContext, ReactNode, useContext, useState} from 'react'
import getLocale from '../util/getLocale'

interface TranslationContextProps {
	children: React.ReactNode
}

export type Translation = {
	Name: string
	Home: string
	Projects: string
	About: string
	Contact: string
	HeyThere: string
	UnderConstructionText: string
	ProjectsPreamle: string
	List: string
	Grid: string
	Close: string
	Menu: string
	BuiltWithReact: string
	SourceCode: string
	FooterTagline: string
	AllProjects: string
	ReadMore: string
}

type TranslationContext = [Translation, (_: 'EN' | 'SE') => void]


const TranslationContext = createContext<TranslationContext>([
	{} as Translation,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	(_: 'EN' | 'SE') => {
		console.error('useTranslation must be used within a TranslationProvider.')
	}
])

export default function TranslationProvider({ children }: TranslationContextProps): ReactNode {

	const [translation, setTranslation] = useState(translations.find(lang => lang.Name === getLocale()))

	const translationSetter = (language: 'EN' | 'SE') => {
		setTranslation(translations.find(lang => lang.Name === language))
	}

	if (translation === undefined) {
		throw new Error(`Translation for language '${getLocale()}' not found`)
	}

	return (
		<TranslationContext.Provider value={[translation, translationSetter]}>
			{children}
		</TranslationContext.Provider>
	)
}

export const useTranslation = () => {
	return useContext(TranslationContext)
}

const translations: Translation[] = [
	{
		Name: 'SE',
		Home: 'Hem',
		Projects: 'Projekt',
		About: 'Om mig',
		Contact: 'Kontakt',
		HeyThere: 'Hej där!',
		UnderConstructionText: 'Den här sidan är under konstruktion 🛠️!\nNär den är klar kommer den att flyttas till christofferbillman.se och bli mitt nya portfolio.',
		ProjectsPreamle: 'Jag har deltagit och skapat projekt som del av studier, på min fritid och professionellt. Här kan du kika genom ett urval av dessa.',
		List: 'Lista',
		Grid: 'Rutnät',
		Close: 'Stäng',
		Menu: 'Meny',
		BuiltWithReact: 'Byggd med React.',
		SourceCode: 'Källkod.',
		FooterTagline: 'Skapad med kärlek.',
		AllProjects: 'Alla projekt',
		ReadMore: 'Läs mer'
	},
	{
		Name: 'EN',
		Home: 'Home',
		Projects: 'Projects',
		About: 'About',
		Contact: 'Contact',
		HeyThere: 'Hey there!',
		UnderConstructionText: 'This site is under construction 🛠️! Eventually, it will be moved to christofferbillman.se and become my new portfolio.',
		ProjectsPreamle: 'I have participated and created projects as part of studies, in my spare time and professionally. A selection of these projects are previewed here.',
		List: 'List',
		Grid: 'Grid',
		Close: 'Close',
		Menu: 'Menu',
		BuiltWithReact: 'Built with React.',
		SourceCode: 'Source.',
		FooterTagline: 'Made with love.',
		AllProjects: 'All projects',
		ReadMore: 'Read more'
	},
]