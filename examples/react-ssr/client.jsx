import React from 'react'
import { hydrate } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import counterApp from './reducers'

// Create Redux store with state injected by the server
const store = createStore(counterApp, window.__PRELOADED_STATE__)

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

hydrate(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
