import clsx from "clsx"
import style from './ImgStack.module.css'
import { Dispatch, SetStateAction, useState } from "react"
import GlassMaterial from "../common/GlassMaterial"
import Button from "../common/Button"
import Icon from "../common/Icon"
import isMobile from "../../util/IsMobile"
import Img from "../common/Img"

interface Props {
	srcs: string[]
	captions?: string[]
}

export function ImgStack({ srcs, captions }: Props) {

	const [isHovering, setIsHovering] = useState(false)
	const [selection, setSelection] = useState<number | null>(null)

	if(isMobile()) {
		return <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
		{srcs.map((src, i) => (
			<>
				<Img src={src}/>
				<span className='caption'>
					{captions && captions[i]}
				</span>
			</>
		))}
		</div>
	}

	return (
		<div style={{ height: '400px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
					<StackIndicatior
						numImg={srcs.length}
						isHovering={isHovering}
						selection={selection}
						setSelection={setSelection}
						len={srcs.length}
					/>
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
					type="dark"
					className={style.closeBtn}
					leftSlot={<Icon name='chevron_left' />}
					onClick={() => {
						setSelection((((indexOf-1) % totalLen) + totalLen) % totalLen)
					}}
				/>

				<Button
					type="dark"
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

			<GlassMaterial className={style.progress} dark>
				<p>{indexOf + 1} / {totalLen}</p>
			</GlassMaterial>

			{caption && 
				<GlassMaterial className={style.caption} dark>
					<p>{caption}</p>
				</GlassMaterial>
			}
		</div>
	)
}

function StackIndicatior({ numImg, isHovering, selection, setSelection, len }: { numImg: number, isHovering: boolean, selection: number | null, setSelection: Dispatch<SetStateAction<number | null>>, len: number }) {
	return (
		<GlassMaterial
			dark
			className={clsx(style.indicator, ((len <= 3 && isHovering) || selection != null) && style.hideIndicator)}
			onClick={() => setSelection(3)}
		>
			<p>{isHovering ? '+' + (numImg - 3) : numImg}</p>
		</GlassMaterial>
	)
}