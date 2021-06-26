import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import openWeatherMapApi from "../../api/openWeatherMap";

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  ({ zipcode }) => openWeatherMapApi.getWeather(zipcode)
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    zipcode: "10001",
    metadata: {},
    temperature: ""
  },
  reducers: {
    setZipcode: (state, action) => {
      state.zipcode = action.payload;
    }
  },
  extraReducers: {
    [getWeather.fulfilled]: (state, action) => {
      state.metadata = action.payload.weatherMetadata;
      state.temperature = action.payload.temperature;
    }
  }
});

export const { setZipcode } = weatherSlice.actions;

export default weatherSlice.reducer;
