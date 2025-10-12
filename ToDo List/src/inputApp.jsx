import { useState } from "react";
import { MdDelete } from "react-icons/md";

const InputApp = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  const handleInput = (value) => {
    setInput(value);
  };

  const handleForm = (event) => {
    event.preventDefault();
    if (!input.trim()) return;
    setTask((prev) => [...prev, input]);
    setInput("");
  };

  const handleDelete = (indexToDelete) => {
    setTask((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  console.log("All Tasks:", task);

  return (
    <>
      <h1 className="font-semibold text-5xl m-8 text-white text-center">
        Todo List
      </h1>

      <div className="flex justify-center items-center mb-6">
        <form onSubmit={handleForm} className="flex">
          <input
            className="bg-slate-100 text-2xl h-10 px-3 rounded-lg outline-none"
            type="text"
            placeholder="Enter Task"
            value={input}
            onChange={(event) => handleInput(event.target.value)}
          />
          <button
            type="submit"
            className="text-black bg-amber-200 font-semibold h-10 px-4 ml-3 rounded-lg hover:bg-amber-300"
          >
            Add Task
          </button>
        </form>
      </div>

      <ul className="flex flex-col items-center gap-3">
        {task.length === 0 ? (
          <p className="text-gray-400 text-xl"></p>
        ) : (
          task.map((item, index) => (
            <li
              key={index}
              className="w-1/3 bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 shadow-md flex justify-between items-center"
            >
              <span>{index + 1}. {item}</span>
              <button 

                onClick={() => handleDelete(index)}
                className="bg-red-500 px-2 py-1 rounded hover:bg-red-600 text-white font-semibold" 
              >
                <MdDelete />
                
              </button>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default InputApp;
