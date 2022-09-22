import React, { FC, PropsWithChildren } from 'react'

export enum CardVariants {
	outlined = 'outlined',
	primary = 'primary'
}

interface CardProps {
	width?: string
	height?: string
	variant: CardVariants
	onClick: () => void
}

const Card: FC<PropsWithChildren<CardProps>> = ({
	width,
	height,
	variant,
	onClick,
	children
}) => {
	return (
		<div
			style={{
				width,
				height,
				border:
					variant === CardVariants.outlined
						? '1px solid black'
						: 'none',
				backgroundColor:
					variant === CardVariants.primary ? 'lightgray' : ''
			}}
			onClick={onClick}
		>
			{children}
		</div>
	)
}

export default Card
