interface Props {
	name: string
	size?: string
	color?: string
}

export function Icon({name, size = '1rem', color = 'rgba(255,255,255,0.8)'}: Props) {
	return (
		<span
            className='material-symbols-rounded'
            style={{
				color,
                fontSize: size,
                cursor: 'pointer',
                userSelect: 'none',
                fontVariationSettings: `'FILL' 0, 'wght' 400`
            }}
        >
            {name}
        </span>
	)
}