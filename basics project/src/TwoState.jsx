import { useState } from "react"

function TwoState(){
  const[count,setCount]=useState(0)
  const[rCount,setRCount]=useState(20)
  return(
    <>
    <h1>Counter:{count}</h1>
    <h1>Reversice:{rCount}</h1>
    <button onClick={()=>setCount(count+1)}>Counter change</button>
    <button onClick={()=>setRCount(rCount-1)}>Reverices Count</button>
    </>
  )
}
export default TwoState;