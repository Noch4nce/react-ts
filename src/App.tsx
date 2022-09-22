import React, { useEffect, useState } from 'react'
import Card, { CardVariants } from './components/Card'
import UserList from './components/UserList'
import { IUser } from './types/types'
import axios from 'axios'

const App = () => {
	const [users, setUsers] = useState<IUser[]>([])

	const fetchUsers = async () => {
		const response = await axios.get<IUser[]>(
			'https://jsonplaceholder.typicode.com/users'
		)

		setUsers(response.data)
	}

	useEffect(() => {
		fetchUsers()
	}, [])

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
			<UserList users={users} />
		</div>
	)
}

export default App
