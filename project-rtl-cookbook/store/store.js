import { configureStore } from "@reduxjs/toolkit";
import favReducers from "./reducers";

export const store = configureStore({
  reducer: favReducers,
});
