import { createStore } from "redux"
import counterReducer from "./counterReducer"
import personReducer from "./personReducer"
import { combineReducers } from "redux"


// const myStore = createStore(personReducer)


const rootReducer = combineReducers({
    counter: counterReducer,
    person: personReducer
})

const myStore = createStore(rootReducer)

export default myStore