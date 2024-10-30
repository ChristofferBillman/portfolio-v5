import './App.css'
import AnimatedBackground from './components/AnimatedBackground'
import { AnimatedBackgroundProvider } from './contexts/AnimatedBackgroundContext'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Playground from './pages/Playground'
import Error from './pages/Error'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import ProjectPage from './pages/ProjectPage'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import TranslationProvider from './contexts/TranslationContext'
import UnderConstruction from './pages/UnderConstruction'

const errorElement = <Error/>
const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout/>,
		children: [
			{
				path: '/',
				element: <UnderConstruction/>,
				errorElement
			},
			{
				path: '/landing',
				element: <Home/>,
				errorElement
			},
			{
				path: '/projects',
				element: <Projects/>,
				errorElement,
			},
			{
				path: '/projects/:name',
				element: <ProjectPage/>,
				errorElement
			},
			{
				path: '/about',
				element: <About/>,
				errorElement
			},
			{
				path: '/contact',
				element: <Contact/>,
				errorElement
			},
			{
				path: '/playground',
				element: <Playground/>,
				errorElement
			}
		]
	}
])

function App() {
	return (
	<AnimatedBackgroundProvider>
		<TranslationProvider>
			<RouterProvider router={router}/>
		</TranslationProvider>
		<AnimatedBackground/>
	</AnimatedBackgroundProvider>
)
}

export default App
