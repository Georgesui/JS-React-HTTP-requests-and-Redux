function UserListItem ({todos, onDelete, onChangeStatus}) {

	return (<li className={todos.complited ? 'statusTrue' : 'statusFalse'}>
	{todos.task} <div className='row'>
		<button className='buttonForDelete' onClick={() => onDelete(todos.id)}>DELETE</button>
		< button className='buttonToChangeStatus' onClick={() => onChangeStatus(todos.id)}>changeStatus</button>
		</div></li>)
}

export default UserListItem