import { FaShoppingCart } from "react-icons/fa";

export const AddToCart = () => {
  return (
    <div className="fa-cart">
      <FaShoppingCart size={24} />
      <span className="cart-badge">3</span>
    </div>
  )
}
