import { forwardRef, ReactNode, ForwardedRef, useEffect, useLayoutEffect, useRef, useState, useCallback, SetStateAction, Dispatch } from "react";
import SliderSelector from "../common/SliderSelector";

import style from './Menu.module.css'
import Icon from "../common/Icon";
import GlassMaterial from "../common/GlassMaterial";
import useOutsideClick from "../../hooks/useOutsideClick";
import { useLocation, useNavigate } from "react-router-dom";
import TransitionLifecycle from "../TransitionLifecycle";
import isMobile from "../../util/IsMobile";
import { useTranslation } from "../../contexts/TranslationContext";
import useAnimatedBackground from "../../contexts/AnimatedBackgroundContext";
import Toggle from "../common/Toggle";
import useLocalStorage from "../../hooks/useLocalStorage";
import getLocale from "../../util/getLocale";
import A from "../common/A";
import clsx from "clsx";

export function Menu() {

	const navigate = useNavigate()
	const location = useLocation()
	const [translation, setTranslation] = useTranslation()

	const [selectedItem, setSelection] = useState('/')
	const [open, setOpen] = useState(false)

	const [reduceColors, setReduceColors] = useLocalStorage('reduce_colors', false)
	const [reduceMotion, setReduceMotion] = useLocalStorage('reduce_motion', false)
	const animationController = useAnimatedBackground()

	const [lang, setLang] = useState(getLocale())

	const [isMobileState, setIsMobileState] = useState(isMobile())

	const [menuVisible, setMenuVisible] = useState(false)

	useEffect(() => {
		setSelection(`/${location.pathname.split('/').slice(1, 2).join('')}`)
	}, [location])

	const menuItemsRef = useRef<HTMLDivElement>(null)
	const menuRef = useRef<HTMLDivElement>(null)
	const menuContentRef = useRef<HTMLDivElement>(null)
	const menuButtonRef = useRef<HTMLButtonElement>(null)

	const setMenuDimensions = useCallback(() => {
		const menuItems = menuItemsRef.current
		const menu = menuRef.current
		const menuContent = menuContentRef.current
		const menuButton = menuButtonRef.current

		if (!menuItems || !menu || !menuContent || !menuButton) return

		const padd = 10
		const newWidth = menuItems.offsetWidth + menuButton.offsetWidth
		menu.style.width = newWidth + padd + 'px'
		menuContent.style.width = newWidth + 'px'
		menuItems.style.marginRight = isMobileState ? '0' : menuButton.offsetWidth + padd + 'px'
	}, [isMobileState])

	// This code is also crazy, but nessecary, since menu items are only mounted by TransitionContent AFTER the first render cycle.
	useLayoutEffect(() => {
		const handleResize = () => {
			if (isMobile() != isMobileState) {
				setIsMobileState(isMobile())
			}
		}
		// When menuItemsRef width is updated, run the code to set the container to that width too.
		const menuItems = menuItemsRef.current
		if (!menuItems) return

		const resizeObserver = new ResizeObserver(setMenuDimensions)
		resizeObserver.observe(menuItems)

		window.addEventListener('resize', handleResize)

		// Cleanup
		return () => {
			resizeObserver.disconnect()
			window.removeEventListener('resize', handleResize)
		}
	}, [isMobileState, setMenuDimensions])

	useHiddenMenuUntilScroll(/*window.innerHeight * 2.3*/0, setMenuVisible)

	useEffect(() => {

		const intersectionCheck = () => {
			if (!menuRef.current) return

			// This DOM query runs every 500 ms, which is not perferable honestly.
			const elements = document.querySelectorAll('.observe')

			for (const element of elements) {
				if (isOverlapping(menuRef.current, element)) {
					menuRef.current.style.background = 'rgba(0,0,0,0.3)'
					return
				}
			}
			menuRef.current.style.background = 'rgba(255,255,255,0.2)';
		}

		const interval = setInterval(intersectionCheck, 500)

		return () => {
			clearInterval(interval)
		}
	}, [menuRef])

	useOutsideClick(() => setOpen(false), [menuRef, menuItemsRef, menuContentRef, menuButtonRef])

	return (
		<div style={{ opacity: menuVisible ? 1 : 0, transitionDuration: '500ms' }}>
			<GlassMaterial
				className={clsx(style.menuWrapper, open && style.open)}
				ref={menuRef}
			/>
			{/* Having opacity be 0 at initial render apperently makes safari skip applying the backdrop-filter - which makes my life difficult. But only sometimes like what??  */}
			<ContentTransition
				ref={menuItemsRef}
				className={style.menuItemsWrapper}
				willRender={!isMobileState || open}
			>
				<SliderSelector
					items={[
						{ text: translation.Home, icon: 'home', value: '/' },
						{ text: translation.Projects, icon: 'landscape', value: '/projects' },
						{ text: translation.About, icon: 'person', value: '/about' },
						{ text: translation.Contact, icon: 'forum', value: '/contact' }
					]}
					selectedValue={selectedItem}
					setSelection={item => {
						setSelection(item)
						navigate(item.toString())
						setOpen(false)
					}}
					className={style.slider}
					wrapper='nav'
					direction={isMobileState ? 'vertical' : 'horizontal'}
				/>
			</ContentTransition>

			<MenuButton onClick={() => setOpen(!open)} open={open} ref={menuButtonRef} />

			<ContentTransition
				className={`${style.menuContents}`}
				ref={menuContentRef}
				willRender={open}
			>
				<div className={style.line} />
				{!isMobileState &&
					<><div className={style.projectsContainer}>
						<div className={`${style.col} label`}>
							<h3>{translation.HighlightedProjects}</h3>
							<A href='/projects/thesis' text='Thesis' target='_self' />
							<A href='/projects/yotei' text='Yotei' target='_self' />
							<A href='/projects/transit' text='Umeå transit redesign' target='_self' />
						</div>
						<div className={`${style.col} label`}>
							<h3>{translation.LinksAndResources}</h3>
							<A href='GitHub' text='GitHub' iconName='code' />
							<A href='' text='LinkedIn' iconName='arrow_outward' />
							<A href='' text={translation.Resume} iconName='description' />
						</div>
					</div><div className={style.line} /></>
				}
				<div className={style.controlsContainer}>
					<div className={style.optionsContainer}>
						<Toggle
							text={translation.ReduceColor}
							toggled={reduceColors}
							setToggled={toggled => {
								animationController.setReduceColors(toggled)
								setReduceColors(toggled)
							}}
						/>
						<Toggle
							text={translation.ReduceMotion}
							toggled={reduceMotion}
							setToggled={toggled => {
								if (toggled) {
									animationController.detatchFromDom()
								} else {
									console.log('attatched!')
									animationController.attachToDom()
								}
								setReduceMotion(toggled)
							}}
						/>
					</div>
					<SliderSelector
						items={[
							{ text: '🇸🇪', value: 'SE' },
							{ text: '🇬🇧', value: 'EN' },
						]}
						selectedValue={lang}
						setSelection={item => {
							setTranslation(item as 'EN' | 'SE')
							setLang(item)
						}}
					/>
				</div>
			</ContentTransition>
		</div>
	)
}

