import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  phone: "",
  address: "",
  cart: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addName(state, action) {
      state.name = action.payload;
    },
  },
});

export function getName() {
  return function (state) {
    return state.user.name;
  };
}

export const { addName } = userSlice.actions;

export default userSlice.reducer;
