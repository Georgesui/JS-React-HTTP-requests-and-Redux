const TODO_URL = 'http://localhost:3000/todos';

export async function addTodosToDb (todo) {
	const res = await fetch(`${TODO_URL}`,{
		method:'POST',
		body: JSON.stringify(todo),
		headers:{'Content-Type': 'application/json'}
	})

	return res.json();
}

export async function updateTodoRequest(id,todo) {
	const res = await fetch(`${TODO_URL}/${id}`,{
		method:'PUT',
		body: JSON.stringify(todo),
		headers:{'Content-Type': 'application/json'}
	})
	return res.json();
}

export async function deleteTodo(id) {
	const res = await fetch(`${TODO_URL}/${id}`,{
		method:'DELETE'
	})

	return res.json();
}

export async function getTodos() {
	const res = await fetch(`${TODO_URL}`,{
		method:'GET'
	})

	return res.json();
}