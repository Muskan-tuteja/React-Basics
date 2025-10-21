import { Link, NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="header">
        <h1>Logo</h1>

        <div>
          <ul className="nav">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/user/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/student">Student</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
            <li>
              <NavLink to="/users/list">List</NavLink>
            </li>
          </ul>
        </div>
       
      </div>
       <Outlet/>
    </>
  );
}
