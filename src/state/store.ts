import { createStore } from 'redux'
import { counterReducer } from './CounterReducer' // импортируйте корневой редьюсер

export const store = createStore(counterReducer)

export default store
