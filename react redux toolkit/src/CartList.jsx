import { useSelector } from "react-redux";

export default function CartList() {
  const cartSelector = useSelector((state) => state.cart.items);
  console.log(cartSelector);

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", marginTop: "10px" }}>
          Cart Item Listing{" "}
          <span style={{ color: "green", marginLeft: "100px" }}>
            {cartSelector.length} items
          </span>
        </h1>

        {cartSelector.length > 0 ? (
          cartSelector.map((item) => (
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
                  Price: ₹{item.price}
                </span>
                <button
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
          Total:{cartSelector.reduce((sum, item) => sum + item.price, 0)}
        </div>
      </div>
    </>
  );
}
