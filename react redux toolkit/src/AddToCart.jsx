import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const AddToCart = () => {
  const cartSelector = useSelector((state)=>state.cart.items)
  console.log(cartSelector.length)
  return (
  
      <Link to="/cart">
          <div className="fa-cart">
       <FaShoppingCart size={24} />
      <span className="cart-badge">{cartSelector.length?cartSelector.length:0}</span>
      </div>
      </Link>
     
   
  )
}
