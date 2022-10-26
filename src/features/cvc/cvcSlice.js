import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "000",
};

const cvcSlice = createSlice({
  name: "cvc",
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action.payload.value;
    },
  },
});

export const { update } = cvcSlice.actions;

export default cvcSlice.reducer;
