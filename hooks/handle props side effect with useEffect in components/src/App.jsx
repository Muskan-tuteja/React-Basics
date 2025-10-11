
import { useState } from 'react'
import './App.css'
import Counter from './Counter'

function App() {
  const  [count,setCount] = useState(0)
  const [ total,setTotal] = useState(0)
 
  return (
  
     <>
     <h1>Handle Props side effect with use effect in components</h1>
     <Counter count={count} total={total}/>
     <button onClick={() =>setCount(count+1)}>Click ME</button>
     <button onClick={() =>setTotal(total+1)}>Click Total</button>
     </>
  )
}

export default App
