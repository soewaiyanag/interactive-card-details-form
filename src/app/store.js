import { configureStore } from "@reduxjs/toolkit";
import cardNumberReducer from "../features/cardNumber/cardNumberSlice";
import cardHolderReducer from "../features/cardHolder/cardHolderSlice";
import expDateReducer from "../features/expDate/expDateSlice";

const store = configureStore({
  reducer: {
    cardNumber: cardNumberReducer,
    cardHolder: cardHolderReducer,
    expDate: expDateReducer,
  },
});

export default store;
