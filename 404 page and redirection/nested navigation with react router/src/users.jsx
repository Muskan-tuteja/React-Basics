import { Link } from "react-router"

export default function Users () {
  const userData = [
    {id:1,name:"muskan"},
    {id:2,name:"isha"},
    {id:3,name:"ishu"},
    {id:4,name:"mahi"},
    {id:5,name:"musu"}
  ]
  return(
    <>
    <h1>user list page</h1>
    {
      userData.map((item,index)=>(
        <div key={index} className="users">
          <h4><Link to={"/users/"+item.id}>{item.name}</Link></h4>
        </div>
      ))
    }
    <h1>user list page with url name</h1>
    {
      userData.map((item,index)=>(
        <div key={index} className="users">
          <h4><Link to={"/users/"+item.id+"/"+item.name}>{item.name}</Link></h4>
        </div>
      ))
    }
    </>
  )
}
