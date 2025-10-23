
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

export default function UserList() {
    const url = "http://localhost:3000/users";
  const[useData, setUseData] = useState([])
  const[loading,setLoading] = useState(false)
   useEffect(()=>{
    setLoading(true)
    getUserData()
      
    },[])
  const getUserData = async ()=>{
   
    const url="http://localhost:3000/users"
    let response= await fetch(url)
    response = await response.json()
    console.log(response)
    setUseData(response)
    setLoading(false)

  }
  const detedUser = async(id)=>{
   let response = await fetch(url+"/"+id,{
    method:"delete"
   })
   response = await response.json()
   if(response){
    alert("record deleted ")
    getUserData()
   }
  }
 

  return (
    <>
   
    {
      !loading?
      useData.map((user,index)=>(
        <h1 key={index}>{user.name}
        <li>{user.email}</li>
        <li>{user.age}</li>
        <li><button onClick={()=>detedUser(user.id)}>Deleted</button></li>
        </h1>

      ))
      :<h2>Loading...</h2>
    }
      
    </>
  )
}


