import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://appevents-back.onrender.com";

export const fetchEventsPage = createAsyncThunk("events/fetchNextPage", async (_, thunkAPI) => {
  try {
    const response = await axios.get(`api/events`);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
