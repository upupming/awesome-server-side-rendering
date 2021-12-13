// server.js

const { createSSRApp } = require('vue')
const { renderToString } = require('@vue/server-renderer')
const express = require('express')
const server = express()
const fs = require('fs')
const path = require('path')
const manifest = require('./dist/server/ssr-manifest.json')

// the 'app.js' name is taken from the name of the entrypoint with an added `.js` postfix
const appPath = path.join(__dirname, './dist', 'server', manifest['app.js'])
const createApp = require(appPath).default

server.use(
    '/img',
    express.static(path.join(__dirname, './dist/client', 'img'))
)
server.use('/js', express.static(path.join(__dirname, './dist/client', 'js')))
server.use(
    '/css',
    express.static(path.join(__dirname, './dist/client', 'css'))
)
server.use(
    '/favicon.ico',
    express.static(path.join(__dirname, './dist/client', 'favicon.ico'))
)

const indexTemplate = fs.readFileSync(
    path.join(__dirname, '/dist/client/index.html'),
    'utf-8'
)

server.get('*', async (req, res) => {
    const { app, router } = createApp()

    await router.push(req.url)
    await router.isReady()

    const appContent = await renderToString(app)

    const html = indexTemplate
        .toString()
        .replace('<div id="app">', `<div id="app">${appContent}`)

    res.setHeader('Content-Type', 'text/html')
    res.send(html)
})

const port = 3000
server.listen(port)
console.log(`server is listening at localhost: ${port}`)
