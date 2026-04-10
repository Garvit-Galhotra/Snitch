import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/auth/state/auth.alice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
