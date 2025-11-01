import React from "react";
import  Navbar  from "./Navbar";
import  Footer  from "./Footer";
import  Product  from "./Product";
import "./App.css"
import AddToCart from "./AddToCart";

function App() {
  return (
    <>
      <Navbar />
      <Product />
      <Footer />
      <AddToCart/>
    </>
  );
}

export default App;
