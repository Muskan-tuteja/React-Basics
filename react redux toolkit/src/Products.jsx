import React from "react";
import {useDispatch,useSelector} from "react-redux"
import { AddToCart } from "./AddToCart";
import { addItem, removeItem } from "./redux/slice";
import { useEffect } from "react";
import {fetchProducts} from './redux/productSlice'



export const Products = () => {
  const productData = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1999,
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSjlMpUhFWXg_ZCTrNtCxEvlGVQPQvCz4mGP2GghxoSGpBg73OfuEqaZZA-zuXgHsCoOBVzi1mWoO3ARUlATpoYcqPo3yAAcBEmCnmHT3JHCf7_zuiToeOz",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 2999,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiqC-6d2zKGwkJEQj1dhyx9KzKY3_1v_bfhg&s",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 1499,
      image:
        "https://png.pngtree.com/png-vector/20241228/ourlarge/pngtree-smart-bluetooth-speaker-png-image_14937502.png",
    },
  ];
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(fetchProducts())

  },[])
  const selector=useSelector((state)=>state.products.items)
  console.log(selector)


  return (
    <section className="products-section">
      <h2 className="product-title">Our Products</h2>
      <div className="products-container">
        {productData.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={()=>dispatch(addItem(1))} className="add-btn">Add to Cart</button>
            <button onClick={()=>dispatch(removeItem())} className="add-btnn">Remove Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};
