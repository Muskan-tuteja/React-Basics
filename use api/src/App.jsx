import { Suspense } from "react";
import "./App.css";
import { User } from "./User";
const ffetchData = () =>
  fetch("https://dummyjson.com/products").then((response) => response.json());

const userResourse = ffetchData();

function App() {
  return (
    <>
      <h1>Use Api in react js</h1>
      <Suspense fallback={<p>Loading...</p>}>
      <User userResourse={userResourse} />
      </Suspense>
    
    </>
  );
}

export default App;
