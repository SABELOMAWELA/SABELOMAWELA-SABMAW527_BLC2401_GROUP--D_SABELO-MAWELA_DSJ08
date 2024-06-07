import React from "react"
import { Link,NavLink } from "react-router-dom"


export default function Header() {
  const isActive = {
    fontWeight: "bold",
    textDecoration:"none" ,
    color: '#161616',
  };
return (
<header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <NavLink to="/host"className={({isActive}) => isActive ? "activeLink" :null }>Host</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "activeLink" :null }>About</NavLink>
          <NavLink to="/vans" className={({isActive}) => isActive ? "activeLink" :null }>Vans</NavLink>
        </nav>
      </header>)
      
    }