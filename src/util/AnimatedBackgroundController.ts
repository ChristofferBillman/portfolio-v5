import Circle from './Circle'
import style from '../components/AnimatedBackground/AnimatedBackground.module.css'

export default class AnimatedBackgroundController {
	circles: Circle[]
	root: HTMLElement | null = null
	circlesContainer: HTMLElement | null = null
	body: HTMLBodyElement
	
	constructor(circles: Circle[]) {
		this.circles = circles
		this.body = document.getElementsByTagName('body')[0]
	}

	reflectCircles() {	
		this.forAllCircles(circle => {
			circle.setTransitionDurationWithTimeout(1000)
			circle.reflectPosition()
		})
	}

	triggerDramatic() {
		this.reflectCircles()
		this.forAllCircles(circle => {
			circle.changeSizePseudoRandomly()
		})
		this.setColors(['#22E552','#0B6B23','#55CC5E','#39B916','#99B916'])
		setTimeout(() => this.restoreDefaultColors(), 5000)
	}

	setColors(colors: string[]) {
		this.forAllCircles((circle, index) => {
			circle.setColor(colors[this.circles.length % index])
		})
		
		this.body.style.transitionDuration = '2s'
		const prevBgColor = this.body.style.background
		this.body.style.background = colors[0]
		setTimeout(() => {
			this.body.style.transitionDuration = '10s'
			this.body.style.background = prevBgColor
		}, 2000)
	}

	restoreDefaultColors() {
		this.forAllCircles(circle => {
			circle.restoreColor()
		})
	}

	movePseudoRandomly() {
		this.forAllCircles(circle => {
			circle.movePseudoRandomly()
		})
	}

	attachToDom() {
		this.forAllCircles(circle => {
			if(!this.circlesContainer) throw new Error('Tried to attatch circles to DOM, even if animation root has not been set.')
			circle.attachToDom(this.circlesContainer)
		})
	}
	
	private forAllCircles(func: (circle: Circle, index: number) => void) {
		this.circles.forEach((circle, index) => func(circle, index))
	}

	setRoot(root: HTMLElement | null) {
		if(!root) throw new Error('Element with that ID was not found. Have you assigned that id to the element you want to be the animation background root?')
		this.root = root

		const grainLayer = document.createElement('div')
		grainLayer.classList.add(style.grain)
		this.root.appendChild(grainLayer)

		this.circlesContainer = document.createElement('div')
		this.circlesContainer.classList.add(style.animatedBackground)
		this.circlesContainer.style.filter = `blur(${window.innerWidth/8}px)`
		this.root.appendChild(this.circlesContainer)
	}

	removeRoot() {
		if(!this.root) throw new Error('Cannot clear root if root has not been set.')
		this.root.innerHTML = ''
	}
}