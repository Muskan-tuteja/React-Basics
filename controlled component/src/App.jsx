
import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

 

  return (
    <>
    <h1>Controller Components</h1>
    <form action="" method='get' onSubmit={(e) => e.preventDefault()}>
      <input type="text" value={name}onChange={(event)=>setName(event.target.value)} placeholder='Enter Your Name' />
      <br />
      <br />
      <input type="text" value={password} onChange={(event)=>setPassword(event.target.value)}  placeholder='Enter Password' />
      <br />
      <br />
      <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)}  placeholder='email' />
      <br />
      <br />
      <button>Submit</button>
      <button onClick={()=>{setEmail(""); setName(""); setPassword("")}}>Clear</button>
      <h1>{name}</h1>
     
      <h1>{password}</h1>
       <h1>{email}</h1>
    </form>
      
    </>
  )
}

export default App
