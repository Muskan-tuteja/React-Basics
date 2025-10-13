import {useFormStatus} from 'react-dom'
function User({handleSubmit}){
  const{pending}=useFormStatus()
  console.log(pending)
  
  
  return(
    <>
    <form onSubmit={handleSubmit} >
    <input style={{margin:"20px", width:"200px",}} type="text" placeholder="Enter your name" />
    <input style={{margin:"20px"}} type="text" placeholder="Enter your password" />
    <button disabled={pending}>{pending?"Submitting..":"Submit"}</button>
  </form>
    </>

  )
}
export default User