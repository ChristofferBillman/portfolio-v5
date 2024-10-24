import Circle from './Circle'
import style from '../components/AnimatedBackground/AnimatedBackground.module.css'
import getBrowser from './GetBrowser'

export default class AnimatedBackgroundController {
	circles: Circle[]
	root: HTMLElement | null = null
	circlesContainer: HTMLElement | null = null
	body: HTMLBodyElement
	defaultBodyColor: string
	reduceColors: boolean
	
	constructor(circles: Circle[], defaultBodyColor: string) {
		this.circles = circles
		this.reduceColors = false
		this.defaultBodyColor = defaultBodyColor
		this.body = document.getElementsByTagName('body')[0]
		// Added after App.css is loaded so that margin reset doesn't transition on page load.
		this.body.style.background = defaultBodyColor
		this.body.style.transitionProperty = 'background'
		this.body.style.transitionDuration = '10s'
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
		if(this.reduceColors) return
		this.triggerDramatic()
		this.forAllCircles((circle, index) => {
			circle.setColor(colors[index % colors.length])
		})

		this.setBodyTransitionDurationWithTimeout(2000)
		this.body.style.background = colors[0]
	}

	restoreDefaultColors(ignoreReduceColors?: boolean) {
		if(!ignoreReduceColors && this.reduceColors) return
		this.triggerDramatic()
		this.forAllCircles(circle => {
			circle.restoreColor()
		})
		this.setBodyTransitionDurationWithTimeout(2000)
		this.body.style.background = this.defaultBodyColor
	}

	movePseudoRandomly() {
		this.forAllCircles(circle => {
			circle.movePseudoRandomly()
		})
	}

	setReduceColors(option: boolean) {
		if(option == true) this.setColors(['#39342C','#525252', '#525252'])
		if(option == false) this.restoreDefaultColors(true)
		this.reduceColors = option
	}

	attachToDom() {
		this.forAllCircles(circle => {
			if(!this.circlesContainer) throw new Error('Tried to attatch circles to DOM, even if animation root has not been set.')
			circle.attachToDom()
		})
	}
	detatchFromDom() {
		this.forAllCircles(circle => {
			if(!this.circlesContainer) throw new Error('Tried to detatch circles to DOM, even if animation root has not been set.')
			circle.detatchFromDom()
		})
	}
	
	private forAllCircles(func: (circle: Circle, index: number) => void) {
		this.circles.forEach((circle, index) => func(circle, index))
	}

	private setBodyTransitionDurationWithTimeout(valueInMs: number) {
		setTimeout(() => this.body.style.transitionDuration = '10s', valueInMs)
		this.body.style.transitionDuration = valueInMs + 'ms'
	}

	setRoot(root: HTMLElement | null) {
		if(!root) throw new Error('Element with that ID was not found. Have you assigned that id to the element you want to be the animation background root?')
		this.root = root

		const grainLayer = document.createElement('div')
		grainLayer.classList.add(style.grain)
		this.root.appendChild(grainLayer)

		this.circlesContainer = document.createElement('div')
		this.circlesContainer.classList.add(style.animatedBackground)

		const filter = `
<svg xmlns="http://www.w3.org/2000/svg" height="0" style="display: block">
	<defs>
		<filter id="goo">
			<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
			<feBlend in="SourceGraphic" in2="goo" />
		</filter>
	</defs>
</svg>
`
		const filterEl = document.createElement('div')
		filterEl.innerHTML = filter

		// This effect works in Firefox, but is not hardware accelerated.
		// Does not work in Safari.
		if(getBrowser() == 'Chrome') {
			this.root.appendChild(filterEl)
		}

		this.root.appendChild(this.circlesContainer)

		this.forAllCircles(circle => {
			circle.setRoot(this.circlesContainer)
			circle.attachToDom()
		})
	}

	detatchRoot() {
		if(!this.root) throw new Error('Cannot clear root if root has not been set.')
		this.root.innerHTML = ''
	}
}