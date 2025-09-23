import "./App.css";
import Login,{Proflie,Setting, UserKey} from "./component/user";

function App() {
  return (
    <>
      <h1>Baiscs Import and Export</h1>
      <Login></Login>
      <Proflie></Proflie>
      <Setting></Setting>
      <h1>{UserKey}</h1>
    </>
  );
}

export default App;
