import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "./AddToCart";
import { addItem, removeItem } from "./redux/slice";
import { useEffect } from "react";
import { fetchProducts } from "./redux/productSlice";

export const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const selector = useSelector((state) => state.products.items);
  console.log(selector);
    const cartSelector = useSelector((state)=>state.cart.items)
  console.log(cartSelector.length)

  return (
    <>
      <div className="grid">
        {selector.length &&
          selector.map((items) => (
            <div key={items.id} className="card">
              <img src={items.thumbnail} />
              <div className="content">
                <div className="title">{items.title}</div>
                <div className="brand">{items.brand}</div>
                <div className="price">{items.price}</div>
                <div className="rating">{items.rating}</div>
                {
                  cartSelector.find(cartItem =>cartItem.id === items.id)? <button  onClick={() => dispatch( removeItem(items))}
                  
                  className="add-btnn"
                >
                  Remove cart
                </button>: <button
                  onClick={() => dispatch(addItem(items))}
                  className="add-btn"
                >
                  Added to cart
                </button>
                }

               
                
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
