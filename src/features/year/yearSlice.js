import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "00",
};

const yearSlice = createSlice({
  name: "year",
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action.payload.value;
    },
  },
});

export const { update } = yearSlice.actions;

export default yearSlice.reducer;
