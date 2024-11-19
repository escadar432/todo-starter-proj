import { todoService } from "../../services/todo.service.js"
import { SET_TODO, store, REMOVE_TODO } from "../store.js"

export function loadTodos(filterBy) {
    return todoService.query(filterBy)
        .then(todos => store.dispatch({ type: SET_TODO, todos }))
        .catch(err => {
            console.log('TODO action -> Cannot load todos', err)
            throw err
        })
}

export function removeTodo(todoId) {
    return todoService.remove(todoId)
        .then(() => store.dispatch({ type: REMOVE_TODO, todoId }))
        .catch(err => {
            console.log('TODO action -> Cannot remove todo', err)
            throw err
        })
}