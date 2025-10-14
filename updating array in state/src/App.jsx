
import { useState } from 'react'
import './App.css'
import Users from './Users'

function App() {
  const [people,setPeople] = useState([
    'muskan','isha','harsh'
  ])
  const[detalis,setDetalis] = useState([
    {name:"muskan",age:"23"},
    {name:"isha",age:"12"},
    {name:"harsh",age:"29"}
  ])
  const handlingUpdate =(name)=>{
    people[people.length-1]=name
    setPeople([...people])
    console.log(people)
  }
  const handlingAge =(age)=>{
    detalis[detalis.length-1].age=age
    setDetalis([...detalis])
    
  }
  

  return (
    <>
    <h1>Updating Array in State</h1>
    <Users   detalis ={  detalis} handle={handlingUpdate} handlingAge={handlingAge} people={ people}/>
   
      
    </>
  )
}

export default App
