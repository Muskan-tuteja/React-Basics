function ToDo(){
  function callFnc(){
    alert("function called")
  }
  return(
    <>
    <h1>My Website</h1>
    <img src="https://static.vecteezy.com/system/resources/previews/008/951/892/non_2x/cute-puppy-pomeranian-mixed-breed-pekingese-dog-run-on-the-grass-with-happiness-photo.jpg" alt="" width="200"/>
    <ul>
      <li>Beautiful pet</li>
      <li>Lovely Pet</li>
      <li>Cutie</li>
    </ul>
    <button onClick={callFnc}>Click Me</button>

    </>
  )
}
export default ToDo