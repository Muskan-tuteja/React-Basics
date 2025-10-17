import {BrowserRouter, Link, Route, Routes} from "react-router"
function App() {
  return (
  <>
  <BrowserRouter>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/contact">Contact</Link>
  <Routes>
    <Route path="/" element={<h1>Home</h1>}/>
    <Route path="/about" element={<h1>About the Components</h1>}/>
    <Route path="/contact" element={<h1>Contact the Components</h1>}/>
  </Routes>
  </BrowserRouter>
  
  </>
  )
}

export default App;
