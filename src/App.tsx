import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import UserPages from './components/UserPages'
import TodosPages from './components/TodosPages'

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Link style={{ marginRight: 5 }} to="/users">
					Users
				</Link>
				<Link to="/todos">Todos</Link>
			</div>
			<Routes>
				<Route path="/users" element={<UserPages />} />
				<Route path="/todos" element={<TodosPages />} />
			</Routes>
		</BrowserRouter>

		// <div>
		// 	<Events />
		// 	<Card
		// 		onClick={() => console.log('click')}
		// 		variant={CardVariants.primary}
		// 		width="200px"
		// 		height="200px"
		// 	>
		// 		<button>Button</button>
		// 	</Card>
		//
		// 	<UserPages />
		//
		// 	<TodosPages />
		// </div>
	)
}

export default App
