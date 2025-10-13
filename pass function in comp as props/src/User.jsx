function User({displayOut,name,getUser}){
  
  return(

    <>
    <button onClick={()=>displayOut(name)}>Display Now</button>
    <button onClick={()=>getUser()}>get Now</button>
    </>

  )
}
export default User