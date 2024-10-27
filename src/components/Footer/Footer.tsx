import { useNavigate } from "react-router-dom";
import { useTranslation } from "../../contexts/TranslationContext";
import A from "../common/A";
import Button from "../common/Button";
import GlassMaterial from "../common/GlassMaterial";
import Icon from "../common/Icon";
import style from './Footer.module.css'

import bundleSizes from '../../../public/bundlesize.json'

export function Footer() {

	const [translation] = useTranslation()
	const navigate = useNavigate()

	return (
		<GlassMaterial className={style.footer}>
			<div className={style.content}>
				<div className={style.leftContent}>
					<div className={style.infoContainer}>
						<h2>Christoffer<br />Billman</h2>
						<p>(c) Christoffer Billman 2024.<br />{translation.FooterTagline}</p>
					</div>
					<div className={style.infoContainer}>
						<p className={style.bwr}>
							{translation.BuiltWithReact + ' '}
							<A
								text={translation.SourceCode}
								href='https://github.com/ChristofferBillman/portfolio/'
								iconName='arrow_outward'
							/>
							<br />
							<strong>This build:</strong>
							<br />
							{bundleSizes.originalSize} uncompressed
							<br />
							{bundleSizes.gzippedSize} gzipped
						</p>
						
						<Button
							text="Playground"
							onClick={() => {
								navigate('/playground')
							}}
							leftSlot={<Icon name='toys' />}
						/>
					</div>
				</div>

				<div className={style.rightContent}>
					<div className={style.infoContainer}>
						<h3>{translation.Contact}</h3>
						<p>+46 07 577 22 97</p>
						<p>christoffer.billman@gmail.com</p>
					</div>
					<div className={style.infoContainer}>
						<h3>{translation.LinksAndResources}</h3>
						<A
							text='LinkedIn'
							href="https://www.linkedin.com/in/christoffer-billman-840029212"
							iconName="arrow_outward"
						/>
						<A
							text='GitHub'
							href="https://github.com/ChristofferBillman"
							iconName="arrow_outward"
						/>
					</div>
				</div>
			</div>
		</GlassMaterial>)
}