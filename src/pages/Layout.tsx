import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";

export default function Layout() {
	return (
	<>
		<Menu/>
		<div style={{padding: '4rem 1rem 1rem 1rem'}}>
			<Outlet/>
		</div>
	</>
	)
}