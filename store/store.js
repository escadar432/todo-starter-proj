import { todoService } from "../services/todo.service.js";

const { createStore, compose } = Redux

export const SET_TODO = 'SET_TODO'



const initialState = {
    todos: []
}

function appReducer(state = initialState, cmd = {}) {

    switch (cmd.type) {
        case SET_TODO:
            return { ...state, todos: cmd.todos }
    }
    return state
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(appReducer, composeEnhancers())

window.gStore = store

