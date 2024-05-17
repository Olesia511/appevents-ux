import { createSlice } from "@reduxjs/toolkit";
import { fetchParticipants } from "./operations";

const participantsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const participantsSlice = createSlice({
  name: "participants",
  initialState: participantsInitialState,

  extraReducers: (builder) => {
    builder

      .addCase(fetchParticipants.pending, handlePending)
      .addCase(fetchParticipants.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...action.payload];
      })
      .addCase(fetchParticipants.rejected, handleRejected);
  },
});

export const participantsReducer = participantsSlice.reducer;
