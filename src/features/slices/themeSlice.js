import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.value = !state.value;
    },
    changeThemeLight: (state) => {
      state.value = true;
    },
    changeThemeDark: (state) => {
      state.value = false;
    },
  },
});

export const { changeTheme, changeThemeLight, changeThemeDark } =
  themeSlice.actions;

export default themeSlice.reducer;
