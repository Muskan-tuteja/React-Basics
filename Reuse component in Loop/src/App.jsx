
import './App.css'
import User from './User';

function App() {
    const userData = [
    {
      name: "muskan",
      age: "23",
      email: "muskan@gail.com",
      id: 1,
    },
    {
      name: "mahi",
      age: "20",
      email: "mahiskan@gail.com",
      id: 2,
    },
    {
      name: "musu",
      age: "29",
      email: "muus@gail.com",
      id: 3,
    },
    {
      name: "mushi",
      age: "63",
      email: "muushi@gail.com",
      id: 4,
    },
    {
      name: "muskin",
      age: "73",
      email: "mmkiushi@gail.com",
      id: 5,
    },
  ];
 

  return (
    <>
    <h1>Reuse Component in Loop</h1>
    {
      userData.map((item)=>(
        <div key={item.id}>
          <User data={item}/>
        </div>
      ))
    }
      
    </>
  )
}

export default App
