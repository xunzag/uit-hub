import React from 'react'
import { Routes, Route } from 'react-router-dom'
import "./App.css"
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import People from './components/People'
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'


const App = () => {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login/> } />
          <Route path='Signup' element={<Signup/> } />
          <Route path='/about' element={<About />} />
          <Route path='/people' element={<People/>} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
    </>
  )
}

export default App
