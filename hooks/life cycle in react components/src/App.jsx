
import { useState } from 'react'
import './App.css'
import Total from './Total'

function App() {
  const[count,setCount] = useState(0)
  const[total,setTotal] = useState(0)
  const[display,setDisplay] = useState(true)
  

  return (
    <>
    {
    display? <Total count={count} total={total}></Total>:null
}
    <h1>life Cycle Componets</h1>
    <button onClick={() =>setCount(count+1)}>counter</button>
    <button onClick={() =>setTotal(total+1)}>total</button>
    <button onClick={() => setDisplay(!display)}>Toggle</button>
    

    </>
  )
}

export default App
