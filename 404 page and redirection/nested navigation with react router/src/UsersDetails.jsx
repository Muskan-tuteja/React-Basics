import { Link, useParams } from "react-router"


export default function UsersDetails(){
  const paramsData = useParams()

  
  return(
    <>
    <h1>user Details page</h1>
    <h2>User id is:{paramsData.id}</h2>
    <h3><Link to="/users">Back</Link></h3>
   
    </>
  )
}
