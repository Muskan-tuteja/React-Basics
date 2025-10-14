import { useState } from "react";
import "./App.css";
import People from "./People";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const handleUser = () => {
    setUsers([...users, user]);
  };
  const Total=users.length;
  const last=users[users.length-1]
  const unqiue=[...new Set(users)].length

  return (
    <>

      <h1>Dervied State Used</h1>
      
      <h2>Total User : {Total} </h2>
      <h2>Last User : {last} </h2>
      <h2>Unique User : {unqiue} </h2>


       <People  setUser={setUser} handleUser={handleUser} />
      {users.map((item, index) => (
        <h4 key={index}>{item}</h4>
      ))
      }
     
    </>
  );
}

export default App;
