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
        </nav>
      </header>)
      
    }