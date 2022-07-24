import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

const App = () => {
  function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    )
  }

  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    )
  }

  function Dashboard() {
    return (
      <div>
        <h2>Dashboard</h2>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<h2>Home</h2>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
