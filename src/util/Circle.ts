import style from '../components/AnimatedBackground/AnimatedBackground.module.css'
import { hexToRgb } from './HexToRgb'
import Position from './Position'

export default class Circle {
	element: HTMLDivElement
	defaultColor: string
	scaleFactor: number
	root: HTMLElement | null = null
	position: Position
	
	constructor(initalScaleFactor: number, color: string, position: Position) {
		this.element = document.createElement('div')
		this.element.classList.add(style.circle)
		this.scaleFactor = initalScaleFactor
		this.setColor(color)
		this.position = position
		this.defaultColor = color
	}

	attachToDom() {
		if(!this.root) throw new Error('Circle: Tried to attatch before root was set.')
		this.root.appendChild(this.element)
	}
	detatchFromDom() {
		if(!this.root) throw new Error('Circle: Tried to detatch before root was set.')
		this.root.innerHTML = ''
	}

	setRoot(root: HTMLElement | null) {
		this.root = root
	}

	setTransitionDurationWithTimeout(valueInMs: number) {
		setTimeout(() => this.element.style.transitionDuration = '10s', valueInMs)
		this.element.style.transitionDuration = valueInMs + 'ms'
	}

	setPosition(pos: Position) {
		this.position = pos
		this.applyTransformations()
	}

	setColor(color: string) {
		this.element.style.background = `radial-gradient(circle at center, rgba(${hexToRgb(color)}, 0.8) 0, rgba(${hexToRgb(color)}, 0) 50%) no-repeat`
	}

	restoreColor() {
		this.setColor(this.defaultColor)
	}

	setScale(factor: number) {
		this.scaleFactor = factor
		this.applyTransformations()
	}

	movePseudoRandomly() {
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
		if(reduceMotion) return

		const body = document.body

		const bodyWidth = body.offsetWidth
		const vpHeight = window.innerWidth

		const scrollDistance = document.documentElement.scrollTop
		const randomX = Math.floor(Math.random() * bodyWidth)
		// Ensures that circles always move in towards where the user is scrolled.
		const randomY = Math.floor(scrollDistance + Math.random() * vpHeight)

		this.setPosition({x: randomX, y: randomY})
	}

	changeSizePseudoRandomly() {
		const scale = Math.random() > 0.5 ? 0.5 : 2
		this.setScale(scale)
	}

	getReflectedPosition(element: HTMLDivElement) {
		const x = window.innerWidth - (this.position.x + (element.offsetWidth * this.scaleFactor) / 2)
		const y = window.innerHeight - (this.position.y + (element.offsetHeight * this.scaleFactor) / 2)
		console.log({x,y})
		return {x, y}
	}

	reflectPosition() {
		this.setPosition({x: this.getReflectedPosition(this.element).x, y: this.position.y})
	}

	private applyTransformations() {
		this.element.style.transform = `translateX(${this.position.x}px) translateY(${this.position.y}px) scale(${this.scaleFactor})`
	}
}