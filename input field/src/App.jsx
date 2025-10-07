
import { useState } from 'react'
import './App.css'

function App() {
  const [val,setVal] = useState("")
 

  return (
    <>
    <h1>Get Input Field Value</h1>
    <input type="text" value ={val} onChange={(event) => setVal(event.target.value)} placeholder='Enter User Name' />
    <h1>{val}</h1>
    <button onClick={()=>setVal("")}>Clear Value </button>
      
    </>
  )
}

export default App
