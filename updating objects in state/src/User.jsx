const User = ({handle,data,handleCourse}) =>{
  return(
    <>
    <input type="text" placeholder="Enter user Name " onChange={(event) =>handle(event.target.value)} />
    <br />
    <input type="text" placeholder="Enter user city " onChange={(event) =>handleCourse(event.target.value)} />
    <h2>Name : {data.name}</h2>
    <h2>course : {data.study.course}</h2>
    <h2>degree : {data.study.degree}</h2>
    </>

  )
}
export default User