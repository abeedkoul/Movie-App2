import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './pages/Signup'
import Symphony from './pages/Symphony'
import Login from './pages/Login'
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path ="/login" element={<Login />} />
      <Route exact path ="/signup" element={<Signup />} />
      <Route exact path ="/" element={<Symphony />} />
    </Routes>
    </BrowserRouter>
  )
}
