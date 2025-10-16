import { useId } from "react"

function From(){
  const name= useId()
  const password = useId()
  const term = useId()
  return(
    <>
    <form action="">
      <label htmlFor={name}>Enter User Name</label>
      <input id={name} type="text" placeholder="Enter User Name" />
      <br /><br />
      <label htmlFor={password}>Enter User Password</label>
      <input id={password} type="text" placeholder="Enter User Password" />
      <br /><br />
      <label  htmlFor={term}>Enter User Password</label>
      <input id={term} type="checkbox" placeholder="Enter User Password" />
      <br /><br />
    </form>
    </>

  )
}
export default From