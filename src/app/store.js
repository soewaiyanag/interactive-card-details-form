import { configureStore } from "@reduxjs/toolkit";
import cardNumberReducer from "features/cardNumber/cardNumberSlice";
import cardHolderReducer from "features/cardHolder/cardHolderSlice";
import monthReducer from "features/month/monthSlice";
import yearReducer from "features/year/yearSlice";
import cvcReducer from "features/cvc/cvcSlice";

const store = configureStore({
  reducer: {
    cardNumber: cardNumberReducer,
    cardHolder: cardHolderReducer,
    month: monthReducer,
    year: yearReducer,
    cvc: cvcReducer,
  },
});

export default store;
