const Users =({handle, people,handlingAge,  detalis})=>{
  return(
    <>
    <input onChange={(e)=>handle(e.target.value)} type="text" placeholder="enter user name" />
  
    <input onChange={(e)=>handlingAge(e.target.value)} type="text" placeholder="enter user age" />
      
     {
      people.map((item,index)=>(
        <h2 key={index}>{item}</h2>
      ))
    }
    <hr />
     {
        detalis.map((item,index)=>(
        <h1 key={index}>{item.name} {item.age}</h1>
      ))
    }
    </>

  )
}
export default Users