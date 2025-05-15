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
    state.productDetail = action.payload;
  },
  addProduct: (state, action) => {
    state.productDetail.push(action.payload);
  },
  updateProduct: (state, action) => {
    const index = state.productDetail.findIndex(p => p.id === action.payload.id);
    if (index !== -1) {
      state.productDetail[index] = action.payload;
    }
  },
  deleteProduct: (state, action) => {
    state.productDetail = state.productDetail.filter(p => p.id !== action.payload);
  },
  setViewData: (state, action) => {
    state.viewDetail = action.payload;
  },
}
});

export const { setProducts, setToken, addProduct, updateProduct, deleteProduct, setViewData } = productSlice.actions;
export default productSlice.reducer;