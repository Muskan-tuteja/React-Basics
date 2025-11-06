import { useParams } from "react-router-dom"

function User (){
  const {id} = useParams()
  return(
    <>
    <h2>User is componetns </h2>
    <p>UserId:{id}</p>
    </>
  )
}
export default User