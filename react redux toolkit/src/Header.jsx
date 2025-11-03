import { Link } from "react-router-dom"
import { AddToCart } from "./AddToCart"

export const Header=()=>{
  return(
    <>
    <header>
      <div className="shop">MyShop
      <nav>
        <ul>
      <li><Link to="/">Home</Link></li>
      <li><a href="">About</a></li>
      <li><a href="">Cart</a></li>
    
        </ul>
      </nav>
      </div>
      <AddToCart/>
      

    </header>
    </>

  )
}