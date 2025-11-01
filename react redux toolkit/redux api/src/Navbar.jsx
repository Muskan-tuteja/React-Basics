import React from "react";
import "./app.css";

 const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">MyShop</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="nav-cart">
        <i className="fa-solid fa-cart-shopping"></i>
        <span className="cart-badge">2</span>
      </div>
    </header>
  );
};
export default Navbar