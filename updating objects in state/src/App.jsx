import { useState } from "react";
import "./App.css";
import User from "./User";

function App() {
  const [data,setData] = useState({
    name:"muskan",
    study:{
      course:"cse",
      degree:"b.tech"
    }
  })

  const handleData = (val) =>{
   data.name=val
  
   setData({...data})

  
  }
   const handleCourse = (course)=>{
    data.study.course = course

    setData({...data,study:{...data.study,course}})

   }
  return <>
  <h1>Updating Object in State</h1>
  <User handle={handleData} data={data} handleCourse={handleCourse} />
  </>;
}

export default App;
