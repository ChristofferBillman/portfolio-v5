interface Props {
	name: string
	size?: string
	color?: string
}

export function Icon({name, color = 'rgba(255,255,255,0.8)'}: Props) {
	return (
		<span
            className='material-symbols-rounded'
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