interface ButtonProps {
	onClick: () => void
	open: boolean
}

const MenuButton = forwardRef(({ onClick, open }: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {

	const [translation] = useTranslation()

	return (
		<button className={style.menuButton} onClick={onClick} ref={ref}>
			<Icon name={open ? 'close' : 'more_horiz'} color="black" size="0.75rem" />
			<a style={{ color: 'black' }}>{open ? translation.Close : translation.Menu}</a>
		</button>
	)
})

interface ContentTransitionProps {
	willRender: boolean
	children: ReactNode
	className?: string
}
const ContentTransition = forwardRef(({ willRender, children, className = '' }: ContentTransitionProps, ref: ForwardedRef<HTMLDivElement>) => {
	return (
		<TransitionLifecycle
			ref={ref}
			willRender={willRender}
			className={className}
			transition={{
				initial: { opacity: 0 },
				transition: { opacity: 1 },
				// This is a hack to make exit non-animated since display is not transitionable.
				exit: { opacity: 0, display: 'none' },
				duration: 500
			}}
		>
			{children}
		</TransitionLifecycle>
	)
})

function useHiddenMenuUntilScroll(showMenuWhenScrolledTo: number, setVisible: Dispatch<SetStateAction<boolean>>) {
	useEffect(() => {
		if (location.pathname != '/') {
			setVisible(true)
		}

		const onScrollEnough = () => {
			if (window.scrollY > showMenuWhenScrolledTo && location.pathname === '/') {
				setVisible(true)
			}
		}

		window.addEventListener('scroll', onScrollEnough)
		return () => window.removeEventListener('scroll', onScrollEnough)
	}, [location.pathname])
}

function isOverlapping(element1: HTMLDivElement, element2: Element) {
	const rect1 = element1.getBoundingClientRect()
	const rect2 = element2.getBoundingClientRect()

	return !(
		rect1.top > rect2.bottom ||
		rect1.right < rect2.left ||
		rect1.bottom < rect2.top ||
		rect1.left > rect2.right
	)
}