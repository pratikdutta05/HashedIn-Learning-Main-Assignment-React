import { configureStore } from "@reduxjs/toolkit";

import { combineReducers } from "redux";

import cartReducer from "./reducers/updateMain.js";

const allReducers = combineReducers({
  main: cartReducer,
});

const store = configureStore({
  reducer: allReducers,
});

export default store;
