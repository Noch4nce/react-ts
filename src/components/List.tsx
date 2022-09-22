import React from 'react'

interface ListProps<T> {
	items: T[]
	renderItems: (item: T) => React.ReactNode
}

function List<T>(props: ListProps<T>) {
	return <div>{props.items.map((item) => props.renderItems(item))}</div>
}

export default List
