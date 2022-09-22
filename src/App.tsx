import React, { useEffect, useState } from 'react'
import Card, { CardVariants } from './components/Card'
import { IUser } from './types/types'
import axios from 'axios'
import List from './components/List'
import UserItem from './components/UserItem'

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

			<List
				items={users}
				renderItems={(user: IUser) => {
					return <UserItem user={user} key={user.id} />
				}}
			/>
		</div>
	)
}

export default App
