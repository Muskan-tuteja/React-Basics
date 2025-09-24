
import './App.css'

function App() {
  function callFun(){
    alert("function Called")
  }
  let fruit=()=>{
    alert("apple")
  }
  let names=(lastname)=>{
    alert(lastname)
  }
  

  return (
    <>
    <h1>Event and function call</h1>
    <button onClick={callFun}>Click Me</button>
    <button onClick={fruit}>Click Me</button>
    <button onClick={()=>names("muskan123")}>names</button>
    
      
    </>
  )
}

export default App
