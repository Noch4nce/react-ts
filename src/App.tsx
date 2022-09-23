import React from 'react'
import Card, { CardVariants } from './components/Card'
import Events from './components/Events'
import UserPages from './components/UserPages'
import TodosPages from './components/TodosPages'

const App = () => {
	return (
		<div>
			<Events />
			<Card
				onClick={() => console.log('click')}
				variant={CardVariants.primary}
				width="200px"
				height="200px"
			>
				<button>Button</button>
			</Card>

			<UserPages />

			<TodosPages />
		</div>
	)
}

export default App
