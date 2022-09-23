import React, { FC } from 'react'
import { IUser } from '../types/types'

interface UserItemProps {
	user: IUser
	onNavigate: (user: IUser) => void
}

const UserItem: FC<UserItemProps> = ({ user, onNavigate }) => {
	return (
		<div
			onClick={() => onNavigate(user)}
			style={{ padding: 15, border: '1px solid red' }}
		>
			{user.id}. {user.name} lives in {user.address.city} on street{' '}
			{user.address.street}
		</div>
	)
}

export default UserItem
