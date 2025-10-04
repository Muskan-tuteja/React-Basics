
import './App.css'
import User from './assets/User'
import Array from './assets/Array'
import Click from './assets/Click'
import Wrapper from './Wrapper'

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
      <Wrapper color="blue">
        <h1>hello harsh wrapper</h1>
      </Wrapper>
      <Wrapper color="pink">
        <h1>hello muskan wrapper</h1>
      </Wrapper>
      <Wrapper>
        <h1>hello isha wrapper</h1>
        <h2>is kihion njikop0</h2>
      </Wrapper>
    </>
  )
}

export default App
