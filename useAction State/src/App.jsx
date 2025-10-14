import { useActionState } from "react";
import "./App.css";

function App() {
  const handleSubmit = async (previousData, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");

    await new Promise((res) => setTimeout(res, 2000));
    // console.log("handle Submite Called", name, password);
     if(name && password){
    return {message:"Data is Submited",name, password}
  }else{
    return {error:"Failed to submit.Enter Proper Data",name, password}
  }
  };
 

  const [data, action, pending] = useActionState(handleSubmit, undefined);
  console.log(data)


  return (
    <>
      <h1>UseActionState Hook in React JS</h1>
      <form action={action}>
        <input defaultValue={data?.name} type="text" placeholder="enter name" name="name" />
        <br />
        <br />
        <input defaultValue={data?.password}
          type="password"
          placeholder="enter your passwor"
          name="password"
        />
        <br />
        <br />
        <button disabled={pending}>Submit Now</button>
        
         {
        pending?
        <img style={{width:"50px"}} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" />:null
      }
        <br />
        <br />
       
      </form>
      
     
       {
          data?.error && <span style={{color:"red"}}>{data?.error}</span>
        }
        {
          data?.message && <span style={{color:"green"}}>{data?.message}</span>
        }
       
        <h3>Name: {data?.name} </h3>
        <h3>password: {data?.password} </h3>
    </>
  );
}

export default App;
