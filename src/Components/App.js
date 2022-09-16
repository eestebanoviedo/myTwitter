import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import LoginPage from "Components/Pages/Login"

import ErrorPage from "Components/Pages/NotFound"

import Dashboard from "Components/Pages/Dashboard"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
