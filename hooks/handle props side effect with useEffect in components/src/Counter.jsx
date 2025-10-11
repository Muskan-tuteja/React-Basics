import { useEffect } from "react"

function Counter({count,total}){

  const handleCounter=()=>{
    console.log("handleCounter Called")
  }
  useEffect(()=>{
     handleCounter()

  },[count])
 
  return(
    <>
      <h2>Counter Components {count}</h2>
    <h5>total Components {total}</h5>
    </>
  

  )
}
export default Counter