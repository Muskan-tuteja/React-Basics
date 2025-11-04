import { useState } from "react"

function State() {
  const[state,setState]=useState("blue")
 

  return (
    <>
    <h1>State and var diff</h1>
    <h2>{state}</h2>
    
      <button onClick={()=>setState("green")}>change color</button>
    </>
  )
}

export default State