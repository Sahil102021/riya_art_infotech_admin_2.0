import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: 'product',
  initialState : {
    productDetail : [] ,
    token : "",
    viewDetail : {}
  },
  reducers: {
  setToken: (state, action) => {
    state.token = action.payload;
  },
  setProducts: (state, action) => {
    state.productDetail =  action.payload;
  },

}
});

export const { setProducts, setToken} = productSlice.actions;
export default productSlice.reducer;