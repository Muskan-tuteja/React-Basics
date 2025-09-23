
import './App.css'

function App() {
  

  return (
    <>
      <h1>Hello?</h1>
      <Colors></Colors>
      <Fruit></Fruit>
    </>
  )
}
function Fruit(){
  return(
    <>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta aliquid iure itaque omnis ipsum maxime optio tempora sunt repellendus reprehenderit veniam enim, explicabo iusto dolore vitae minima error unde natus.</p>
    <h1>React Basucs {sum()}</h1>
    </>
  )
}
function Colors(){
  return(
    <h1>Red Colors</h1>
  )
}
function sum(){
  return 20+10
}

export default App
