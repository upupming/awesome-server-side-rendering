import React from 'react'
import express from 'express'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'
import fs from 'fs'
import path from 'path'
const { createServer: createViteServer } = require('vite')

async function createServer () {
  const app = express()

  // https://vitejs.dev/guide/ssr.html#setting-up-the-dev-server
  const vite = await createViteServer({
    server: { middlewareMode: 'ssr' }
  })
  // use vite's connect instance as middleware
  app.use(vite.middlewares)

  app.get('*', async (req, res) => {
    const appHtml = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
    )

    // 1. Read index.html
    let template = fs.readFileSync(
      path.resolve(__dirname, '../index.html'),
      'utf-8'
    )

    // 2. Apply Vite HTML transforms. This injects the Vite HMR client, and
    //    also applies HTML transforms from Vite plugins, e.g. global preambles
    //    from @vitejs/plugin-react
    template = await vite.transformIndexHtml(req.originalUrl, template)

    const html = template.replace('<!--ssr-outlet-->', appHtml)

    // If we want to support dist, should do something like https://github.com/frandiox/vite-ssr/blob/eabb2dfcac5574c8db35bfa809f903ea4fd275b4/src/build/index.ts#L115 to replace `src="./src/client.entry.js"` to a path in the dist folder

    // 6. Send the rendered HTML back.
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
  })

  const port = 3000
  app.listen(port, () => {
    console.log(`app is listening at http://localhost:${port}`)
  })
}
createServer()
