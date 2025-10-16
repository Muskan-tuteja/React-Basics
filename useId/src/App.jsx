
import { useId } from 'react'
import './App.css'
import From from './From'

function App() {
  const name = useId()


  return (
    <>
    <h1>Name:{name}</h1>
    <From/>
      
    </>
  )
}

export default App
