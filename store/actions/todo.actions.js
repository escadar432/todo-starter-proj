import { todoService } from "../../services/todo.service.js"
import { SET_TODO, store } from "../store.js"

export function loadTodos(filterBy) {
    return todoService.query(filterBy)
        .then(todos =>  store.dispatch({ type: SET_TODO, todos }))
        .catch(err => {
            console.log('TODO action -> Cannot load todos', err)
            throw err
        })
}