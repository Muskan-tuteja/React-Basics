
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App() {
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
 

  return (
    <>
    <h1>Integrate JSON Server API and Loader</h1>
    {
      !loading?
      useData.map((user,index)=>(
        <h1 key={index}>{user.name}</h1>
      ))
      :<h2>Loading...</h2>
    }
      
    </>
  )
}

export default App
