
import { useState } from 'react'
import './App.css'

function App() {

  const[gender,setGender] = useState("female")
  const[city,setCity] = useState("Hansi")
  

  return (
    <>
    <h1>Handle Radio and Dropdown</h1>
    <h3>Select Gender</h3>
    <input type="radio" onChange={(event)=>setGender(event.target.value)} name='gender' value={"male"} checked={gender== 'male'}id='male' />
    <label htmlFor="male">Male</label>
    <input type="radio" onChange={(event)=>setGender(event.target.value)} name='gender' value={"female"} checked={gender== 'female'}id='female' /><label htmlFor="female">Female</label>
    <h2>Select Gender : {gender}</h2>
    <br />
    <br />
    <h4>Select City</h4>
    <select onChange={(event)=>setCity(event.target.value)} defaultValue={"Hansi"}>
      <option value="noida">Nodia</option>
      <option value="delhi">Delhi</option>
      <option value="Hansi">Hansi</option>
    </select>
    <h2>Select City : {city}</h2>
     
    </>
  )
}

export default App
