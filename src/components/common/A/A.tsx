import Icon from "../Icon"

interface Props {
	href: string
	children: string
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