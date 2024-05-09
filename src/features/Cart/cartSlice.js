import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

// cart: [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
// ],

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPizza: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
        item.totalPrice = item.unitPrice * item.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    deletePizza: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity--;
        item.totalPrice = item.unitPrice * item.quantity;
      } else {
        state.cart = state.cart?.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    removeAllPizzas: (state) => {
      state.cart = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPizza, deletePizza, removeAllPizzas } = cartSlice.actions;

export default cartSlice.reducer;
