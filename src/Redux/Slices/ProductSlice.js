import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name: "ProductSlice", 
    initialState: {
        products:[]
    },
    reducers:{
        loadProducts : (state, action)=>{
            state.products = action.payload
        }
    }
})

export const {loadProducts} = ProductSlice.actions;
export default ProductSlice.reducer;