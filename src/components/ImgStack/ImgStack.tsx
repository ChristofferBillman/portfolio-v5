import clsx from "clsx"
import style from './ImgStack.module.css'
import { Dispatch, SetStateAction, useState } from "react"
import GlassMaterial from "../common/GlassMaterial"
import Button from "../common/Button"
import Icon from "../common/Icon"

interface Props {
	srcs: string[]
	captions?: string[]
}

export function ImgStack({ srcs, captions }: Props) {

	const [isHovering, setIsHovering] = useState(false)
	const [selection, setSelection] = useState<number | null>(null)

	return (
		<div style={{ height: '800px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
			<div
				className={clsx(style.container, isHovering && style.hovered)}
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => setIsHovering(false)}
			>
				<>
					{srcs.map((src, i) => {
						return <ImgEl
							src={src}
							indexOf={i}
							selection={selection}
							setSelection={setSelection}
							totalLen={srcs.length}
							caption={captions && captions[i]}
						/>
					})}
					<StackIndicatior numImg={srcs.length}/>
				</>
			</div>
		</div>
	)
}

interface ImgElProps {
	src: string
	indexOf: number
	selection: number | null
	setSelection: Dispatch<SetStateAction<number | null>>
	totalLen: number
	caption: string | undefined
}
function ImgEl({ src, indexOf, selection, setSelection, totalLen, caption }: ImgElProps) {

	return (
		<div
			className={clsx(style.imgContainer, selection == indexOf && style.selected)}
		>
			<img
				src={src}
				className={style.img}
				onClick={() => {
					setSelection(indexOf)
				}}
			/>
			<div className={style.controls}>
				<Button
					className={style.closeBtn}
					leftSlot={<Icon name='chevron_left' />}
					onClick={() => {
						setSelection((((indexOf-1) % totalLen) + totalLen) % totalLen)
					}}
				/>

				<Button
					className={style.closeBtn}
					leftSlot={<Icon name='chevron_right' />}
					onClick={() => {
						setSelection((indexOf + 1) % totalLen)
					}}
				/>
				<Button
					type="white"
					className={style.closeBtn}
					leftSlot={<Icon name='close' />}
					onClick={() => {
						setSelection(null)
					}}
				/>
			</div>

			<GlassMaterial className={style.progress}>
				<p>{indexOf + 1} / {totalLen}</p>
			</GlassMaterial>

			{caption && 
				<GlassMaterial className={style.caption}>
					<p>{caption}</p>
				</GlassMaterial>
			}
		</div>
	)
}

function StackIndicatior({ numImg }: { numImg: number }) {
	return (
		<GlassMaterial className={style.indicator}>
			<p>{numImg}</p>
		</GlassMaterial>
	)
}