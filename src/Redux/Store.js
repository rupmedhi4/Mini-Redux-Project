import { configureStore, createReducer } from "@reduxjs/toolkit";
import MessageReducer from "./Slices/MessageSlice";
import productReducer from './Slices/ProductSlice'
import cartReducer from './Slices/CartSlice'

export default configureStore({
  reducer: {
    // MessageReducer,
    productReducer,
    cartReducer
  },
});
