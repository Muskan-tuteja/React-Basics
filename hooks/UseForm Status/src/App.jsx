import "./App.css";
import User from "./User";

function App() {

  const handleSubmit=async(e)=>{
    e.preventDefault()
    await new Promise(res=>setTimeout(res,2000))
    console.log("submit")
  }
  return <>
  <h1>useFormStatus Hook in React in Js 19</h1>
  <User handleSubmit={handleSubmit}/>
  </>;
}

export default App;
