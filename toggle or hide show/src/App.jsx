
// import './App.css'
// import { useState } from 'react'
// import User from './User'

// function App() {
//   const [display,setDisplay]=useState(true)

//   return (
//     <>
//     <h1>Toggle in React js</h1>
//     <button onClick={()=>setDisplay(!display)}>Toggle</button>
//     {/* {
//       display? <h2>Muskan</h2>:null

//     } */}
//     {
//     display ? <User/>:null
// }
    
    
      
//     </>
//   )
// }

// export default App

import './App.css'
import { useState } from "react"
function App(){
  const [count, setCount]= useState(0)
  return (
    <>
    <h1>Multiple Condition In React Js</h1>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Counter</button>
    {
      count==0?<h1>Conditional 0</h1>
      :count==1?<h1>Conditional 1</h1>
      :count==2?<h1>Conditional 2</h1>
      :count==3?<h1>Conditional 3</h1>
      :count==4?<h1>Conditional 4</h1>
      :count==5?<h1>Conditional 5</h1>
      :<h1>Other Condtion</h1>
      
      
    }
    </>
  )
}
export default App