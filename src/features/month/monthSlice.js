import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "00",
};

const monthSlice = createSlice({
  name: "month",
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action.payload.value;
    },
  },
});

export const { update } = monthSlice.actions;

export default monthSlice.reducer;
