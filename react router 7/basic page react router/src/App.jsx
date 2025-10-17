import "./App.css";
import {Link, Route, Routes} from "react-router"
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NavBar from "./NavBar";

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      {/* <h1>hellp react router</h1> */}
      </Routes>
    </>
  );
}

export default App;
