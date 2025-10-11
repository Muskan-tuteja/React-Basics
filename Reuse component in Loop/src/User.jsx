const User = ({data})=>{
  return(
    <div style={{border:"2px solid blue", padding:"10px",margin:"10px"}}>
    <h3>Name: <span style={{color:"blue"}}>{data.name}</span></h3>
    <h3>Age:<span style={{color:"green"}}>{data.age}</span></h3>
    <h3>Email:<span style={{color:"pink"}}>{data.email}</span></h3>

    </div>

  )
}
export default User