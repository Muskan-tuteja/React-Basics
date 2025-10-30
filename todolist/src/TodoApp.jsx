import { useState } from "react";

export const TodoApp = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleClick = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <>
      <h1 className="text-center m-10 text-amber-400 font-bold text-3xl">
         To-Do List
      </h1>

      <div className="flex justify-center items-center gap-3">
        <input
          value={task}
          className="bg-pink-200 outline-none p-3 w-80 rounded-md"
          type="text"
          placeholder="Enter your task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700"
          onClick={handleClick}
        >
          Add
        </button>
      </div>

      <ul className="mt-8 flex flex-col items-center">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="bg-amber-100 flex justify-between items-center w-96 p-3 rounded-md m-2 shadow"
          >
            <span>{todo}</span>
            <button
              className="bg-red-400 text-white px-4 py-1 rounded hover:bg-red-500"
              onClick={() => deleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
