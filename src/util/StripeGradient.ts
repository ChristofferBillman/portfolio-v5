import { Gradient, normalizeColor } from './Gradient.js'

export default class StripeGradient {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	gradient: any
	
	constructor() {
		this.gradient = new Gradient()
	}

	initGradient(elementSelector: string) {
		this.gradient.initGradient(elementSelector)
		this.gradient.amp = 0
	}

	setColors(colors: string[]) {
		this.gradient.sectionColors = colors.map(hexToNumber).map(normalizeColor)
		this.gradient.initMesh()
		this.gradient.resize()
	}
	restoreColors() {
		const colors = ['#185eb5', '#4D9BF9', '#AD3EC2', '#b7006e']
		this.setColors(colors)
	}
	disconnect() {
		this.gradient.disconnect()
	}
}

function hexToNumber(hex: string) {
	// Remove "#" if it exists and convert the hex string to a number
	return `0x${hex.substr(1)}`
  }