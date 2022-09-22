import React from 'react'
import Card, { CardVariants } from './components/Card'

const App = () => {
	return (
		<div>
			<Card
				onClick={() => console.log('click')}
				variant={CardVariants.primary}
				width="200px"
				height="200px"
			>
				<button>Button</button>
			</Card>
		</div>
	)
}

export default App
