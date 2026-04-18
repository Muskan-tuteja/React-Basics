import React, { useEffect, useState } from 'react'

const Effect = () => {
  const[count,setCount]=useState(0)
  const[data,setData]=useState(0)

//   useEffect (()=>{
// CountFn()
//   },[])
//   useEffect (()=>{
// CountFn()
//   },)
  useEffect (()=>{
CountFn()
  },[data])

  // function CountFn(){
  //   console.log("counter function",count)
  // }
  function CountFn(){
    console.log("counter function",data)
  }
  
  return (
    <div>
      <h1>Useeffect define</h1>
      <button onClick={()=>setCount(count+1)}>Counter{count}</button>
     <button onClick={()=>setData(count+1)}>Data{data}</button>
    </div>
  )
}

export default Effect
