import { useState, useTransition } from "react";
import "./App.css";
import Pending from "./Pending";

function App() {
  const [pending, startTransition] = useTransition();
  const handleButton = async () => {
    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 5000));
    });
  };
  return (
    <>
      <h1>UseTransition Hook in React Js 19</h1>
      {
        pending?
        <img style={{width:"100px"}} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" />:null
      }
      <Pending pending={pending} handleButton={handleButton} />
    </>
  );
}

export default App;
