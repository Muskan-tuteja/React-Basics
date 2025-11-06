import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import User from "./User";

function App() {
  return (
  <>
  <h1>welcom is componts</h1>

    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/user/1">User 1</Link> | 
        <Link to="/user/2">User 2</Link>
      </nav>

      <Routes>
        {/* Static route */}
        <Route path="/" element={<Home />} />
        {/* Dynamic route */}
        <Route path="/user/:id" element={<User/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
