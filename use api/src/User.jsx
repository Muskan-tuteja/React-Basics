import { use } from "react"

export const User=({userResourse})=>{

  const userData = use(userResourse)
  console.log(userData.products)
  return(
    <>
   
    <h1>Users List</h1>
    {
      userData?.products?.map((user,index) =>(
        <h1 key={index}>{user.title}</h1>
      ))
    }
     </>
  )
}