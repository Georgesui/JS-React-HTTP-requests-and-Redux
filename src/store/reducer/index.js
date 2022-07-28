import {SET_TODOS, DELETE_TODO, ADD_TODOS, CHANGE_TODO} from '../actions'

const initialState = {
	todos: []
}

export default function rootReducer(state=initialState, {type,payload}) {
	switch(type){
		case SET_TODOS:
			return{
				...state,
				todos: payload
			}
			case ADD_TODOS:
			return{
				...state,
				todos: [...state.todos, payload]
			}
			case DELETE_TODO:
			return{
				...state,
				todos: state.todos.filter(e=> e.id !== payload)
			}
			case CHANGE_TODO:
			return{
				...state,
				todos: payload
			}
			default:
			 		return state
				}
	}