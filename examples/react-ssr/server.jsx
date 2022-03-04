import path from 'path'
import Express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import counterApp from './reducers'
import App from './containers/App'
import qs from 'qs' // Add this at the top of the file
import { renderToString } from 'react-dom/server'
import { fetchCounter } from './api/counter'

const app = Express()
const port = 3000

// Serve static files
app.use('/dist', Express.static('dist'))

// This is fired every time the server side receives a request
app.use(handleRender)

function handleRender (req, res) {
  // Query our mock API asynchronously
  fetchCounter(apiResult => {
    // Read the counter from the request, if provided
    const params = qs.parse(req.query)
    const counter = parseInt(params.counter, 10) || apiResult || 0

    // Compile an initial state
    const preloadedState = { counter }

    // Create a new Redux store instance
    const store = createStore(counterApp, preloadedState)

    // Render the component to a string
    const html = renderToString(
            <Provider store={store}>
                <App />
            </Provider>
    )

    // Grab the initial state from our Redux store
    const finalState = store.getState()

    // Send the rendered page back to the client
    res.send(renderFullPage(html, finalState))
  })
}

function renderFullPage (html, preloadedState) {
  return `
      <!doctype html>
      <html>
        <head>
          <title>Redux Universal Example</title>
          <link rel="stylesheet" href="/dist/server.css" />
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // https://redux.js.org/usage/server-rendering#security-considerations
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
        /</g,
        '\\u003c'
    )}
          </script>
          <script src="/dist/client.js"></script>
        </body>
      </html>
      `
}

app.listen(port)
console.log(`server is listening at http://localhost:${port}
try specify initial counter value in url params http://localhost:${port}/?counter=100
`)
