import { useEffect } from 'react'
import useAnimatedBackground from '../../contexts/AnimatedBackgroundContext'

export function AnimatedBackground() {

	const animationController = useAnimatedBackground()

	useEffect(() => {
		animationController.setRoot(document.getElementById('animatedbgroot'))
	
		animationController.attachToDom()
		animationController.movePseudoRandomly()
		const interval = setInterval(() => animationController.movePseudoRandomly(), 10000)

		return () => {
			clearInterval(interval)
			animationController.detatchRoot()
		}
	}, [animationController])

	return <div id='animatedbgroot'/>
}