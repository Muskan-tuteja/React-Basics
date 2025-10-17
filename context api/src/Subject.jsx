import { useContext } from "react"
import { SubjectContext } from "./ContextData"


 export default function Subject(){
  const subject=useContext(SubjectContext)
  return(
    <>
    <div style={{background:"skyblue", color:"black",padding:10}}>
    <h1>Subject Components is : {subject}</h1>
   
    </div>
    </>
  )
}