import { useState } from "react"
import style from './Img.module.css'
import clsx from "clsx"

type Props = React.HTMLProps<HTMLImageElement>

export function Img({src, ...props}: Props ) {

	const [isLoaded, setIsLoaded] = useState(false)

	return (
		<div
			className={clsx(!isLoaded && style.loader, props.className)}
			style={props.style}
		>
			<img
				{...props}
				src={src}
				onLoad={() => setIsLoaded(true)}
				style={{...props.style, opacity: isLoaded ? 1 : 0, display: 'block' }}
			/>
		</div>
	)
}