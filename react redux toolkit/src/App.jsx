import { Header } from "./Header";
import "./App.css";
import { Products } from "./Products";
import { useDispatch } from "react-redux";
import { clearAllItems } from "./redux/slice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartList from "./CartList";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <h1>Use Redux Toolkit</h1>
      <button onClick={() => dispatch(clearAllItems())} className="btn1">
        Clear Cart
      </button>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/cart" element={<CartList/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
