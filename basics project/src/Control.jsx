import React, { useState } from 'react'

const Control = () => {
  const[name,setName]=useState("")
  const[password,setPassword]=useState("")
  const[email,setEmail]=useState("")
  return (
    <>
    <h1>Contarol Components</h1>
    <form action="">
      <input type="text" value={name} onChange={(event)=>setName(event.target.value)}  placeholder='Enter Your Name' />
      <br />
      <br />
      <input type="text" value={password} onChange={(event)=>setPassword(event.target.value)}  placeholder='Enter Your Password' />
      <br />
      <br />
      <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)}  placeholder='Enter Your Email' />
      <br />
      <br />
      
    </form>
    <button onClick={()=>{setName('');setEmail('');setPassword('')}}>Clear</button>
    <h3>Name:{name}</h3>
    <h3>Password:{password}</h3>
    <h3>Email:{email}</h3>
      
    </>
  )
}

export default Control
