import GlassMaterial from "../common/GlassMaterial";
import style from './Footer.module.css'

export function Footer() {
	return (
	<GlassMaterial className={style.footer}>
		<div>
			<h2>Christoffer<br/>Billman</h2>
			<p>(c) Christoffer Billman 2024.<br/>Created with love.</p>
		</div>
		<p>Built with React. <a href='https://github.com/ChristofferBillman/portfolio/'>Source.</a><br/>Version 0.0.0</p>
	</GlassMaterial>)
}