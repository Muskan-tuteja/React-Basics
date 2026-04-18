import { useState } from "react"

function State1(){
  const [state,setState]=useState("APLLLE")
  function handle() {
    setState("banan")
    
  }
  return(
    <>
    <h1>Partices state</h1>
    <h2>State:{state}</h2>
    <button onClick={handle}>change click</button>
    
    </>

  )
}
export default State1