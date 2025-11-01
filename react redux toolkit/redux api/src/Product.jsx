import React from "react";


 const Product = () => {
  const productData = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1999,
      image: "https://images.unsplash.com/photo-1585386959984-a41552262b34?w=500",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 2999,
      image: "https://images.unsplash.com/photo-1606813902915-46aa45cfb96d?w=500",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 1499,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
  ];

  return (
    <section className="products-section">
      <h2 className="product-title">Our Products</h2>
      <div className="products-container">
        {productData.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button className="add-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Product
