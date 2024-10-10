import './App.css'
import AnimatedBackground from './components/AnimatedBackground'
import GlassMaterial from './components/GlassMaterial'

function App() {
	return (
	<>
		<h1>Hey there!</h1>
		<p>As of now this is really just my personal playground. Eventually, this page will be moved to christofferbillman.se and become my new portfolio!</p>
		<GlassMaterial className='p-std'>
			<p>This glass material is so cool! I can't believe that gradient borders + border radius + transparency is possible!!!</p>
		</GlassMaterial>
		<AnimatedBackground/>
	</>
  )
}

export default App
