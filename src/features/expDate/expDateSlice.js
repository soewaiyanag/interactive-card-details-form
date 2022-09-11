import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  month: "",
  year: "",
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
