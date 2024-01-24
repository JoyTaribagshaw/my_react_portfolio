import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Route, 
Routes } from  'react-router-dom'
import './App.css'
import Navbar from './Pages/Home/Navbar'
import Home from './Pages/Home/Homescreen'

function App() {

  return (
    <div className='App'>
    <Router>
      <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
      </div>
    </Router>
    </div>
  )
}

export default App
