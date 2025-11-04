import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAllItems, removeItem } from "./redux/slice";
import {useNavigate} from "react-router-dom"

export default function CartList() {
  const cartSelector = useSelector((state) => state.cart.items);

  console.log(cartSelector);
const [cartItems,setCartItems]=useState(cartSelector)
useEffect(()=>{
setCartItems(cartSelector)
},[cartSelector])
const dispatch=useDispatch()
const navigate=useNavigate()
  const manageQuantity =(id,q)=>{
   let quantity = parseInt(q)>1?parseInt(q):1
   const cartTempItems = cartSelector.map((item)=>{
    return item.id==id?{...item,quantity}:item
   })
   setCartItems(cartTempItems)

  }
  const handlePlaceOrder=()=>{
    localStorage.clear()
    dispatch(clearAllItems())
    alert("order placed")
    navigate("/")
  }

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", marginTop: "10px" }}>
          Cart Item Listing{" "}
          <span style={{ color: "green", marginLeft: "100px" }}>
            {cartItems.length} items
          </span>
        </h1>

        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: "1px solid #000",
                borderRadius: "10px",
                padding: "15px 20px",
                margin: "15px auto",
                width: "80%",
                maxWidth: "900px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              {/* Image */}
              <div>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>

              {/* Title */}
              <div style={{ flex: "1", marginLeft: "20px" }}>
                <h3 style={{ marginBottom: "5px" }}>{item.title}</h3>
              </div>

              {/* Price and Button */}
              <div style={{ textAlign: "right" }}>
                <span style={{ fontWeight: "bold", marginRight: "15px" }}>
                  Price: ₹{(item.quantity?item.price*item.quantity:item.price).toFixed(2)}
                </span>

                <input onChange={(e)=>manageQuantity(item.id,e.target.value)}
                  type="number"
                  min="1"
                  defaultValue={1}
                  placeholder="Enter quantity"
                  style={{
                    width: "70px",
                    padding: "5px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    marginRight: "10px",
                    textAlign: "center",
                  }}
                />

                <button onClick={()=>dispatch(removeItem(item))}
                  style={{
                    backgroundColor: "#ff4d4d",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    padding: "8px 12px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            Your cart is empty 🛒
          </p>
        )}
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "20px",
            fontWeight: "bold",
            borderTop: "2px solid #000",
            paddingTop: "10px",
            width: "80%",
            maxWidth: "900px",
            margin: "20px auto",
          }}
        >
          Total: ${(cartItems.reduce((sum, item) => item.quantity? sum + item.price*item.quantity:sum+item.price, 0)).toFixed(2)}
        </div>
        <div onClick={handlePlaceOrder} style={{color:"white",fontSize:"20px",border:"1px solid black", margin:"10px",width:"80px",background:"blue",height:"60px",cursor:"pointer"}}>Place Order</div>
       
      </div>
    </>
  );
}
