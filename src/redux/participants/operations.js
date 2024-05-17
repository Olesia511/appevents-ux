import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://appevents-back.onrender.com";

export const addParticipants = createAsyncThunk("participants/addedUser", async (userData, thunkAPI) => {
  try {
    const response = await axios.post(`api/participants`, userData);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchParticipants = createAsyncThunk("participants/fetchAll", async (id, thunkAPI) => {
  try {
    const response = await axios.get(`api/participants/${id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
