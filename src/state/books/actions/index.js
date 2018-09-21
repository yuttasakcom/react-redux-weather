export const BOOK_SELECTED = 'BOOK_SELECTED'

export const selectBook = (book) => ({
    type: BOOK_SELECTED,
    payload: book
})
