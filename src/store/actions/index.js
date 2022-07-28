export const SET_TODOS = '[Todolist] set todos'
export const ADD_TODOS = '[Todolist] add todos'
export const DELETE_TODO = '[Todolist] delete todo'
export const CHANGE_TODO = '[Todolist] change todo'

export function setTodosAction (todos) {
	return {
		type: SET_TODOS,
		payload: todos,
	}
}

export function addTodosAction (todo) {
	return {
		type: ADD_TODOS,
		payload: todo,
	}
}

export function deleteTodoAction (id) {
	return {
		type: DELETE_TODO,
		payload: id ,
	}
}

export function changeTodoAction (id) {
	return {
		type: CHANGE_TODO,
		payload: id,
	}
}