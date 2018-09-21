import { createStore, combineReducers } from 'redux'

import ReducerBooks from './books/reducers/reducer_books'
import ReducerActiveBooks from './books/reducers/reducer_active_books'

const reducers = combineReducers({
    books: ReducerBooks,
    activeBook: ReducerActiveBooks
})

const store = createStore(reducers)

export default store
