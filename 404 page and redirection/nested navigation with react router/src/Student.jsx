import {NavLink, Outlet,Link } from "react-router-dom";

export default function Student(){
  return(
    <>
    <h1 className="page">Information  Student</h1>
    <h3><Link to="/">Go Back to Home</Link></h3>
    <NavLink className="studnt" to="">Class</NavLink>
    <NavLink className="studnt" to="age">Age</NavLink>
  

    <Outlet/>
    </>
  )
} 