
import './App.css'
import User from './assets/User'
import Array from './assets/Array'
import Click from './assets/Click'

function App() {
  let userObj= {
    names:"Muskan23",
    age:"23",
    course :"cse"

  }
  let userObj1= {
    names:"isha23",
    age:"33",
    course :"cse"

  }
  let arrName=['cu','iit','bpsmv','mikj']
 
  

  return (
    <>
      <h1>Props in React Js</h1>
     
      {/* <User name="muskan" age={30}/> */}
      <User user={userObj}/>
      <User user={userObj1}/>
      <Array names={arrName}/>
      <Click names="ishu"/>
    </>
  )
}

export default App
