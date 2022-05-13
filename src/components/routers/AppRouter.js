import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import About from '../about/About'
import DcScreen from '../dc/DcScreen'
import LoginScreen from '../login/LoginScreen'
import MarvelScreen from '../marvel/MarvelScreen'
import SearchScreen from '../search/SearchScreen'
import { Navbar } from '../ui/Navbar'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<LoginScreen />}></Route>
        <Route path='/marvel' element={<MarvelScreen />}></Route>
        <Route path='/dc' element={<DcScreen />}></Route>
        <Route path='/search' element={<SearchScreen />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
