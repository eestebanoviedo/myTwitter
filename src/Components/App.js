import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import LoginPage from "Components/Pages/Login"

import ErrorPage from "Components/Pages/NotFound"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
