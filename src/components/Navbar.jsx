import React from 'react'
import {Link} from "react-router-dom"

import "../style/navbar.scss"


const Navbar = () => {
  return (
 <div className="navbar">
    <h2>CRUD</h2>
   <Link to={"/"}>Home</Link>
   <Link to={"/all"}>Alluser</Link>
   <Link to={"/add"}>Adduser</Link>

 </div>
        
    
  )
}

export default Navbar
