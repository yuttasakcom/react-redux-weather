import * as books from '../actions'

export default (state=null, action) => {
    switch(action.type) {
        case books.BOOK_SELECTED:
            return action.payload
        
        default:
            return state
    }
}