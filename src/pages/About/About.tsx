import clsx from "clsx";
import Img from "../../components/common/Img";
import style from './About.module.css'
import Markdown from "../../components/Markdown";
import FloatingContactLinks from "../../components/FloatingContactLinks";
import { useTranslation } from "../../contexts/TranslationContext";

export function About() {

	const [translation] = useTranslation()

	return (
		<>
			<div className={style.content}>
				<div className={style.firstContainer}>
					<h1>{translation.HiImMe}</h1>
					<Img src='../img/me.webp' className={clsx(style.heroImg, style.fadeIn)} />
				</div>
				<h2>TL;DR</h2>
				<ul className={style.largeMargin}>
					<li><p>💻 {translation.GoodAtWebdev}</p></li>
					<li><p>🎓 {translation.NewlyGraduated}</p></li>
					<li><p>👨‍💻 {translation.EmploymentStatus}</p></li>{/*<p className={style.tinyText}>({translation.CodeForHireMe})</p></li>*/}
				</ul>
				<Markdown content={translation.AboutPost.content} />
			</div>

			<h1 style={{ textAlign: 'center', marginTop: '20vh' }}>{translation.ContactCTAText}</h1>
			<FloatingContactLinks />
		</>
	)
}