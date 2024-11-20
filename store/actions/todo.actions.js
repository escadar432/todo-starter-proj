import { todoService } from "../../services/todo.service.js"
import { SET_TODO, store, REMOVE_TODO, EDIT_TODO } from "../store.js"

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

function toggleTodo(todo) {
    const todoToSave = { ...todo, isDone: !todo.isDone }
   return todoService.save(todoToSave)
        .then(savedTodo => {
            store.dispatch({type: EDIT_TODO, savedTodo})
        })
        .catch(err => {
            console.log('err:', err)
            showErrorMsg('Cannot toggle todo ' + todoId)
        })
}