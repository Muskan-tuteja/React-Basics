import { useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const inputHandle = () => {
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.placeholder = "enter you password";
  };

  return (
    <>
      <h1>UseRef</h1>
      <input ref={inputRef} type="text" placeholder="enter user name" />
      <button onClick={inputHandle}>Focus on input</button>
    </>
  );
}

export default App;
