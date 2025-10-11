import Student from "./Student"

const College = ({college}) =>{
  return(
    <div style={{background:"grey", color:"black"}}>
       <h1>Namee: {college.name}</h1>
        <ul>
          <li>
            <h3>City:{college.city}</h3>
          </li>
          <li>
            <h3>Website:{college.website}</h3>
          </li>
          <li>
            <Student student={college.student}/>
          </li>
        </ul>

    </div>

  )
}
export default College