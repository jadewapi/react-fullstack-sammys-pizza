import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  phone: "",
  address: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addName(state, action) {
      state.name = action.payload;
    },
    clearEverything(state) {
      state.name = "";
      state.phone = "";
      state.address = "";
    },
  },
});

export function getName() {
  return function (state) {
    return state.user.name;
  };
}

export function getPhone() {
  return function (state) {
    return state.user.phone;
  };
}

export function getAddress() {
  return function (state) {
    return state.user.address;
  };
}

export const { addName, clearEverything } = userSlice.actions;

export default userSlice.reducer;
