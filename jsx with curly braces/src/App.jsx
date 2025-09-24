import "./App.css";

function App() {
  const names = "mukan";
  let userObj = {
    names:"muskan",
    email:"musj@gna",
    age : 23

  }
  let userArray = ["muskan","mahi","musu"]
  let age = 23;
  let x = 2;
  let y = 6;
  function fruit() {
    return "mango";
  }
  function sum(a, b) {
    return a + b;
  }
  
  return (
    <>
      <h1>JSX with Curly Braces</h1>
      <h1>
        {names},{age}
      </h1>
      <h1>{x + y}</h1>
      <h1>{fruit()}</h1>
      <h1>{sum(1, 20)}</h1>
      <h1>{names ? names : "useer is not defined"}</h1>
      <h1>{userObj.age}</h1>
      <h1>{userArray[2]}</h1>
    </>
  );
}

export default App;
