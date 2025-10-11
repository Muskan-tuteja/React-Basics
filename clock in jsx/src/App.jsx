
import { useState } from 'react'
import './App.css'
import Clock from './Clock'

function App() {
  const [color,setColor] = useState("pink")


  return (
    <>
    <h1>Digital Clock in React js </h1>
    <select style = {{width:"290px",height:"30px", right:"0"}}onChange={(event) => setColor(event.target.value)}>
      <option value={"red"}>Red</option>
      <option value={"green"}>Green</option>
      <option value={"pink"}>Pink</option>
      <option value={"black"}>Black</option>
    </select>
   <Clock color={color}/>
    </>
  )
}

export default App
