import { Gradient, normalizeColor } from './Gradient.js'

export default class StripeGradient {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	gradient: any
	reduceColors: boolean = false
	paused: boolean = false
	
	constructor() {
		this.gradient = new Gradient()
	}
	play() {
		this.gradient.play()
		this.paused = false
	}
	pause() {
		this.gradient.pause()
		this.paused = true
	}
	setReduceColors(toggled: boolean) {
		if(toggled) {
			this.setColors(['#38342e','#38342e','#1c1a17','#38342e']) 
			this.play()
			setTimeout(() => this.pause(), 5000)
		}
		else {
			this.restoreColors(true)
			this.play()
			setTimeout(() => this.pause(), 5000)
		}
		this.reduceColors = toggled
	}

	initGradient(elementSelector: string) {
		this.gradient.initGradient(elementSelector)
		this.gradient.amp = 0
	}

	setColors(colors: string[]) {
		if(this.reduceColors) return

		this.gradient.sectionColors = colors.map(hexToNumber).map(normalizeColor)
		document.body.style.background = colors[0]
	}
	restoreColors(force?: boolean) {
		if(!force && this.reduceColors) return
		console.log('Restoring colors...')
		const colors = ['#185eb5', '#4D9BF9', '#AD3EC2', '#b7006e']
		this.gradient.sectionColors = colors.map(hexToNumber).map(normalizeColor)
		document.body.style.background = colors[0]
	}
	disconnect() {
		this.gradient.disconnect()
	}
}

function hexToNumber(hex: string) {
	// Remove "#" if it exists and convert the hex string to a number
	return `0x${hex.substr(1)}`
  }