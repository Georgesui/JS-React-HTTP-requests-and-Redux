import React, { useEffect } from 'react';
import UserList from './UserList'
import UserForm from './UserForm';
import { getTodos, deleteTodo, addTodosToDb, updateTodoRequest } from './Todo-api';
import { useSelector, useDispatch } from 'react-redux';
import {setTodosAction, deleteTodoAction, addTodosAction, changeTodoAction} from '../../store/actions'

const TodoList = () => {
	const todoListFromRedux = useSelector((state)=> state.todos)
	const dispatch = useDispatch()
	
	useEffect(()=>{
	async function initTodos() {
		const todos = await getTodos();
		dispatch(setTodosAction(todos))
	}
	initTodos()
},[])

async function deleteElement(id) {
		try {
				await deleteTodo(id)
				dispatch(deleteTodoAction(id))
		} catch(e) {
				console.warn(e)
		}
}

async function addToDoList(todo) {
		try {
				const res = await addTodosToDb(todo)
				dispatch(addTodosAction(res))
		} catch(e) {
			console.warn(e)
		}
	}

	 async function updateStatus(id) {
			try {
				const todos = [...todoListFromRedux]
				const todo = todos.find((item)=> item.id === id);
				todo.complited = !todo.complited
				await updateTodoRequest(id, todo)
				dispatch(changeTodoAction(todos))
			} catch(e){
				console.warn(e)
			}
		}

	return (
		<div className='container'>
			<UserForm onSubmit={addToDoList}></UserForm>
			<UserList todos={todoListFromRedux} onDelete={deleteElement} onChangeStatus={updateStatus}></UserList>
		</div >
	)
}

export default TodoList


// const [todos, setTodos] = useState(newTodos)

// useEffect(()=>{
// 	async function initTodos() {
// 		const todos = await getTodos();
// 		setTodos(todos)
// 	}
// 	initTodos()
// },[])

// async function addToDoList(todo) {
// 	try {
// 			const res = await addTodosToDb(todo)
// 			const createdTodo =[...todos, res]
// 			setTodos(createdTodo)
// 	} catch(e) {
// 		console.warn(e)
// 	}
// }

// async function deleteElement(id) {
// 	try {
// 	await deleteTodo(id)
// 	const listAfterDelete = todos.filter((el) => el.id !== id)
// 	setTodos(listAfterDelete)
// 	} catch(e) {
// 		console.warn(e)
// 	}
// }

// async function updateStatus(id) {
// 	try {
// 		const allTodos = [...todos]
// 		const todo = todos.find((item)=> item.id === id);
// 		todo.complited = !todo.complited
// 		const res = await updateTodoRequest(id,todo)
// 		setTodos(allTodos)
// 	} catch(e){
// 		console.warn(e)
// 	}
// }