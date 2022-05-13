import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import LoginScreen from '../login/LoginScreen'
import DashboardRoutes from './DashboardRoutes'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginScreen />}></Route>
        <Route path='/*' element={<DashboardRoutes />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
