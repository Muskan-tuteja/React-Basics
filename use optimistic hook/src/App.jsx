
import { useEffect, useOptimistic, useState } from 'react'
import './App.css'

function App() {
 const [name,setName]=useState([])
 const[skills,setSkills]=useState([]) 
 const[optSkills,setOpSkills]=useOptimistic(skills)
 useEffect(()=>{
  getSkills()
 },[])
 const getSkills =async()=>{
  let resp= await fetch("http://localhost:3000/Skills")
  resp= await resp.json()
  setSkills(resp)
 }

 const addSkill=()=>{
  console.log("add user")
 }

  return (
    <>
    <h1>Use optimistics hook</h1>
    <input type="text" placeholder='enter your name' onChange={(e)=>setName(e.target.value)} />
    <button onClick={addSkill}>Add</button>
      
    </>
  )
}

export default App
