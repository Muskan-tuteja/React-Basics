import "./App.css";
import useToggle from "./useToggle";

function App() {
  const [value, toggleValue] = useToggle(true);

  return (
    <>
      <button onClick={toggleValue}>Toggle Heading</button>
      <button onClick={()=>toggleValue(false)}>Hide Heading</button>
      <button onClick={()=>toggleValue(true)}>Show Heading</button>

      {value ? <h1>Custom Hooks In React Js</h1> : null}
    </>
  );
}


export default App;
