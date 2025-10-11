import styl from './css/User.module.css'

function UserProfile(){
  return(
    <div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8yjgg60rx5Sk-d_ZBkaKQwh4z2QQQYXoePIqAdFXxvX3cWL_m3e3Apt7oJsohq84G31w&usqp=CAU" alt="" />
      </div>
      <div>
        <h4 className={styl.heading}>muskan</h4>
        <p>frontend</p>
      </div>
    </div>
  )
}
export default UserProfile