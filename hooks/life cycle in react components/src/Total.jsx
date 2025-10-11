import { useEffect } from "react"

const Total = ({count,total}) =>{

  function handleCounter(){
    console.log("mounting phase only")

  }
  function handletotal(){
    console.log("upade pahse only")
  }

  useEffect(() =>{
      handleCounter()

  },[])
  useEffect(() =>{
     handletotal()

  },[total])

  useEffect(()=>{
    return ()=>{
      console.log("ummount phase only")
    }
  },[])

  return(
    <>
    <h2>Counter is update {count}</h2>
    <h2> total is update {total}</h2>
    </>

  )
}
export default Total