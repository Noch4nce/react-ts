import React, { FC, useEffect, useState } from 'react'
import { IUser } from '../types/types'
import axios from 'axios'
import List from './List'
import UserItem from './UserItem'
import { useNavigate } from 'react-router-dom'

const UserPages: FC = () => {
	const [users, setUsers] = useState<IUser[]>([])
	const navigate = useNavigate()

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
		<List
			items={users}
			renderItems={(user: IUser) => {
				return (
					<UserItem
						onNavigate={(user) => navigate('/users/' + user.id)}
						user={user}
						key={user.id}
					/>
				)
			}}
		/>
	)
}

export default UserPages
