import { ReactNode } from "react"
import Icon from "../Icon"

interface Props {
	href: string
	children: ReactNode
}

export function A({href, children}: Props) {
	return (
		<a
			href={href}
			target='_blank'
		>
			{children}
			<Icon name='open_in_new'/>
		</a>
	)
}