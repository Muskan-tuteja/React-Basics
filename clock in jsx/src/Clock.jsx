import { useEffect } from "react"
import { useState } from "react"

const Clock = ({color}) =>{

  const [time,setTime] = useState(0)

  useEffect(() =>{
    setInterval(() =>{
      setTime(new Date().toLocaleTimeString())
    },1000)
  },[])
  return(
    <h1 style={{color:color, background:"blue", width: "300px", padding:"10px", borderRadius:"100px", textAlign:"center", display:"flex", justifyContent:"center",alignItems:"center",marginLeft:"100px"}}>{time}</h1>


  )
}
export default Clock