import Button from "../components/Button"
import GlassMaterial from "../components/GlassMaterial"
import useAnimatedBackground from "../contexts/AnimatedBackgroundContext"

export default function Playground() {

	const animationController = useAnimatedBackground()
	if (!animationController) throw new Error("Used outside context,.")

	return (
		<>
			<h1>Hey there!</h1>
			<p>As of now this is really just my personal playground. Eventually, this page will be moved to christofferbillman.se and become my new portfolio!</p>
			<GlassMaterial className='p-std'>
				<p>This glass material is so cool! I can't believe that gradient borders + border radius + transparency is possible!!!</p>
			</GlassMaterial>
			<div style={{margin: '1rem'}}/>
			<Button
				onClick={() => {
					animationController.triggerDramatic()
				}}
				text='Trigger dramatic change'
			/>
		</>
	)
}