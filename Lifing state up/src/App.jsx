import "./App.css";
import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  return (
    <>
      <h1>Lifing State up</h1>
      <AddUser setAdd={setUser} />
      <DisplayUser user={user} />
    </>
  );
}

export default App;
