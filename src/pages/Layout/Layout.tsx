import { Outlet, useLocation } from "react-router-dom";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

import style from './Layout.module.css'
import ScrollToTop from "../../components/common/ScrollToTop";
import { useEffect } from "react";
import useAnimatedBackground from "../../contexts/AnimatedBackgroundContext";

export function Layout() {

	const animationController = useAnimatedBackground()
	const location = useLocation()

	// This effect is used to change the background color back to normal colors when navigating back from any page, with any method, e.g. navigate(-1) or by using the built-in browser buttons.
	// I wish there was a cleaner way to do this, based on an event rather than a side effect, but it does not seem that way.
	useEffect(() => {
		const numberOfSlashes = (location.pathname.match(/\//g)||[]).length
		if(numberOfSlashes == 1) animationController.restoreColors()
	},[animationController, location.pathname])

	return (
		<>
			<Menu />
			<div className={style.layout}>
				<Outlet />
			</div>
			<ScrollToTop />
			<Footer />
		</>
	)
}