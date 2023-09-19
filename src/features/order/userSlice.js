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
    addPhone(state, action) {
      state.phone = action.payload;
    },
    addAddress(state, action) {
      state.address = action.payload;
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

export const { addName } = userSlice.actions;

export default userSlice.reducer;
