export default interface Project {
	name: string
	title: string
	thumbnail: string
	colors: string[]
	content: string
	position: number
	resources?: Resource[]
}

export interface Resource {
	type: 'webpage' | 'pdf' | 'figma' | 'code'
	text: string
	href: string
}