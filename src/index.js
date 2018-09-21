import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './state/store'

import './style.css'

import App from './App'

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.querySelector('#root'))
