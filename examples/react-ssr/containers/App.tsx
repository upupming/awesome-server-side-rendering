import React from 'react';
import './App.css';
import { useStore, useSelector } from 'react-redux';

function App() {
  const store = useStore();
  const counter = useSelector((state: any) => state.counter);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
          className="App-logo"
          alt="logo"
        />
        <div
          dangerouslySetInnerHTML={{
            __html: `
            This restaurant is absolutely horrible.
            The service is <b>slow</b> and the food is <i>disgusting</i>.
            <img src="nonexistent.png" onerror="console.log('this is an example XSS attack with dangerouslySetInnerHTML!');" />
          `,
          }}
        ></div>
        <p>Hello Redux + React + SSR!</p>
        <p>
          <button
            type="button"
            onClick={() => store.dispatch({ type: 'INCREMENT' })}
          >
            count is: {counter}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://github.com/upupming/awesome-server-side-rendering"
            target="_blank"
            rel="noopener noreferrer"
          >
            awesome-server-side-rendering
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
