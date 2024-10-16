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

const errorElement = <Error/>
const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout/>,
		children: [
			{
				path: '/',
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
		<RouterProvider router={router}/>
		<AnimatedBackground/>
	</AnimatedBackgroundProvider>
)
}

export default App
