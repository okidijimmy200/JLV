import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './core/Home'
import Footer from './components/footer/Footer'

export default function MainRouter() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}></Route>
    </Routes>
    <Footer />
    </>
  )
}
