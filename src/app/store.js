import { configureStore } from "@reduxjs/toolkit";
import cardNumberReducer from "features/cardNumber/cardNumberSlice";
import cardHolderReducer from "features/cardHolder/cardHolderSlice";
import expDateReducer from "features/expDate/expDateSlice";
import cvcReducer from "features/cvc/cvcSlice";

const store = configureStore({
  reducer: {
    cardNumber: cardNumberReducer,
    cardHolder: cardHolderReducer,
    expDate: expDateReducer,
    cvc: cvcReducer,
  },
});

export default store;
