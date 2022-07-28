import UserListItem from './UserListItem';

function UserList ({todos, onDelete,onChangeStatus}) {
	return (
		<ul className='list'>
				{
					todos.map((todo) => {
						return <UserListItem  
						todos={todo}
						key={todo.id}
						onDelete={onDelete}
						onChangeStatus ={onChangeStatus}></UserListItem>
					})
				}
			</ul >
	)
}

export default UserList;