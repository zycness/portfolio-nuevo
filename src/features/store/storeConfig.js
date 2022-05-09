import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../slices/themeSlice.js";
import languageReducer from "../slices/languageSlice.js";

export const stores = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
  },
});
