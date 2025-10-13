import { useRef } from "react";
import "./App.css";
import Child from "./Child";

function App() {
  const inputRef=useRef(null)
  

  const handleInput =()=>{
    inputRef.current.focus()
    inputRef.current.value=1000
  }


  return (
    <>
      <h1>Froword Ref</h1>
      <Child ref={inputRef}/>
      <button onClick={handleInput}>Click me</button>
    </>
  );
}

export default App;
