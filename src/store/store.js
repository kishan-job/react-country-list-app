import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/auth/authSlice";
import { countriesReducer } from "../features/countires/countiresSlice";

 export const store = configureStore({
  reducer: {
    auth: authReducer,
    countriesSlice: countriesReducer,
  },
});
