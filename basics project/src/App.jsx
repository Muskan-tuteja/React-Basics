import Call from "./Call"
import Checkbox from "./Checkbox"
import Control from "./Control"
import Head, { Js, Login, Login1 } from "./Header"
import Jsx from "./Jsx"
import Props1 from "./Props1"
import { Props2 } from "./Props2"
import Props3 from "./Props3"
import Props4 from "./Props4"
import State from "./State"
import State1 from "./State1"
import Todo from "./TODO"

function Header() {
  return(
    <>
    <h1>Hello</h1>
    <Head/>
    <Login/>
    <Login1/>
    <Js/>
    <Todo/>
    <Jsx/>
    <Call/>
    <hr />
    <State/>
    <hr />
    <State1/>
    <hr />
    <Props1 name="muskan" age={34}/>
   
    
    </>
  )
  
}
export default Header

export function Appp(){
  let userName = "muskan123"
  let age = 34;
  return(
    <>
    <hr />
    <h1>Hello multiple export</h1>
    <Props2 name={userName} age={age}/>

    </>
  )
}
export function App1(){
  let UserObj={
    name:"muskan",
    age:27,
    email:"muskan@gmail.com"
  }
  let UserObj2={
    name:"mahi",
    age:23,
    email:"mahi@gmail.com"
  }
  return(
    <>
    <hr />
    <h1>Object Propes</h1>
    <Props3 user = {UserObj}/>
    <hr />
    <Props3 user = {UserObj2}/>
    </>
  )
}
export function App3(){
  let userArray= ["muskan",23,"muksan@gmail.com"]
  return(
    <>
     <hr />
    <h1>Array Function</h1>
    <hr />
    <Props4 user1={userArray}/>

     <hr />
    <Control/>

    <hr />
    <Checkbox/>
    </>
    
  )
}

