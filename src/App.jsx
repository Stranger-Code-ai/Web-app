import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <> 
      <Navbar/>
      <Outlet></Outlet>
      <Footer/>
    </>
  )
}

export default App
