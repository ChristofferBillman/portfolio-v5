import { useTranslation } from "../../contexts/TranslationContext";
import GlassMaterial from "../common/GlassMaterial";
import style from './Footer.module.css'

export function Footer() {

	const [ translation ] = useTranslation()

	return (
	<GlassMaterial className={style.footer}>
		<div>
			<h2>Christoffer<br/>Billman</h2>
			<p>(c) Christoffer Billman 2024.<br/>{translation.FooterTagline}</p>
		</div>
		<p>{translation.BuiltWithReact} <a href='https://github.com/ChristofferBillman/portfolio/'>{translation.SourceCode}</a><br/>Version 0.0.0</p>
	</GlassMaterial>)
}