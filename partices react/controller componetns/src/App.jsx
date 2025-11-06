
import { useState } from 'react'
import './App.css'
import User from './User'

function App() {
  const [user,SetUser] = useState("")

  return (
    <>
      <h1>Controller componets</h1>
      <User name={SetUser} tage={user}/>
    </>
  )
}

export default App
