import { useEffect } from "react"
import useAnimatedBackground from "../../contexts/AnimatedBackgroundContext"
import style from './AnimatedBackground.module.css'

export function AnimatedBackground() {

	const animationController = useAnimatedBackground()

	useEffect(() => {
		animationController.initGradient('#animatedbgroot')
		return () => animationController.disconnect()
	}, [animationController])

	return <canvas id='animatedbgroot' className={style.animatedBackground}/>
}