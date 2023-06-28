import React from 'react'
import Adduser from './components/Adduser'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from './components/Home'
import Alluser from './components/Alluser'
import Edituser from './components/Edituser'
import {Toaster} from "react-hot-toast"


const App = () => {
  return (
   <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/all' element={<Alluser />}/>
      <Route path='/add' element={<Adduser />}/>
      <Route path='/edit/:id' element={<Edituser />}/>
    </Routes>
    <Toaster/>
   </Router>
  )
}

export default App

