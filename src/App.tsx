import './App.css'
import AnimatedBackground from './components/AnimatedBackground'
import { AnimatedBackgroundProvider } from './contexts/AnimatedBackgroundContext'
import Playground from './pages/Playground'

function App() {
	return (
	<AnimatedBackgroundProvider>
		<Playground/>
		<AnimatedBackground/>
	</AnimatedBackgroundProvider>
)
}

export default App
