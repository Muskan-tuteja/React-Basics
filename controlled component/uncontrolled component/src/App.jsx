import "./App.css";
import { useRef } from "react";

function App() {

  const userRef=useRef()
  const passRef=useRef()

  const handleForm = (event) => {
    event.preventDefault();

    const user = document.querySelector("#user").value;
    const password = document.querySelector("#password").value;
    console.log(user, password);
  };
  const handleFormRef =(event)=>{
    event.preventDefault()
   const user = userRef.current.value 
     const password = passRef.current.value 
    console.log("use Ref",user,password)
 
    
  }
  return (
    <>
      <h1>Uncontrolled Component</h1>
      <form action="" onSubmit={handleForm}>
        <input type="text" id="user" placeholder="enter user name" />
        <br />
        <br />
        <input type="number" id="password" placeholder="enter user password" />
        <br />
        <br />
        <button>Submit</button>
      </form>

      <hr />
      <h1>Uncontrolled Component with Use Ref</h1>
      <form action="" onSubmit={handleFormRef}>
        <input type="text" ref={userRef} id="userRef" placeholder="enter user name" />
        <br />
        <br />
        <input type="number" ref={passRef} id="passwordRef" placeholder="enter user password" />
        <br />
        <br />
        <button>Submit with Ref</button>
      </form>
    </>
  );
}

export default App;
