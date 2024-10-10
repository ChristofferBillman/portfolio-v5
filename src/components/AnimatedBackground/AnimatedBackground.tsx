import { useEffect } from 'react'
import style from './AnimatedBackground.module.css'

const colors = [
	'#4D9BF9','#AD3EC2','#FE0886','#6233EE','#6233EE'
]

const altColors = [
	'#22E552','#0B6B23','#55CC5E','#39B916','#99B916'
]

const viewportWidth = window.innerWidth
const viewportHeight = window.innerHeight

export function AnimatedBackground() {

	useEffect(() => {
		setCircleParams()
		const interval = setInterval(moveCirclesRandomly, 10000)

		return () => clearInterval(interval)
	})
	return (
		<div>
			<button onClick={() => {
				 performDramaticMovement()
				 setColors(altColors)
				 setTimeout(() => setColors(colors), 5000)
			}}>Trigger dramatic change</button>
			<div className={`${style.grain}`}/>
			<div className={`${style.animatedBackground}`} id='animatedbg'>
				<Circle />
			</div>
		</div>
	)
}

function Circle() {
	const numberOfCircles = [0,1,2,3,4]

	return (
	<>
		{numberOfCircles.map(val => (
			<div key={val} className={style.circle + ' circle'} />
		))}
	</>
	)
}

function getRandomPosition(element: HTMLDivElement): {x: number, y: number} {
	const maxX = viewportWidth - element.offsetWidth + viewportWidth/2
	const maxY = viewportHeight - element.offsetHeight + viewportHeight/2

	const randomX = Math.floor(Math.random() * maxX)
	const randomY = Math.floor(Math.random() * maxY)

	return { x: randomX, y: randomY }
}

function performDramaticMovement() {
	const circles = document.querySelectorAll<HTMLDivElement>('.circle')

	setTimeout(() => circles.forEach(circle => circle.style.transitionDuration = '10s'),2000)

	circles.forEach((circle: HTMLDivElement) => {
		circle.style.transitionDuration = '1000ms'
		setCirclePos(circle, getReflectedPosition(circle))
	})
}

function getReflectedPosition(element: HTMLDivElement) {
	const x = viewportWidth - (element.offsetLeft + element.offsetWidth / 2)
	const y = viewportHeight - (element.offsetTop + element.offsetHeight / 2)
	return {x, y}
}

function moveCirclesRandomly() {
	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

	if(reduceMotion) return

	const circles = document.querySelectorAll<HTMLDivElement>('.circle')
	circles.forEach((circle: HTMLDivElement) => {
		const pos = getRandomPosition(circle)
		setCirclePos(circle, pos)

		document.getElementsByTagName('body')[0].style.backgroundColor = colors[Math.floor(Math.random() * 4)]

		const size = Math.floor(Math.random() > 0.5 ? circle.offsetWidth + viewportWidth/3 : circle.offsetWidth - viewportWidth/3)
		circle.style.width = `${size}px`
		circle.style.height = `${size}px`
	})
}

function setColors(colors: string[]) {
	const circles = document.querySelectorAll<HTMLDivElement>('.circle')

	const body = document.getElementsByTagName('body')[0]
	body.style.transitionDuration = '2s'
	setTimeout(() => body.style.transitionDuration = '10s', 2000)
	body.style.backgroundColor = altColors[1]

	circles.forEach((circle, index) => {
		circle.style.backgroundColor = colors[index]
		
	})
}

function setCircleParams() {
	const circles = document.querySelectorAll<HTMLDivElement>('.circle')
	moveCirclesRandomly()
	const body = document.getElementsByTagName('body')[0]
	body.style.backgroundColor = colors[1]
	const bg = document.getElementById('animatedbg')
	bg!.style.filter = `blur(${viewportWidth/8}px)`
	circles.forEach((circle: HTMLDivElement, index) => {
		circle.style.backgroundColor = colors[index]
		const size = Math.floor(Math.random() * index * viewportWidth/2 + viewportWidth/2)
		circle.style.zIndex = String(circles.length - index)
		circle.style.width = `${size}px`
		circle.style.height = `${size}px`
	})
}

function setCirclePos(circle: HTMLDivElement, pos: {x: number, y: number}) {
	circle.style.left = `${pos.x}px`
	circle.style.top = `${pos.y}px`
}