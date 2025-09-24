import { useState } from "react"

const Counter=()=>{
  const [count,setCount]=useState(0)
  const [rCounter,setRCounter]=useState(10)
  return(
    <>
    <h1>
      Counter:{count}
    </h1>
    <h2>R counter:{rCounter}</h2>
    <button onClick={()=>setCount(count+1)}>Update Counter</button>
    <button onClick={()=>setRCounter(rCounter-1)}>Update Counter</button>
    </>
  )

}
export default Counter