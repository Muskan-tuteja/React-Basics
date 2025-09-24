import { useState } from 'react'
import './App.css'
import Counter from './Counter'

function App() {
  let [fruit,setFruit]=useState("Apple")
  let handleFruit=()=>{
    setFruit("Banana123")
  }
  
  

  return (
    <>
    <h1>State in React Js</h1>
    <h1>{fruit}</h1>
    <button onClick={handleFruit}>Change Fruit Name</button>
    <Counter></Counter>
  
      
    </>
  )
}

export default App
