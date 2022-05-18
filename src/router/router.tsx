import NavBar from 'components/navbar'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from 'pages/home'

export default function Router() {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
  )
}
