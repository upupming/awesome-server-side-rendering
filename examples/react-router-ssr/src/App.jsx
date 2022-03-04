import React from 'react'
import { Routes, Route } from 'react-router'
import { Link } from 'react-router-dom'

export default function App () {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </div>
  )
}
