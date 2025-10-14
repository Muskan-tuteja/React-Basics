const AddUser =({setAdd})=>{
  return(
    <>
    <h2>Add User</h2>
    <input onChange={(event) => setAdd(event.target.value)} type="text" placeholder="Enter user name" />
    <hr />
    </>

  )
}
export default AddUser