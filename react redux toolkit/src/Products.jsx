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

  return (
    <>
    <div className="grid">
      {
        selector.length && selector.map((items) =>(
          <div key={items.id} className="card">
            <img src={items.thumbnail}/>
            <div className="content">
              <div className="title">{items.title}</div>
              <div className="brand">{items.brand}</div>
              <div className="price">{items.price}</div>
              <div className="rating">{items.rating}

              </div>

<button onClick={()=>dispatch( addItem(1))} className="add-btn">Add to cart</button>
<button onClick={()=>dispatch( removeItem())} className="add-btnn">Remove cart</button>
            </div>
          </div>
        ))
      }
    </div>
    </>
  )
 
};
