import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "0".repeat(16),
};

export const cardNumberSlice = createSlice({
  name: "cardNumber",
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { update } = cardNumberSlice.actions;

export default cardNumberSlice.reducer;
