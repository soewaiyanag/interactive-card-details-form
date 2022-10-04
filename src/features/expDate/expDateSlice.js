import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  month: "00",
  year: "00",
};

export const expDateSlice = createSlice({
  name: "expDate",
  initialState,
  reducers: {
    updateMonth: (state, action) => {
      state.month = action.payload.month;
    },
    updateYear: (state, action) => {
      state.year = action.payload.year;
    },
  },
});

export const { updateMonth, updateYear } = expDateSlice.actions;

export default expDateSlice.reducer;
