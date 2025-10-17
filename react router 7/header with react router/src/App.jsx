import { Link, Route, Routes } from "react-router"
import Home from "./Home"
import About from "./About"
import Login from "./Login"



function App() {
 

  return (
    
    <>
     <div style={{ }}>
    <h1 style={{background:"gray", color:"white"}}>Logo</h1>
   
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/about">About</Link>
    </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
