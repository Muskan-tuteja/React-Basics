import Call from "./Call"
import Head, { Js, Login, Login1 } from "./Header"
import Jsx from "./Jsx"
import State from "./State"
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
    
    </>
  )
  
}
export default Header