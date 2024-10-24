import GlassMaterial from '../GlassMaterial'
import style from './Toggle.module.css'

interface Props {
	toggled: boolean
	setToggled: (toggled: boolean) => void
	text?: string
}

export function Toggle({toggled, setToggled, text = ''}: Props) {
	return (
		<div className={style.container}>
			<GlassMaterial baseElement='label' className={style.toggle}>
				<input
					type="checkbox"
					onChange={() => setToggled(!toggled)}
				/>
				<span className={style.slider}/>
			</GlassMaterial>
			<label>{text}</label>	
		</div>
	)
}