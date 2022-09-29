import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const cardNumberSlice = createSlice({
  name: "cardNumber",
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action.payload.value;
    },
  },
});

export const { update } = cardNumberSlice.actions;

export default cardNumberSlice.reducer;
