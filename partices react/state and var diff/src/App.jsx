
import './App.css'
import State from './State'

function App() {
  let Color="red"
 

  return (
    <>
    <h1>State and var diff</h1>
    <h2>{Color}</h2>
      <button onClick={()=>Color="green"}>change color</button>
      <State/>
    </>
  )
}

export default App
