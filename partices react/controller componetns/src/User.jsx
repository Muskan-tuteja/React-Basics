function User({name , tage}){
  return(
    <>
  <form action="">
    <input onChange={(e)=>name(e.target.value)} value={tage} type="text" placeholder="Enter your name"/>
    <br />
    <br />
    <button>Submit</button>
      <h1>NAME:{tage}</h1>
  </form>

    </>
  )

}
export default User