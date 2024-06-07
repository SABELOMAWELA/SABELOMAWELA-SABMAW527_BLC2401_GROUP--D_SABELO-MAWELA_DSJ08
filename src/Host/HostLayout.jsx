import React from "react";
import { Link,Outlet } from "react-router-dom";

export function HostLayout(){
    return(
        <>
        <nav className="host-nav">
            <Link to="/dashboard">dashboard</Link>
          <Link to="/host/income">Income</Link>
          <Link to="/host/Reviews">reviews</Link>
        </nav>
    <Outlet/>
    </>
    )
}