import Circle from './Circle'
import style from '../components/AnimatedBackground/AnimatedBackground.module.css'

export default class AnimatedBackgroundController {
	circles: Circle[]
	root: HTMLElement | null = null
	circlesContainer: HTMLElement | null = null
	body: HTMLBodyElement
	defaultBodyColor: string
	
	constructor(circles: Circle[], defaultBodyColor: string) {
		this.circles = circles
		this.defaultBodyColor = defaultBodyColor
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
	}

	setColors(colors: string[]) {
		this.triggerDramatic()
		this.forAllCircles((circle, index) => {
			circle.setColor(colors[index % colors.length])
		})

		this.body.style.transitionDuration = '2s'
		this.body.style.background = colors[0]

		setTimeout(() => {
			this.body.style.transitionDuration = '10s'
		}, 2000)
	}

	restoreDefaultColors() {
		this.triggerDramatic()
		this.forAllCircles(circle => {
			circle.restoreColor()
		})
		this.body.style.background = this.defaultBodyColor
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