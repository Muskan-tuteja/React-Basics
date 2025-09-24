
import './App.css'
import { useState } from 'react'
import User from './User'

function App() {
  const [display,setDisplay]=useState(true)

  return (
    <>
    <h1>Toggle in React js</h1>
    <button onClick={()=>setDisplay(!display)}>Toggle</button>
    {/* {
      display? <h2>Muskan</h2>:null

    } */}
    {
    display ? <User/>:null
}
    
    
      
    </>
  )
}

export default App
