import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Stock {
  id: number;
  title: string;
  image: string;
  price: number;
  discountPercent: number;
  likes: number;
}

type StocksData = Stock[]

export const getStocks = createAsyncThunk("stocks", async () => {
  const { data } = await axios.get("https://curious-bear-pea-coat.cyclic.app/stocks");
  return data as StocksData;
});

interface StocksSliceState {
  data: StocksData;
  status: string;
}

const initialState: StocksSliceState = {
  data: [],
  status: "",
}

const stocksSlice = createSlice({
  name: "stocks",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(getStocks.fulfilled, (state, action) => {
      state.data = action.payload;
    }),
});

export default stocksSlice.reducer;
