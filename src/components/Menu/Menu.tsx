import { forwardRef, ReactNode, ForwardedRef, useEffect, useLayoutEffect, useRef, useState } from "react";
import SliderSelector from "../common/SliderSelector";

import style from './Menu.module.css'
import Icon from "../common/Icon";
import GlassMaterial from "../common/GlassMaterial";
import useOutsideClick from "../../hooks/useOutsideClick";
import Button from "../common/Button";
import { useLocation, useNavigate } from "react-router-dom";
import TransitionLifecycle from "../TransitionLifecycle";
import isMobile from "../../util/IsMobile";

export function Menu() {

	const navigate = useNavigate()
	const location = useLocation()

	const [selectedItem, setSelection] = useState('Home')
	const [open, setOpen] = useState(false)

	useEffect(() => {
		setSelection(location.pathname)
	}, [location])

	const menuItemsRef = useRef<HTMLDivElement>(null)
	const menuRef = useRef<HTMLDivElement>(null)
	const menuContentRef = useRef<HTMLDivElement>(null)

	// This code is also crazy, but nessecary, since menu items are only mounted by TransitionContent AFTER the first render cycle.
	useLayoutEffect(() => {
		const menuItems = menuItemsRef.current
		const menu = menuRef.current
		const menuContent = menuContentRef.current

		if (!menuItems || !menu || !menuContent) return
		const resizeObserver = new ResizeObserver(() => {
			menu.style.width = menuItems.offsetWidth + 'px'
			menuContent.style.width = menuItems.offsetWidth + 'px'
		})

		// When menuItemsRef width is updated, run the code to set the container to that width too.
		resizeObserver.observe(menuItemsRef.current)

		// Cleanup
		return () => resizeObserver.disconnect()
	}, [])

	useOutsideClick(() => setOpen(false), [menuRef, menuItemsRef, menuContentRef])

	return (
		<>
			<GlassMaterial
				className={`${style.menuWrapper} ${open ? style.open : ''}`}
				ref={menuRef}
			/>
				{/* Having opacity be 0 at initial render apperently makes safari skip applying the backdrop-filter - which makes my life difficult. But only sometimes like what??  */}
				<ContentTransition
					ref={menuItemsRef}
					className={style.menuItemsWrapper}
					willRender={!isMobile() || open}
				>
					<SliderSelector
						items={[
							{ text: 'Home', icon: 'home', value: '/' },
							{ text: 'Projects', icon: 'landscape', value: '/projects' },
							{ text: 'About', icon: 'person', value: '/about' },
							{ text: 'Contact', icon: 'forum', value: '/contact' }
						]}
						selectedValue={selectedItem}
						setSelection={item => {
							setSelection(item)
							navigate(item.toString())
							setOpen(false)
						}}
						className={style.slider}
						wrapper='div'
						direction={isMobile() ? 'vertical' : 'horizontal'}
					/>
					<MenuButton onClick={() => setOpen(!open)} open={open} />
				</ContentTransition>

			<ContentTransition
				className={`${style.menuContents}`}
				ref={menuContentRef}
				willRender={open}
			>
				<div className={style.line}/>
				<div className={style.projectsContainer}>
					<div className={style.col}>
						<p>Highlighted projects</p>
						<a>Placeholder 1</a>
						<a>Placeholder 2</a>
						<a>Placeholder 3</a>
					</div>
					<div className={style.col}>
						<p>Links & resources</p>
						<a>GitHub</a>
						<a>LinkedIn</a>
						<a>Resume <Icon name='download'/></a>
					</div>
				</div>
				<div className={style.line}/>
				<div className={style.controlsContainer}>
					<Button
						text="Playground"
						onClick={() => {
							navigate('/playground')
							setOpen(false)
						}}
						leftSlot={<Icon name='toys'/>}
					/>
				</div>
			</ContentTransition>
		</>
	)
}

interface ButtonProps {
	onClick: () => void
	open: boolean
}

function MenuButton({ onClick, open }: ButtonProps) {
	return (
		<button className={style.menuButton} onClick={onClick}>
			<Icon name={open ? 'close' : 'more_horiz'} color="black" size="0.75rem" />
			<a style={{ color: 'black' }}>{open ? 'Close' : 'Menu'}</a>
		</button>
	)
}

interface ContentTransitionProps {
	willRender: boolean
	children: ReactNode
	className?: string
}
const ContentTransition = forwardRef(({willRender, children, className = ''}: ContentTransitionProps, ref: ForwardedRef<HTMLDivElement>) => {
	return (
		<TransitionLifecycle
			ref={ref}
			willRender={willRender}
			className={className}
			transition={{
				initial: { opacity: 0},
				transition: { opacity: 1},
				exit: { opacity: 0},
				duration: 500
			}}
		>
			{children}
		</TransitionLifecycle>
	)
})