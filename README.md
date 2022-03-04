# awesome-server-side-rendering

> A curated list of awesome things related to server side rendering.

## Vue

- [Vue 3 Docs - Server-Side Rendering Guide](https://v3.vuejs.org/guide/ssr/introduction.html#what-is-server-side-rendering-ssr)
- [Pinia Docs - Server-Side Rendering](https://pinia.esm.dev/ssr/)
- [Nuxt.js Docs - Server-Side Rendering](https://nuxtjs.org/docs/concepts/server-side-rendering/)
- [vitesse-ssr-template](https://github.com/frandiox/vitesse-ssr-template): 🏕 Opinionated Vue + Vite Starter Template with SSR in Node.js

## React

- [ReactDOMServer](https://reactjs.org/docs/react-dom-server.html)
- [Redux Docs - Server Rendering](https://redux.js.org/usage/server-rendering)
- [Next.js](https://nextjs.org/docs/basic-features/pages#server-side-rendering)
- [React Router SSR](https://reactrouter.com/docs/en/v6/guides/ssr)
    - `vite-ssr` use the same ssr logic as the docs stated
- [Remix Data Loading](https://remix.run/docs/en/v1/guides/data-loading)
    - Highlights: [Different Adapters for build serving](https://remix.run/docs/en/v1/other-api/adapter)
    - New Blog post: [Remix vs Next.js](https://remix.run/blog/remix-vs-next#loading-dynamic-pages)
- [Modern.js](https://modernjs.dev/docs/guides/features/server-side/web/ssr-and-spr)
- [useEffect on server side](https://medium.com/swlh/how-to-use-useeffect-on-server-side-654932c51b13), i.e. [useSSE](https://github.com/kmoskwiak/useSSE)

## Polyfills

- https://github.com/matthew-andrews/isomorphic-fetch
- https://remix.run/docs/en/v1/other-api/node#polyfills

## Vite

- [vite-ssr](https://github.com/frandiox/vite-ssr)
- [Vite Docs - Server-Side Rendering](https://vitejs.dev/guide/ssr.html)
- [vite-plugin-ssr](https://vite-plugin-ssr.com/)

## Examples

- [examples/vue-ssr](examples/vue-ssr)
- [examples/react-ssr](examples/react-ssr)
- [examples/next-ssr](examples/next-ssr)
- [react-router-ssr](examples/react-router-ssr)

## Videos

- [What is Server-Side Rendering? (Server-side Rendering with JavaScript Frameworks)](https://www.youtube.com/watch?v=GQzn7XRdzxY&ab_channel=Firebase)

## Tools

- [vite-plugin-remove-exports](https://github.com/egoist/vite-plugin-remove-exports): A Vite plugin to remove certain exports, helpful to help delete `getServerSideProps` in the client code.
