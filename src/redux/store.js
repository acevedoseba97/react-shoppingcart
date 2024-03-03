import { configureStore } from "@reduxjs/toolkit";
import shoppingSlice from "../slice/shoppingSlice";

export const store = configureStore({
  reducer: {
    shopping: shoppingSlice,
  },
});
