import { useState } from "react"

export const TodoApp= ()=>{
  const [task,setTask]=useState("")
return(
  <>
  <h1 className="text-center">ToDOList</h1>
  <input type="text" placeholder="enter your name" onChange={(e)=>setTask(e.target.value)}  />
  <button>Add</button>
  </>

)
}