import Icon from "../Icon"
import style from './A.module.css'

interface Props {
	href?: string
	iconName?: string
	text: string
	target?: string
	onClick?: () => void
}

export function A({href, iconName, text, target = '_blank', onClick}: Props) {
	return (
		<a
			href={!onClick ? href : undefined}
			target={!onClick ? target : '_self'}
			className={style.link}
			onClick={!href ? onClick : undefined}
		>
			<span>{text}</span>
			{iconName && <Icon name={iconName}/>}
		</a>
	)
}