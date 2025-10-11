import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    callOnce();
    dataOnce()
    
  }, [data,count]);

  function callOnce() {
    console.log("callOnce function Called");
  }
  function dataOnce(){
    console.log("data function called",data)
  }

  return (
    <>
      <h1>UseEffect Hooks</h1>
      <button onClick={() => setCount(count + 1)}>Counter {count}</button>
      <button onClick={() => setData(data + 1)}>Data {data}</button>
    </>
  );
}

export default App;
