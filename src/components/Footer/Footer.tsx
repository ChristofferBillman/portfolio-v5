import { useTranslation } from "../../contexts/TranslationContext";
import A from "../common/A";
import GlassMaterial from "../common/GlassMaterial";
import style from './Footer.module.css'

export function Footer() {

	const [translation] = useTranslation()

	return (
		<GlassMaterial className={style.footer}>
			<div className={style.content}>
				<div className={style.leftContent}>
					<div className={style.infoContainer}>
						<h2>Christoffer<br />Billman</h2>
						<p>(c) Christoffer Billman 2024.<br />{translation.FooterTagline}</p>
					</div>
					<div className={style.infoContainer}>
						<p>{translation.BuiltWithReact} <A href='https://github.com/ChristofferBillman/portfolio/'>{translation.SourceCode}.</A><br />Version 0.0.0</p>
					</div>
				</div>

				<div className={style.rightContent}>
					<div className={style.infoContainer}>
						<h3>{translation.Contact}</h3>
						<p>+46 07 577 22 97</p>
						<p>christoffer.billman@gmail.com</p>
					</div>
					<div className={style.infoContainer}>
						<h3>{translation.LinksAndResources}</h3>
						<A href="https://www.linkedin.com/in/christoffer-billman-840029212">LinkedIn</A>
						<A href="https://github.com/ChristofferBillman">GitHub</A>
					</div>
				</div>
			</div>
		</GlassMaterial>)
}