import style from '../components/AnimatedBackground/AnimatedBackground.module.css'
import Position from './Position'

export default class Circle {
	element: HTMLDivElement
	defaultColor: string
	
	constructor(size: number, color: string, position: Position) {
		this.element = document.createElement('div')
		this.element.classList.add(style.circle)
		this.setSize(size)
		this.setColor(color)
		this.defaultColor = color
		this.setPosition(position)
	}

	attachToDom(root: HTMLElement) {
		root.appendChild(this.element)
	}

	setTransitionDurationWithTimeout(valueInMs: number) {
		setTimeout(() => this.element.style.transitionDuration = '10s', valueInMs)
		this.element.style.transitionDuration = valueInMs + 'ms'
	}

	setPosition(pos: Position) {
		this.element.style.left = `${pos.x}px`
		this.element.style.top = `${pos.y}px`
	}

	setColor(color: string) {
		this.element.style.backgroundColor = color
	}

	restoreColor() {
		this.element.style.backgroundColor = this.defaultColor
	}

	setSize(size: number) {
		this.element.style.height = size + 'px'
		this.element.style.width = size + 'px'
	}

	movePseudoRandomly() {
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
		if(reduceMotion) return

		const viewportWidth = window.innerWidth
		const viewportHeight = window.innerHeight

		const maxX = viewportWidth - this.element.offsetWidth + viewportWidth/2
		const maxY = viewportHeight - this.element.offsetHeight + viewportHeight/2

		const randomX = Math.floor(Math.random() * maxX)
		const randomY = Math.floor(Math.random() * maxY)

		this.setPosition({x: randomX, y: randomY})
	}

	changeSizePseudoRandomly() {
		const viewportWidth = window.innerWidth

		const size = Math.floor(Math.random() > 0.5 ? this.element.offsetWidth + viewportWidth/3 : this.element.offsetWidth - viewportWidth/3)

		this.setSize(size)
	}

	getReflectedPosition(element: HTMLDivElement) {
		const x = window.innerWidth - (element.offsetLeft + element.offsetWidth / 2)
		const y = window.innerHeight - (element.offsetTop + element.offsetHeight / 2)
		return {x, y}
	}

	reflectPosition() {
		this.setPosition(this.getReflectedPosition(this.element))
	}
}