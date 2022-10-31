import { combineReducers } from "@reduxjs/toolkit";
import addressReducer from "./addressSlice";

export const rootReducer = combineReducers({
  address: addressReducer,
});
