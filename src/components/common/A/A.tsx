import Icon from "../Icon"
import style from './A.module.css'

interface Props {
	href: string
	iconName?: string
	text: string
}

export function A({href, iconName, text}: Props) {
	return (
		<a
			href={href}
			target='_blank'
			className={style.link}
		>
			<span>{text}</span>
			{iconName && <Icon name={iconName}/>}
		</a>
	)
}