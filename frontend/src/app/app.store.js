import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/auth/state/auth.alice";
import productReducer from "../feature/product/states/product.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
  },
});
