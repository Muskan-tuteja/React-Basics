import { useState } from "react"
import TwoState from "./TwoState";
function State(){
  const[fruit,setFruit]=useState("apple");

  const handleFunction=()=>{
    setFruit("banan")
  }
  return(
    <>
    <h1>State Define</h1>
    <h2>{fruit}</h2>

    <button onClick={handleFunction}>Change fruit</button>
    <hr />
    <TwoState/>
    
    </>
  )
}
export default State