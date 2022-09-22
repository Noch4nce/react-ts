import React, { useEffect, useState } from 'react'
import Card, { CardVariants } from './components/Card'
import { ITodo, IUser } from './types/types'
import axios from 'axios'
import List from './components/List'
import UserItem from './components/UserItem'
import TodoItem from './components/TodoItem'
import Events from './components/Events'

const App = () => {
	const [users, setUsers] = useState<IUser[]>([])
	const [todos, setTodos] = useState<ITodo[]>([])

	const fetchUsers = async () => {
		const response = await axios.get<IUser[]>(
			'https://jsonplaceholder.typicode.com/users'
		)

		setUsers(response.data)
	}

	const fetchTodo = async () => {
		const response = await axios.get<ITodo[]>(
			'https://jsonplaceholder.typicode.com/todos?_limit=10'
		)

		setTodos(response.data)
	}

	useEffect(() => {
		fetchUsers()
		fetchTodo()
	}, [])

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

			<List
				items={users}
				renderItems={(user: IUser) => {
					return <UserItem user={user} key={user.id} />
				}}
			/>

			<List
				items={todos}
				renderItems={(todo: ITodo) => {
					return <TodoItem todo={todo} key={todo.id} />
				}}
			/>
		</div>
	)
}

export default App
