import { createStore } from "redux"
import counterReducer from "./counterReducer"
import personReducer from "./personReducer"
import { combineReducers } from "redux"

import { persistStore, persistReducer } from 'redux-persist'

// Custom storage to bypass Vite's issues with redux-persist/lib/storage
const customStorage = {
    getItem: (key) => Promise.resolve(window.localStorage.getItem(key)),
    setItem: (key, value) => {
        window.localStorage.setItem(key, value);
        return Promise.resolve();
    },
    removeItem: (key) => {
        window.localStorage.removeItem(key);
        return Promise.resolve();
    }
};

const rootReducer = combineReducers({
    counter: counterReducer,
    person: personReducer
})

const persistConfig = {
    key: 'root',
    storage: customStorage, // Use our bug-free custom storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const myStore = createStore(persistedReducer)

export const persistor = persistStore(myStore)

export default myStore