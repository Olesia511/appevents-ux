import { createSlice } from "@reduxjs/toolkit";
import { fetchEventsPage } from "./operations";

const eventsInitialState = {
  items: [],
  total: 0,
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

const eventsSlice = createSlice({
  name: "events",
  initialState: eventsInitialState,

  extraReducers: (builder) => {
    builder

      .addCase(fetchEventsPage.pending, handlePending)
      .addCase(fetchEventsPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.total = action.payload.totalCount;

        if (state.items.length === 0) state.items = action.payload.data;
        if (state.items.length > 0) {
          const eventsIdArr = state.items.map((item) => item._id);
          const newEvents = action.payload.data.filter((item) => !eventsIdArr.includes(item._id));

          state.items.push(...newEvents);
        }
      })
      .addCase(fetchEventsPage.rejected, handleRejected);
  },
});

export const eventsReducer = eventsSlice.reducer;
