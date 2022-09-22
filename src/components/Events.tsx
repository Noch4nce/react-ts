import React, { FC, useState } from 'react'

const Events: FC = () => {
	const [value, setValue] = useState<string>('')
	const [isDrag, setIsDrag] = useState<boolean>(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const handleCLick = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log(value, 'value')
	}

	const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
		console.log('DRAG')
	}

	const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDrag(true)
	}

	const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDrag(false)
	}

	const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDrag(false)
		console.log('DROP')
	}

	return (
		<div>
			<input value={value} type="text" onChange={handleChange} />
			<button onClick={handleCLick}>CLick</button>
			<div
				onDrag={handleDrag}
				draggable
				style={{ width: 200, height: 200, backgroundColor: 'red' }}
			></div>
			<div
				onDrop={handleDrop}
				onDragLeave={handleDragLeave}
				onDragOver={handleDragOver}
				style={{
					width: 200,
					height: 200,
					backgroundColor: isDrag ? 'blue' : 'red',
					marginTop: 15
				}}
			></div>
		</div>
	)
}

export default Events
