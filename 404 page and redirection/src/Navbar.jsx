import { Link } from "react-router";
import About from "./about";

export default function Navbar(){
  return(
    <>
    <About/>
    <h1>logo </h1>
    <Link to="/">About</Link>
     <Link to='/login'> Login</Link>

    
    </>
  )
}