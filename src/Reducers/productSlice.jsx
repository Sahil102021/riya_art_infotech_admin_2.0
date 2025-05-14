import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: 'product',
  initialState : {
    productDetail : [] ,
    token : "",
  },
  reducers: {
    setToken : (state , action) => {
      console.log("action token =",action);
      state.token = action.payload;
    } ,
    setProducts: (state, action) => {
      console.log("action =",action);
      console.log("state = ",state)
      state.productDetail = action.payload;
    },
  },
});

export const { setProducts , setToken } = productSlice.actions;
export default productSlice.reducer;