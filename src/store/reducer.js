import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  cityName: "",
  cityDetails: [],
  currentItem: {},
  showTopFive: false,
  topFive: [],
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload.data;
    },
    setCityDetails(state, action) {
      state.cityDetails = action.payload.data;
      state.currentItem = state.cityDetails[0];
      state.cityDetails = state.cityDetails.slice(0, 5);
    },
    setCityName(state, action) {
      state.cityName = action.payload.data;
    },
    setCurrentItem(state, action) {
      state.currentItem = state.cityDetails[action.payload.data];
    },
    setShowTopFive(state, action) {
      state.showTopFive = action.payload.data;
    },
    toggleTopFive(state, action) {
      state.showTopFive = !state.showTopFive;
    },
  },
});

export const weatherActions = weatherSlice.actions;

const weatherReducer = weatherSlice.reducer;

export default weatherReducer;
