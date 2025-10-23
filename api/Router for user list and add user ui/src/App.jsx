
import './App.css'
import UserAdd from './UserAdd'
import UserList from './UserList'
import {Routes,Route, NavLink} from 'react-router'


function App() {
 

  return (
    <>
    <ul>
      <li>
      
        <NavLink to="/">Home</NavLink>
        <NavLink to="/add">Add User</NavLink>

      </li>
    </ul>
    <h1>Make Routes and pages for add user and user list ui</h1>
    {/* <UserList/> */}
    <Routes>
      <Route path="/" element={<UserList/>}/>
      <Route path="/add" element={<UserAdd/>}/>

        

    </Routes>
      
    </>
  )
}


export default App
