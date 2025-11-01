import { Header } from "./Header"
import './App.css'
import { Products } from "./Products"
import { useDispatch } from "react-redux"
import { clearAllItems } from "./redux/slice"


function App() {
  const dispatch=useDispatch()
 

  return (
    <>
      <h1>Use Redux Toolkit</h1>
      <button onClick={()=>dispatch(clearAllItems())} className="btn1">Clear Cart</button>
      <Header/>
      <Products/>
    </>
  )
}

export default App
