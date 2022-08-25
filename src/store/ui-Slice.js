import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  isLogedIn: false,
};
const uiSlice = createSlice({
  name: "ui",
  initialState: defaultState,
  reducers: {
    isLogoutHandler: (state, action) => {
      state.isLogedIn = !state.isLogedIn;
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
