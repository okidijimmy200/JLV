import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './core/Home'

export default function MainRouter() {
  return (
    <>
    <Routes>
      <Route exact: t path='/' component={Home}></Route>
    </Routes>
    </>
  )
}
