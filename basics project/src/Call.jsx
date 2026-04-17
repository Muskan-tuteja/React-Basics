import Arrow from "./ArrowFunction"

function Call(){
  function callFn(){
    alert("function call")
  }
  return(
    <>
    <h1>Calling Function</h1>
    <button onClick={callFn}>Click</button>
    <Arrow/>
    </>
  )
}
export default Call