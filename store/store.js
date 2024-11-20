import { todoService } from "../services/todo.service.js";

const { createStore, compose } = Redux

export const SET_TODO = 'SET_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const EDIT_TODO = 'EDIT_TODO'


const initialState = {
    todos: []
}

function appReducer(state = initialState, cmd = {}) {

    switch (cmd.type) {
        case SET_TODO:
            return {
                ...state,
                todos: cmd.todos
            }
        case REMOVE_TODO: {
            return {
                ...state,
                todos: state.todos.filter(todo => todo._id !== cmd.todoId)
            }
        } case EDIT_TODO: {
            return {
                ...state,
                todos: state.todos.map(todo => todo._id === cmd.todo._id ? cmd.todo : todo), // state.todos(prevTodos)  => prevTodos.map(currTodo => (currTodo._id !== todo._id) ? currTodo : { ...savedTodo }))
            }
        }
        default:
            return state
    }

}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(appReducer, composeEnhancers())

window.gStore = store

