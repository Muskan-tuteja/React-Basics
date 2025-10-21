import About from "./About";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Student from "./Student";
import "./App.css";
import PageNotFound from "./pagenotfound";
import Class from "./Class";
import Age from "./Age";

function App() {
  return (
    <>
      {/* <Navbar /> */}


      <Routes>

        <Route element={<Navbar/>}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<About />}></Route>

        </Route>
        
        <Route path="/student" element={<Student />}>
          {" "}
          <Route index element={<Class />}></Route>
          <Route path="age" element={<Age />}></Route>
        </Route>
        {/* <Route path="/*" element={<PageNotFound />}></Route> */}
        <Route path="/*" element={<Navigate to="/"/>}></Route>
      </Routes>
    </>
  );
}

export default App;
