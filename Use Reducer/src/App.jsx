
import { useReducer } from 'react'
import './App.css'
const emptyData={
    name:"",
    Password:"",
    age:"",
    city:"",
    address:""

  }
  const reducer=(data,action)=>{
    return{...data,[action.type]:[action.val]}
  }

function App() {
  const[state,dispatch]=useReducer(reducer,emptyData)
  console.log(state)
  
 

  return (
    <>
      <h1>Use reduces</h1>
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:"name"})} placeholder='Enter your name' />
      <br />
      <br />
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:"Password"})} placeholder='Enter your Password' />
      <br />
      <br />
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:"age"})} placeholder='Enter your age' />
      <br />
      <br />
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:"city"})} placeholder='Enter your city' />
      <br />
      <br />
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:"address"})} placeholder='Enter your address' />
      <br />
      <br />

      <ul>
        <li style={{listStyle:"none"}}>Name: {state.name}</li>
        <li style={{listStyle:"none"}}>Password: {state.Password}</li>
        <li style={{listStyle:"none"}}>Age: {state.age}</li>
        <li style={{listStyle:"none"}}>City: {state.city}</li>
        <li style={{listStyle:"none"}}>address: {state.address}</li>
      </ul>
      <button onClick={()=>console.log(state)}>Login</button>
    </>
  )
}

export default App
