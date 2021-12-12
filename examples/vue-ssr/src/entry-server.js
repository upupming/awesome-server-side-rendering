// entry-server.js
import { createSSRApp } from 'vue'
// server router uses a different history from the client one
import { createMemoryHistory } from 'vue-router'
import createRouter from './router.js'
import App from './App.vue'

export default function () {
    const app = createSSRApp(App)
    const router = createRouter(createMemoryHistory())

    app.use(router)

    return {
        app,
        router
    }
}
