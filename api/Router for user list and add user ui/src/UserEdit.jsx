import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function UserEdit() {
  const { id } = useParams();
  const [name, setName] = useState([]);
  const [age, setAge] = useState([]);
  const [email, setEmail] = useState([]);
  const url = "http://localhost:3000/users/" + id;
  const navigate = useNavigate()

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setName(response.name);
    setAge(response.age);
    setEmail(response.email);
  };
  const updateUser = async () => {
    console.log(name, age, email);
  
    let response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify({ name, email, age }),
    });
    response = await response.json();
    if (response) {
      alert("Update user");
      navigate("/")
    }
  };
  return (
    <>
      <h1>Edit Usser</h1>
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={name}
        placeholder="Enter Name"
      />
      <br />
      <br />
      <input
        type="text"
        onChange={(event) => setAge(event.target.value)}
        value={age}
        placeholder="Enter age"
      />
      <br />
      <br />
      <input
        type="text"
        onChange={(event) => setEmail(event.target.value)}
        value={email}
        placeholder="Enter email"
      />
      <br />
      <br />
      <button onClick={updateUser}>Update User</button>
    </>
  );
}
