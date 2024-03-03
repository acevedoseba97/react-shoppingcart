import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data";

const initialState = {
  products: data,
  quantity: 0,
  total: 0,
};

const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    increaseQuantity: (state, { payload }) => {
      const item = state.products.find((item) => item.name === payload.name);
      item.quantity++;
    },
    decreaseQuantity: (state, { payload }) => {
      const item = state.products.find((item) => item.name === payload.name);
      item.quantity !== 0 ? item.quantity-- : 0;
    },
    removeItems: (state, { payload }) => {
      state.products = state.products.filter(
        (item) => item.name !== payload.name
      );
    },
    updateTotal: (state) => {
      let quantity = 0;
      let total = 0;
      state.products.forEach((item) => {
        quantity += item.quantity;
        total += item.quantity * item.price;
      });
      state.quantity = quantity;
      state.total = total.toFixed(2);
    },
  },
});

export const { increaseQuantity, decreaseQuantity, removeItems, updateTotal } =
  shoppingSlice.actions;
export default shoppingSlice.reducer;
