import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../slices/themeSlice.js";

export const stores = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
