import React from "react";
import { NavLink,Outlet } from "react-router-dom";

export function HostLayout(){
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}
    return(
        <>
        <nav className="host-nav">
          <NavLink to="/host/dashboard" end style={({ isActive }) => isActive ? activeStyles : null}>dashboard</NavLink>
          <NavLink to="/host/vans" style={({ isActive }) => isActive ? activeStyles : null}>vans</NavLink>             
          <NavLink to="/host/income"  style={({ isActive }) => isActive ? activeStyles : null} >Income</NavLink>
          <NavLink to="/host/Reviews"  style={({ isActive }) => isActive ? activeStyles : null} >reviews</NavLink>
        </nav>
    <Outlet/>
    </>
    )
}