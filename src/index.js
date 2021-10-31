import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import { storee } from './Redux/Store'

ReactDOM.render(
    <Provider store={storee}>
        <App />
    </Provider>,
    document.getElementById('root')
)