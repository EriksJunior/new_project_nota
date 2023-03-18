import { configureStore } from "@reduxjs/toolkit";
import SaleReducer from "./reducers/SaleReducers";

export default configureStore({
  reducer: {
    sale: SaleReducer,
  },
})