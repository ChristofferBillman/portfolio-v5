import Icon from "../Icon"
import style from './A.module.css'

interface Props {
	href: string
	iconName?: string
	text: string
	target?: string
}

export function A({href, iconName, text, target = '_blank'}: Props) {
	return (
		<a
			href={href}
			target={target}
			className={style.link}
		>
			<span>{text}</span>
			{iconName && <Icon name={iconName}/>}
		</a>
	)
}