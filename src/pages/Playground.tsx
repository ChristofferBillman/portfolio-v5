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
			<div style={{display: 'flex', gap: '1rem'}}>
			<Button
				onClick={() => {
					animationController.setColors(['#C91010', '#CE522D'])
				}}
				text='Make me red!'
			/>
			<Button
				onClick={() => {
					animationController.setColors(['#18C754', '#096423', '#99B916'])
				}}
				text='Make me green!'
			/>
			<Button
				onClick={() => {
					animationController.setColors(['#161616', '#353535', '#0A0A0A'])
				}}
				text='Make me black!'
			/>
			<Button
				onClick={() => {
					animationController.setColors(['#2BA1FC','#84B2C0','#0D5473','#1980FF','#10ADC9'])
				}}
				text='Make me blue!'
			/>

			<Button
				onClick={() => {
					animationController.restoreDefaultColors()
				}}
				text='Restore defaults'
			/>
			</div>
		</>
	)
}