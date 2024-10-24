import { useState } from "react"
import style from './Img.module.css'

type Props = React.HTMLProps<HTMLImageElement>

export function Img({src, ...props}: Props ) {

	const [isLoaded, setIsLoaded] = useState(false)

	return (
		<div className={`${isLoaded ? '' : style.loader} ${props.className}`} style={props.style}>	
			<img
				{...props}
				src={src}
				onLoad={() => setIsLoaded(true)}
				style={{opacity: isLoaded ? 1 : 0, width: '100%', height: '100%'}}
			/>
		</div>
	)
}