import { useState } from "react"

export default function UserAdd() {
  const[name,setName] = useState([])
  const[age,setAge] = useState([])
  const[email,setEmail] = useState([])

  const CreatedUser = async()=>{
    console.log(name,age,email)
    const url = "http://localhost:3000/users"
    let response = await fetch(url,{
      method:"Post",
      body:JSON.stringify({name,email,age})
    })
    response = await response.json()
    if(response){
      alert("new user added")
    }
  }
  return (
    <>
      <h1>Add New Users Post Data ko store karne ki liaya </h1>
      <input onChange={(event)=>setName(event.target.value)} type="text" placeholder="enter name" />
      <br />
      <br />
      <input onChange={(event)=>setAge(event.target.value)} type="text" placeholder="enter age" />
      <br />
      <br />
      <input onChange={(event)=>setEmail(event.target.value)} type="text" placeholder="enter email" />
      <br />
      <br />
      <button onClick={CreatedUser}>Add Users</button>
    </>
  )
}
