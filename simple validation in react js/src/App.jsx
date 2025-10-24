
import { useState } from 'react'
import './App.css'

function App() {
  const [name,setName] = useState('')
  const [pass,setPass] = useState('')

  const handleName=()=>{
    console.log(event.target.value)
    if(event.target.value.length>5){
      setName("Please enter valid username. only 5 char allowed")
    }else{
      setName("")
    }
  }
  const handlePass=()=>{
    let regex= /^[A-Z0-9]+$/i;
    console.log(event.target.value)
    if(regex.test(event.target.value)){
      setPass("")
    }else{
      setPass("please enter your password.only number and alphabat")
    }
  }
  

  return (
    <>
      <input onChange={handleName} type="text" placeholder='Enter name ' />
      <span style={{color:"red"}}>{name && name}</span>
      <br />
      <br />
      <input onChange={handlePass} type="text" placeholder='Enter password' />
     <span style={{color:"red"}}>{pass && pass}</span>
      <br />
      <br />
      <button disabled={name || pass}>Login</button>
    </>
  )
}

export default App
