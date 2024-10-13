import { useContext, createContext, ReactNode } from 'react'
import AnimatedBackgroundController from '../util/AnimatedBackgroundController'
import Circle from '../util/Circle'

// Create context
const animatedBackgroundContext = createContext<AnimatedBackgroundController | undefined>(undefined)

interface Props {
	children: ReactNode
}

// Setup and export provider
export function AnimatedBackgroundProvider({ children }: Props): ReactNode {

	const initialPos = {x: 0, y: 0}

	const animatedBackgroundHandler = new AnimatedBackgroundController([
		new Circle(6, '#4D9BF9', initialPos),
		new Circle(3, '#AD3EC2', initialPos),
		new Circle(2, '#FE0886', initialPos),
		new Circle(2, '#AD3EC2', initialPos),
		new Circle(2, '#6233EE', initialPos),
	],
	'#4D9BF9')

	return (
		<animatedBackgroundContext.Provider value={animatedBackgroundHandler}>
			{children}
		</animatedBackgroundContext.Provider>
	)
}

// Export custom hook for using this context.
export default function useAnimatedBackground() {
	const controller = useContext(animatedBackgroundContext)
	if(!controller) throw new Error("useAnimatedBackground was used outside its context.")
	return controller
}