
import './App.css'
import {Route, Routes} from 'react-router'
import Navbar from './Navbar'
import About from './about'
import Login from './Login'
import PageNotFound from './PageNotFound'

function App() {
 

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<About/>}  ></Route>
        <Route path='/login1' element={<Login/>}  ></Route>
        <Route path='/*' element={<PageNotFound></PageNotFound>}></Route>


      </Routes>
    </>
  )
}

export default App
