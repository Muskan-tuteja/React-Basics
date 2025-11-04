import { createSlice } from "@reduxjs/toolkit";

let cartData = [];
try {
  cartData = JSON.parse(localStorage.getItem("cart")) || [];
} catch (e) {
  console.error("Invalid cart data in localStorage", e);
  localStorage.removeItem("cart");
}

const initialState = {
  items: cartData,
};

const addToCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      const cartData = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      state.items = cartData;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    clearAllItems: (state) => {
      state.items=[]
    },
  },
});

export const { addItem, removeItem, clearAllItems } = addToCart.actions;
export default addToCart.reducer;
