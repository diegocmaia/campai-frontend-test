import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import { Provider } from 'react-redux'
import { injectGlobal } from 'styled-components'
import { createStore, applyMiddleware, compose } from 'redux'

import App from './containers/App'

import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body,
    html {
        margin: 0;
        padding: 0;
        width: 100vw;
        font-family: 'Roboto', sans-serif;
        overflow-x: hidden;
        font-size: 14px;
    }
`

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk, promiseMiddleware())
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
)