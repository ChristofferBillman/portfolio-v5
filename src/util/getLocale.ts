export default function getLocale() {
	const locale = navigator.language

	if (locale === 'en-US') return 'EN'
	if (locale === 'sv-SE') return 'SE'
	return 'EN'
}