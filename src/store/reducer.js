import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  cityName: "",
  currentItem: {},
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload.data;
    },
    setCityDetails(state, action) {
      state.currentItem = action.payload.data;
    },
    setCityName(state, action) {
      state.cityName = action.payload.data;
    }
  },
});

export const weatherActions = weatherSlice.actions;

const weatherReducer = weatherSlice.reducer;

export default weatherReducer;
