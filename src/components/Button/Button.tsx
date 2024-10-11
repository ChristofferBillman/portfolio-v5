import GlassMaterial from '../GlassMaterial'
import style from './Button.module.css'

interface Props {
	text: string
	onClick?: () => void
}
export function Button({ text, onClick }: Props) {
	return (
		<GlassMaterial
			className={style.button}
			onClick={onClick}
		>
			<a className={style.link}>{text}</a>
		</GlassMaterial>
	)
}