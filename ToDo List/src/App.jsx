import { useState } from "react";
import "./App.css";

function App() {
  const [todolist, setTodolist] = useState([]);

  const saveToDoList = (event) => {
    const toname = event.target.toname.value;

    event.preventDefault();
  };

  return (
    <>
      <h1>ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="toname" /> <button>Save</button>
      </form>
    </>
  );
}

export default App;
