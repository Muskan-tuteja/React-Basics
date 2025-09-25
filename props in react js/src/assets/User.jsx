function User ({user}){
  
  return(
    <>
    <hr />
    <h1>User Component</h1>
    <h2>Name:{user.names}</h2>
    <h2>Age:{user.age}</h2>
    <h2>course:{user.course}</h2>
    </>
  )
}
export default User