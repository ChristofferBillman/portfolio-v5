import { Outlet } from "react-router-dom";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

import style from './Layout.module.css'

export function Layout() {
	return (
	<>
		<Menu/>
		<div className={style.layout}>
			<Outlet/>
		</div>
		<Footer/>
	</>
	)
}