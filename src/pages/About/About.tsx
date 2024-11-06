import clsx from "clsx";
import Img from "../../components/common/Img";
import style from './About.module.css'
import Markdown from "../../components/Markdown";
import { aboutSE } from "../../data/aboutSE";
import FloatingContactLinks from "../../components/FloatingContactLinks";
import { useTranslation } from "../../contexts/TranslationContext";

export function About() {

	const [ translation ] = useTranslation()

	return (
	<>
		<div className={style.content}>
			<div className={style.firstContainer}>
				<h1>Hej, jag är<br/>Christoffer!</h1>
				<Img src='../img/me.webp' className={clsx(style.heroImg, style.fadeIn)}/>
			</div>
			<h2>TL;DR</h2>
			<ul>
				<li><p>💻 Duktig på webbutveckling</p></li>
				<li><p>🎓 Nyexaminerad civilingenjör inriktning Interaktion och Design</p></li>
				<li><p>🛠️ Söker nya möjligheter och utmaningar</p><p className={style.tinyText}>(kod för “anställ mig 🥺”)</p></li>
			</ul>
			<Markdown content={aboutSE.content}/>
		</div>

		<h1 style={{textAlign: 'center', marginTop: '20vh'}}>{translation.ContactCTAText}</h1>
		<FloatingContactLinks/>
	</>
	)
}