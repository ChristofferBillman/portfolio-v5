import { forwardRef, ReactNode, ForwardedRef, useEffect, useLayoutEffect, useRef, useState, useCallback, SetStateAction, Dispatch, RefObject } from "react"
import SliderSelector from "../common/SliderSelector"

import style from './Menu.module.css'
import Icon from "../common/Icon"
import GlassMaterial from "../common/GlassMaterial"
import useOutsideClick from "../../hooks/useOutsideClick"
import { useLocation, useNavigate } from "react-router-dom"
import TransitionLifecycle from "../TransitionLifecycle"
import isMobile from "../../util/IsMobile"
import { useTranslation } from "../../contexts/TranslationContext"
import useAnimatedBackground from "../../contexts/AnimatedBackgroundContext"
import Toggle from "../common/Toggle"
import getLocale from "../../util/getLocale"
import A from "../common/A"
import clsx from "clsx"

export function Menu() {

	const navigate = useNavigate()
	const location = useLocation()
	const [translation, setTranslation] = useTranslation()

	const [selectedItem, setSelection] = useState('/')
	const [open, setOpen] = useState(false)

	const [reduceColors, setReduceColors] = useState(false)
	const [reduceMotion, setReduceMotion] = useState(false)
	const animationController = useAnimatedBackground()

	const [lang, setLang] = useState(getLocale())

	const [isMobileState, setIsMobileState] = useState(isMobile())
	useDeviceResize(isMobileState, setIsMobileState)

	const [menuVisible, setMenuVisible] = useState(false)

	useEffect(() => {
		setSelection(`/${location.pathname.split('/').slice(1, 2).join('')}`)
	}, [location])

	const menuRefs = {
		items: useRef<HTMLDivElement>(null),
		container: useRef<HTMLDivElement>(null),
		content: useRef<HTMLDivElement>(null),
		button: useRef<HTMLButtonElement>(null)
	}

	useMenuDimensions(isMobileState, Object.values(menuRefs))
	useHiddenMenuUntilScroll(window.innerHeight * 2, setMenuVisible)
	useDynamicMenuColor(menuRefs.container)
	useOutsideClick(() => setOpen(false), Object.values(menuRefs))

	return (
		<div style={{ opacity: menuVisible ? 1 : 0, transitionDuration: '500ms' }}>
			<GlassMaterial
				className={clsx(style.menuWrapper, open && style.open)}
				ref={menuRefs.container}
			/>
			
			<ContentTransition
				ref={menuRefs.items}
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

			<MenuButton onClick={() => setOpen(!open)} open={open} ref={menuRefs.button} />

			<ContentTransition
				className={`${style.menuContents}`}
				ref={menuRefs.content}
				willRender={open}
			>
				<div className={style.line} />
				{!isMobileState &&
					<><div className={style.projectsContainer}>
						<div className={`${style.col} label`}>
							<h3>{translation.HighlightedProjects}</h3>
							<A
								text={translation.HighligtedProject1}
								onClick={() => {
									navigate('/projects/thesis')
									setOpen(false)
								}}
							/>
							<A
								text={translation.HighligtedProject2}
								onClick={() => {
									navigate('/projects/yotei')
									setOpen(false)
								}}
							/>
							<A
								text={translation.HighligtedProject3}
								onClick={() => {
									navigate('/projects/transit')
									setOpen(false)
								}}
							/>
						</div>
						<div className={`${style.col} label`}>
							<h3>{translation.LinksAndResources}</h3>
							<A
								href='https://github.com/ChristofferBillman/'
								text='GitHub'
								iconName='code'
							/>
							<A
								href='https://www.linkedin.com/in/christoffer-billman-840029212' 
								text='LinkedIn'
								iconName='arrow_outward'
							/>
							<A
								href={translation.CVLink}
								text={translation.Resume}
								iconName='description'
							/>
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
									animationController.pause()
								} else {
									animationController.play()
								}
								setReduceMotion(toggled)
							}}
						/>
					</div>
					<SliderSelector
						className={style.langSelector}
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

function useMenuDimensions(isMobileState: boolean, menuRefs: RefObject<HTMLElement>[]) {

	const [items, container, content, button] = menuRefs.map(ref => ref.current)

	const setMenuDimensions = useCallback(() => {
		if (!items || !container || !content || !button) return
		const padd = 10
		const newWidth = items.offsetWidth + button.offsetWidth
		container.style.width = newWidth + padd + 'px'
		content.style.width = newWidth + 'px'
		items.style.marginRight = isMobileState ? '0' : button.offsetWidth + padd + 'px'
	}, [button, container, content, isMobileState, items])

	useLayoutEffect(() => {
		if (!items) return

		// When menuRefs.items width is updated, run the code to set the container to that width too.
		const resizeObserver = new ResizeObserver(setMenuDimensions)
		resizeObserver.observe(items)

		return () => resizeObserver.disconnect()
	}, [isMobileState, items, setMenuDimensions])
}

function useDeviceResize(isMobileState: boolean, setIsMobileState: React.Dispatch<React.SetStateAction<boolean>>) {
    useEffect(() => {
        const handleResize = () => {
            if (isMobile() != isMobileState) {
                setIsMobileState(isMobile())
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [isMobileState, setIsMobileState])
}

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
	}, [setVisible, showMenuWhenScrolledTo])
}

function useDynamicMenuColor(menuRef: RefObject<HTMLDivElement>) {
	const isOverlapping = (element1: HTMLDivElement, element2: Element) => {
		const rect1 = element1.getBoundingClientRect()
		const rect2 = element2.getBoundingClientRect()
	
		return !(
			rect1.top > rect2.bottom ||
			rect1.right < rect2.left ||
			rect1.bottom < rect2.top ||
			rect1.left > rect2.right
		)
	}

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
			menuRef.current.style.background = 'rgba(255,255,255,0.2)'
		}

		const interval = setInterval(intersectionCheck, 500)

		return () => {
			clearInterval(interval)
		}
	}, [menuRef])
}