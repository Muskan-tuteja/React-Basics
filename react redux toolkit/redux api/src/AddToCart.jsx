import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {           // ✅ this must exist
      state.items = [];
    },
  },
});

// ✅ Make sure you export all these three
export const { addToCart, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
