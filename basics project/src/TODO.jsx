function Todo(){
  function callFun(){
    alert("function call ")
  }
  return(
    <>
    <h1>Todo list</h1>
    <img src="https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg" width={500}></img>
    <ul>
      <li>hrlo the cat</li>
      <li>hrlo the cat</li>
      <li>hrlo the cat</li>
      <button onClick={callFun}>onclik</button>
    </ul>
    </>
  )
}
export default Todo