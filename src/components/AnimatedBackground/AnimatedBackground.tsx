import { useEffect } from "react"
import useAnimatedBackground from "../../contexts/AnimatedBackgroundContext"
import style from './AnimatedBackground.module.css'

export function AnimatedBackground() {

	const animationController = useAnimatedBackground()

	useEffect(() => {
		animationController.initGradient('#animatedbgroot')
		return () => animationController.disconnect()
	}, [animationController])

	return <div className={style.grain}>
		<canvas id='animatedbgroot' className={style.animatedBackground}/>
		</div>
}