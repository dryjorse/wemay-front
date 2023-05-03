import { configureStore } from "@reduxjs/toolkit";
import stocksSlice from "./slices/stocksSlice";


export const store = configureStore({
  reducer: {
    stocks: stocksSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;