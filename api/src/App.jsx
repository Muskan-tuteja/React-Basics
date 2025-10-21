import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [userData,setUserData]= useState([])
  useEffect(() => {
    getUsersData();
  }, []);
  async function getUsersData() {
    const url = "https://dummyjson.com/users";
    let response = await fetch(url);
    response = await response.json();
    setUserData(response.users)
  }
  console.log(userData)

  return (
    <>
      <h1>Fetch data from API</h1>
      {
        userData && userData.map((user)=>(
         <ul>
          <li>{user.firstName}</li>
          <li>{user.lastName}</li>
          <li>{user.age}</li>
         </ul>
        ))
      }
    </>
  );
}

export default App;
