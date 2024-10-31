import { useContext, createContext, ReactNode } from 'react'
import StripeGradient from '../util/StripeGradient'

// Create context
const animatedBackgroundContext = createContext<StripeGradient | undefined>(undefined)

interface Props {
	children: ReactNode
}

// Setup and export provider
export function AnimatedBackgroundProvider({ children }: Props): ReactNode {

	const animatedBackgroundHandler = new StripeGradient()
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