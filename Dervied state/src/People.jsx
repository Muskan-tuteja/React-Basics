const People = ({setUser,handleUser})=>{
  return(
    <>
    <input onChange={(event)=>setUser(event.target.value)} type="text" placeholder="Add New User" />
    <button style={{margin:"20px"}} onClick={handleUser}>Add User</button>
   
    </>

  )
}
export default People