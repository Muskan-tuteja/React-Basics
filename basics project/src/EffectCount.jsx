import React, { useEffect, useState } from 'react'

const EffectCount = () => {
  const[count,setCount]=useState(0)
  const[data,setData]=useState(0)

  useEffect(()=>{
      handleFn()
  },[count])

  function handleFn(){
    console.log("print the count",count)
  }
  // handleFn()
  return (
    <div>
      <h1>Effect Counter</h1>
      <button onClick={()=>setCount(count+1)}>Counter:{count}</button>
      <br />
      <br />
      <button onClick={()=>setData(count+1)}>Data: {data}</button>
      
    </div>
  )
}

export default EffectCount
