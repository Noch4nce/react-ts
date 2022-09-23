import React, { useEffect, useState } from 'react'
import { IUser } from '../types/types'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

// interface UserItemPageParams {
// 	id: string
// }

const UserItemPage = () => {
	const [user, setUser] = useState<IUser | null>(null)
	const { id } = useParams<{ id: string }>()
	const navigate = useNavigate()

	const fetchUser = async () => {
		const response = await axios.get<IUser>(
			'https://jsonplaceholder.typicode.com/users/' + id
		)

		setUser(response.data)
	}

	useEffect(() => {
		fetchUser()
	}, [])

	return (
		<div>
			<button onClick={() => navigate('/users')}>Back</button>
			<h1>Page {user?.name}</h1>
			<div>{user?.email}</div>
			<div>
				{user?.address.city} {user?.address.street}{' '}
				{user?.address.zipcode}
			</div>
		</div>
	)
}

export default UserItemPage
