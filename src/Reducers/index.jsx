import { combineReducers } from "redux";
import productSlice from "./productSlice";
export const rootReducer = combineReducers({
  product: productSlice,
});
