import './App.css'
import AnimatedBackground from './components/AnimatedBackground'
import { AnimatedBackgroundProvider } from './contexts/AnimatedBackgroundContext'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Playground from './pages/Playground'
import Error from './pages/Error'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import ProjectPage from './pages/ProjectPage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout/>,
		errorElement: <Error/>,
		children: [
			{
				path: '/',
				element: <Home/>,
			},
			{
				path: '/playground',
				element: <Playground/>,
			},
			{
				path: '/projects/:name',
				element: <ProjectPage/>,
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
