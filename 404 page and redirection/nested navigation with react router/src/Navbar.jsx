import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="header">
        <h1>Logo</h1>

        <div>
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/student">Student</Link>
            </li>
          </ul>
        </div>
       
      </div>
       <Outlet/>
    </>
  );
}
