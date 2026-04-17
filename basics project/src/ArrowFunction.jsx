function Arrow(){
  function callFun(){
    alert("Function call")
  }
  const fruit=(name)=>{
    alert(name)
  }
  return(
    <>
    <h1>Arrow Funtction</h1>
    <button onClick={callFun}>Click the Function</button>
    <h2>name</h2>
    <button onClick={()=>fruit("h11")}>Hello arrow function</button>
    </>
  )
}
export default Arrow