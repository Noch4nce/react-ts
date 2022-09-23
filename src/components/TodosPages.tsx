import React, { FC, useEffect, useState } from 'react'
import { ITodo } from '../types/types'
import axios from 'axios'
import TodoItem from './TodoItem'
import List from './List'

const TodosPages: FC = () => {
	const [todos, setTodos] = useState<ITodo[]>([])

	const fetchTodo = async () => {
		const response = await axios.get<ITodo[]>(
			'https://jsonplaceholder.typicode.com/todos?_limit=10'
		)

		setTodos(response.data)
	}

	useEffect(() => {
		fetchTodo()
	}, [])

	return (
		<List
			items={todos}
			renderItems={(todo: ITodo) => {
				return <TodoItem todo={todo} key={todo.id} />
			}}
		/>
	)
}

export default TodosPages
