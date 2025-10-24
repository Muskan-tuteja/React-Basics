
import { useState } from 'react'
import './App.css'

import { lazy } from 'react'
import { Suspense } from 'react'
const User =lazy(()=>import("./User"))

function App() {
  const[load,setLoad] = useState(false)
 

  return (
    <>
      <h1>Lazy Loading</h1>
      {
        load? <Suspense fallback={<h3>Loading...</h3>}><User/></Suspense>:null
      }
      <button onClick={()=>setLoad(true)}>Load User</button>
    </>
  )
}

export default App
