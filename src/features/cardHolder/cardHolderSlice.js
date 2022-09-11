import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

export const cardHolderSlice = createSlice({
  name: "cardHolder",
  initialState,
  reducers: {
    update: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { update } = cardHolderSlice.actions;

export default cardHolderSlice.reducer;
