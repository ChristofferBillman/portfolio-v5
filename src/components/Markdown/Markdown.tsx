import { createElement, ReactNode } from "react"
import APP_CONFIG from '../../../AppConfig'
import Img from "../common/Img"

interface Props {
	content: string
}

export function Markdown({content}: Props) {
	return parse(content)
}

// This is by no means a real parser, but a quick and easy solution to handle the sunnyday scenario.
function parse(content: string): ReactNode {
	const elements: ReactNode[] = []

	const lines = content.split(/\r?\n|\r|\n/g)

	lines.forEach(line => {
		const trimmed = line.trim()
		if(line.length == 0) return whitespace()
		if(trimmed[0] == '#') return h(trimmed)
		if(trimmed[0] == '!') return img(trimmed)
		return p(trimmed)
	})
	return elements

	function h(line: string) {
		// Find first occurence of space. The index of that space is the header level.
		let headerLevel = line.indexOf(' ')
		if(headerLevel > 6) headerLevel = 6

		const content = line.substring(headerLevel)

		elements.push(createElement(`h${headerLevel}`, undefined, content))
	}

	function p(line: string) {
		elements.push(createElement('p', {className: 'increasedLinespace'}, line))
	}

	function whitespace() {
		elements.push(<br/>)
	}

	function img(line: string) {
		// ![Alttext](./public/img/chare/Hero.png "This is the caption")
		expectEqual(line[1], '[')
		const altEnd = line.indexOf(']', 1)
		const alt = line.substring(2, altEnd)
		const srcEnd = line.indexOf('"', altEnd) - 1
		const src = line.substring(altEnd + 2, srcEnd) + APP_CONFIG.IMG_FILEEXTENSION
		const caption = line.substring(srcEnd + 2, line.indexOf('"',srcEnd + 2))

		elements.push(
			<Img
				src={src}
				alt={alt}
				style={{maxHeight: '130vh', objectFit: 'cover'}}
			/>)

		elements.push(<span className='caption'>{caption}</span>)
	}

	function expectEqual(char: string, char2: string) {
		if(char != char2) throw new Error('Markdown parse error.')
	}
}