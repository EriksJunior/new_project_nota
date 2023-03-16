import { configureStore } from "@reduxjs/toolkit";
import LeafReducer from "./reducers/LeafReducers";

export default configureStore({
  reducer: {
    leaf: LeafReducer,
  },
})