import { useRouteError } from "react-router-dom"

export default function Error() {

	const error = useRouteError() as { message: string }

	return (
	<>	
		<h1>Oops! Looks like something went wrong!</h1>
		<p>Here is a more detailed description of what went wrong:</p>
		<p>{error.message || 'An unexpected error occurred.'}</p>
	</>
	)
}