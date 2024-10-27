interface Props {
	name: string
	size?: string
	color?: string
	className?: string
}

export function Icon({name, color = 'inherit', className = ''}: Props) {
	return (
		<span
            className={`${className} material-symbols-rounded`}
            style={{
				color,
                fontSize: 'inherit',
                cursor: 'pointer',
                userSelect: 'none',
                fontVariationSettings: `'FILL' 0, 'wght' 400`
            }}
        >
            {name}
        </span>
	)
}