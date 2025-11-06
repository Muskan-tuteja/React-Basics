
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [counter,setCounter] = useState(0)
  const [data,setData] = useState(0)
  useEffect(()=>{
    console.log("user effect 1")
  },[data])
  useEffect(()=>{
    console.log("user effect 1")
  },[data,counter])


  return (
    <>
      <h1>UseEffect is interview</h1>
      <button onClick={()=>setCounter(counter+1)}>Counter:{counter}</button>
      <button onClick={()=>setData(data+1)}>Data:{data}</button>
    </>
  )
}

export default App
