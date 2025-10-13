import "./App.css";
import User from "./User";

function App() {
  const displayName=(name)=>{
    alert(name)
  }
  const getUser=()=>{
    alert("age")
  }
  return (
    <>
      <h1>call parent component function from child component</h1>
      <User displayOut={displayName} name="ishr" getUser={getUser}/>
      <User displayOut={displayName} name="ishe" getUser={getUser}/>
      <User displayOut={displayName} name="i897" getUser={getUser}/>
      <User displayOut={displayName} name="ishaa" getUser={getUser}/>
    </>
  );
}

export default App;
