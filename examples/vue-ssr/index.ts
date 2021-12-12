import { createSSRApp } from 'vue'
import { renderToString } from '@vue/server-renderer'
import express from 'express'

const server = express()

server.get('*', async (req, res) => {
    // each request should have a fresh, isolated app instance so that there is no cross-request state pollution.
    const app = createSSRApp({
        data() {
            return {
                user: 'John Doe'
            }
        },
        template: `<div>Current user is: {{ user }}</div>`
    })

    const appContent = await renderToString(app)
    const html = `
    <html>
      <body>
        <h1>My First Heading</h1>
        <div id="app">${appContent}</div>
      </body>
    </html>
    `

    res.end(html)
})

server.listen(8080)
