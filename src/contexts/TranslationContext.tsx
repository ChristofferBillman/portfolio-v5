import React, {createContext, ReactNode, useContext, useState} from 'react'
import getLocale from '../util/getLocale'

interface TranslationContextProps {
	children: React.ReactNode
}

export type Translation = {
	HeroGuide: ReactNode
	Name: string
	Home: string
	Projects: string
	About: string
	Contact: string
	HeyThere: string
	UnderConstructionText: string
	ProjectsPreamle: string
	ContactPreamble: string
	List: string
	Grid: string
	CardView: string
	Close: string
	Menu: string
	BuiltWithReact: string
	SourceCode: string
	FooterTagline: string
	AllProjects: string
	ReadMore: string
	LinksAndResources: string
	ReduceMotion: string
	ReduceColor: string
	Phone: string
	Email: string
	BundleSize: string
	ContactCTAText: string
	NiceToMeet: string
	HeroDesc: string
	HighlightedProjects: string
	Resume: string
	ScrollToSeeMore: string
	CVLink: string
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
		ProjectsPreamle: 'Jag har deltagit och skapat projekt som del av studier och på min fritid. Här kan du kika genom ett urval av dessa.',
		List: 'Lista',
		Grid: 'Rutnät',
		Close: 'Stäng',
		Menu: 'Meny',
		BuiltWithReact: 'Byggd med React.',
		SourceCode: 'Källkod',
		FooterTagline: 'Skapad med kärlek.',
		AllProjects: 'Alla projekt',
		ReadMore: 'Läs mer',
		LinksAndResources: 'Länkar & resurser',
		ReduceMotion: 'Minska rörelse',
		ReduceColor: 'Minska färg',
		ContactPreamble: 'Jag berättar gärna mer om mig själv, och vill gärna höra mer om dig! Hör av dig!',
		Phone: 'Telefon',
		Email: 'Mejl',
		BundleSize: 'Buntstorlek, detta bygge:',
		ContactCTAText: 'Hör av dig så tar vi en kaffe!',
		NiceToMeet: 'Kul att råkas! Jag är...',
		HeroDesc: 'Jag brinner för att skapa användbara, tillgängliga och snygga appar och webbplatser.',
		HighlightedProjects: 'Utvalda projekt',
		Resume: 'CV',
		ScrollToSeeMore: 'Skrolla för att se mer',
		HeroGuide: 'Forsätter du skrolla kan du se några utvalda projekt. Om [n]',
		CardView: 'Kort',
		CVLink: '../CV Christoffer Billman.pdf'
	},{
		Name: 'EN',
		Home: 'Home',
		Projects: 'Projects',
		About: 'About',
		Contact: 'Contact',
		HeyThere: 'Hey there!',
		UnderConstructionText: 'This site is under construction 🛠️!\nEventually, it will be moved to christofferbillman.se and become my new portfolio.',
		ProjectsPreamle: 'I have participated and created projects as part of studies and in my spare time. A selection of these projects are previewed here.',
		List: 'List',
		Grid: 'Grid',
		Close: 'Close',
		Menu: 'Menu',
		BuiltWithReact: 'Built with React.',
		SourceCode: 'Source',
		FooterTagline: 'Made with love.',
		AllProjects: 'All projects',
		ReadMore: 'Read more',
		LinksAndResources: 'Links & Resources',
		ReduceMotion: 'Reduce motion',
		ReduceColor: 'Reduce color',
		ContactPreamble: 'I would love to share more about myself, and hear more about you! Get in touch!',
		Phone: 'Phone',
		Email: 'Email',
		BundleSize: 'Bundle size, this build:',
		ContactCTAText: "Reach out, and we'll grab a coffee!",
		NiceToMeet: 'Hi, nice to meet you! I am...',
		HeroDesc: '[placeholder]',
		HighlightedProjects: 'Highlighted Projects',
		Resume: 'Resume',
		ScrollToSeeMore: 'Scroll to see more',
		HeroGuide: undefined,
		CardView: 'Cards',
		CVLink: '../Resume Christoffer Billman.pdf'
	},
]