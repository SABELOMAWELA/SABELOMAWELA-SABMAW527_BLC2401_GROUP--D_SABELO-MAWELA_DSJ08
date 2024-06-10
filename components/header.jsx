import React from "react"
import { NavLink,Link } from "react-router-dom"


export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration:"none" ,
    color: '#161616',
  };
return (
<header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <NavLink to="/host" className={({isActive}) => isActive ? activeStyles :null }>Host</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? activeStyles :null }>About</NavLink>
          <NavLink to="/vans" className={({isActive}) => isActive ? activeStyles :null }>Vans</NavLink>
          <Link to="login" className="login-link"> <img src="../assets/images/avatar-icon.png" className="login-icon" /></Link>
        </nav>
      </header>)
      
    }