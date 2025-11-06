
import './App.css'


export default function App() {
  function Child(){
    return(
      <h1>Child componnts</h1>

    )
    
  }
  

  return (
    <>
      <h1>parent componnts</h1>
      <Child/>
    </>
  )
}

 
