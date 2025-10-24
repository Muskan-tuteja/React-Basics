import { useActionState } from "react";
import "./App.css";

function App() {
  const handleLogin = (prevData, formdata) => {
    let name = formdata.get("name");
    let password = formdata.get("password");
    let regex = /^[A-Z0-9]+$/i;
    if (!name || name.length > 5) {
      return { error: "Name can not be empty on Name Should Not Container More Then 5 Char",name,password };
    } else if (!regex.test(password)) {
      return { error: "Password can contain only number and alpha bat" };
    } else {
      return { message: "Login Done" };
    }
  };
  const [data, actionn, pending] = useActionState(handleLogin);
  

  return (
    <>
      <h1>Validation with useAction State in React</h1>
      {
       data?.message && <span style={{color:"green"}}>{data?.message}</span>
      }
      {
       data?.error && <span style={{color:"red"}}>{data?.error}</span>
      }
      <form action={actionn}>
        <input defaultValue={data?.name} type="text" name="name" placeholder="Enter user name" />
        <br />
        <br />
        <input defaultValue={data?.password} type="text" name="password" placeholder="Enter user password" />
        <br />
        <br />
        <button>Login</button>
      </form>
    </>
  );
}

export default App;
