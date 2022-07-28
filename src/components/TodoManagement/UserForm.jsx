import { useState } from "react"

function UserForm ({onSubmit}) {
	const [todos, setTodos] = useState({
		task:'',
		complited: false,
	})

	function changeTodo(e){
		setTodos({
			...todos,
			[e.target.name]:e.target.value
		})
	}

	function submitForm(e) {
		e.preventDefault()
		onSubmit(todos)
		setTodos({
			task:'',
			complited: false,
		})
	}

	return (
	<form onSubmit={submitForm}>
		<input type="text" name="task" value={todos.task} onChange={changeTodo}/>
		<button className='buttonToAdd'>Add Todo</button>
	</form>)
}

export default UserForm