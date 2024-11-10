import { createElement, ReactNode } from "react"
import APP_CONFIG from '../../../AppConfig'
import Img from "../common/Img"
import ImgStack from "../ImgStack"

interface Props {
	content: string
}

export function Markdown({content}: Props) {
	return constructNodes(bunchImgsIntoStacks(parse(content)))
}

// This is by no means a real parser, but a quick and easy solution to handle the sunnyday scenario.
function parse(content: string): ElType[] {
	const elements: ElType[] = []

	const lines = content.split(/\r?\n|\r|\n/g)

	lines.forEach((line, i) => {
		const trimmed = line.trim()
		if(line.length == 0) return whitespace(i)
		if(trimmed.length == 0) return whitespace(i)
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

		elements.push({type: 'h', headerLevel, text: content, key: getFirst16(content)})
	}

	function p(line: string) {
		elements.push({type: 'p', text: line, key: getFirst16(line)})
	}

	function whitespace(key: number) {
		elements.push({type: 'whitespace', key: 'whitespace' + key})
	}

	function img(line: string) {
		// ![Alttext](./public/img/chare/Hero.png "This is the caption")
		expectEqual(line[1], '[')
		const altEnd = line.indexOf(']', 1)
		const alt = line.substring(2, altEnd)
		const srcEnd = line.indexOf('"', altEnd) - 1
		const src = line.substring(altEnd + 2, srcEnd) + (line.includes('.svg') ? '' : APP_CONFIG.IMG_FILEEXTENSION)
		const caption = line.substring(srcEnd + 2, line.indexOf('"',srcEnd + 2))

		elements.push({
			type: 'img',
			src,
			alt,
			key: getFirst16(line),
			caption,
			captionCentered: line.includes('[centercaption]')
		})
	}

	function expectEqual(char: string, char2: string) {
		if(char != char2) throw new Error('Markdown parse error.')
	}
}

interface ImgType {
	src: string
	alt: string
	key: string
	caption: string
	captionCentered: boolean
	type: 'img'
}

interface StackType {
	type: 'stack'
	srcs: string[]
	captions: string[]
}

interface HeadingType {
	text: string
	headerLevel: number
	key: string
	type: 'h'
}

interface ParagraphType {
	text: string
	key: string
	type: 'p'
}

interface WhitespaceType {
	key: string
	type: 'whitespace'
}

type ElType = ImgType | HeadingType | ParagraphType | WhitespaceType | StackType

function constructNodes(ets: ElType[]) {
	const elements: ReactNode[] = []

	for (const et of ets) {
		switch(et.type) {
			case 'stack':
				elements.push(
					<ImgStack
						srcs={et.srcs}
						captions={et.captions}
					/>)
			break
			case 'img':
				elements.push(
				<Img
					src={et.src}
					alt={et.alt}
					style={{maxHeight: '130vh', objectFit: 'cover', marginBottom: '1rem'}}
					className='observe'
					key={et.key}
				/>)
				elements.push(
					<span
					className='caption'
					style={et.captionCentered ? {textAlign: 'center' } : undefined}
					key={et.key + '_cap'}
				>
					{et.caption}
				</span>)
			break

			case 'h': elements.push(
				createElement(`h${et.headerLevel}`, { key: et.key}, et.text))
			break

			case 'p':
				elements.push(
				<p
					className='projectP'
					key={et.key}
				>
					{et.text}
				</p>)
			break

			case "whitespace": elements.push(<br key={'whitespace' + et.key}/>)
			break
		}
	}
	return elements
}

function bunchImgsIntoStacks(ets: ElType[]) {
	return ets.reduce<ElType[]>((acc, el, index, array) => {
		const currentElementIsImg = el.type == 'img'
		const nextElementIsImg = index < array.length - 1 && array[index + 1].type == 'img'

		// If this element is not an img, its not supposed to be in a stack.
		if (!currentElementIsImg) {
			acc.push(el)
			return acc
		}

		const lastElement = acc[acc.length - 1]
		// If the prior element is a stack, and current element is an img, it should be included in that stack.
		if (lastElement?.type === 'stack') {
			lastElement.srcs.push(el.src)
			lastElement.captions.push(el.caption)
			return acc
		}

		// If current element is an img, and next one is too - create a stack containing the current element.
		if (nextElementIsImg) {
			acc.push({ type: 'stack', srcs: [el.src], captions: [el.caption] })
			return acc
		}

		// If there is only a single image.
		acc.push(el)

		return acc
	}, [])
}

function getFirst16(str: string) {
	return str//.substring(0,32)
}