import { useState } from "react"
import Button from "../common/Button"
import GlassMaterial from "../common/GlassMaterial"
import Icon from "../common/Icon"
import style from './ContactCard.module.css'
import clsx from "clsx"

interface Props {
	title: string
	info: string
	img?: string
	href?: string[]
	copy?: boolean
	className?: string
}
export function ContactCard({ title, info, img, href, copy, className = '' }: Props) {

	const [icon, setIcon] = useState('content_copy')

	const bgStyle = icon == 'close' ? style.err : (icon == 'check' ? style.greenbg : '')

	let emailStyle = ''
	if(href && href.length > 0 && href[0].includes('mailto:')) emailStyle = style.emailText

	return (
		<GlassMaterial className={clsx(style.container, className)}>
			{img && <img src={img} />}
			<div className={style.textContainer}>
				<p>{title}</p>
				<p className={emailStyle}>{info}</p>
			</div>
			<div className={style.linksContainer}>
				{copy &&
					<Button
						type='white'
						className={bgStyle}
						onClick={() => {
							if(!navigator.clipboard) {
								setIcon('close')
								setTimeout(() => setIcon('content_copy'), 2000)
								return
							}
							navigator.clipboard.writeText(info)
								.then(() => setIcon('check'))
								.catch(() => setIcon('close'))
							setTimeout(() => setIcon('content_copy'), 2000)
						}}
						leftSlot={
							<Icon
								name={icon}
								className={style.icon}
							/>
						}
					/>
				}
				{href && href.length != 0 &&
					href.map(link => (
						<Button
							key={link}
							type='white'
							leftSlot={
								<Icon
									name={getHrefIcon(link)}
									className={style.icon}
								/>
							}
							onClick={() => window.open(link, '_blank')}
						/>
					))
				}
			</div>
		</GlassMaterial>
	)
}

function getHrefIcon(link: string) {
	if (link.includes('tel:')) return 'call'
	if (link.includes('sms:')) return 'sms'
	if (link.includes('mailto:')) return 'mail'
	return 'arrow_outward'
}