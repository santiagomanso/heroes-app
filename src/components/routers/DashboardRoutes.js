import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../about/About'
import DcScreen from '../dc/DcScreen'
import Hero from '../hero/Hero'
import MarvelScreen from '../marvel/MarvelScreen'
import SearchScreen from '../search/SearchScreen'
import { Navbar } from '../ui/Navbar'

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/marvel' element={<MarvelScreen />}></Route>
          <Route path='/dc' element={<DcScreen />}></Route>
          <Route path='/search' element={<SearchScreen />}></Route>
          <Route path='/hero' element={<Hero />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default DashboardRoutes
