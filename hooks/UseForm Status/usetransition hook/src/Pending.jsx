const Pending=({pending,handleButton})=>{
  return(

    <button disabled={pending} onClick={handleButton}>click</button>
  )
}
export default Pending