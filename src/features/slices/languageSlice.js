import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state) => {
      state.value = !state.value;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
