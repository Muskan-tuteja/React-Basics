import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

export const AddToCart = () => {
  const selector = useSelector((state)=>state.cart.value)
  console.log(selector)
  return (
    <div className="fa-cart">
      <FaShoppingCart size={24} />
      <span className="cart-badge">{selector}</span>
    </div>
  )
}
