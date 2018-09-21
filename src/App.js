import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectBook } from './state/books/actions'

class App extends Component {
    
    renderList() {
        return this.props.books.map(book => <li onClick={() => this.props.selectBook(book)} key={book.title}>{book.title}</li>)
    }

    bookDetail() {
        if (!this.props.activeBook) {
            return <div>Select Book!</div>
        }
        return <div>{this.props.activeBook.title}</div>
    }

    render() {
        return (
            <div>
                <h3>Book List</h3>
                <ul>
                    { this.renderList() }
                </ul>

                <div>{this.bookDetail()}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
        activeBook: state.activeBook
    }
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
