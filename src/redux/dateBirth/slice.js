import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dateBirth: new Date().toISOString(),
};

const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    changeDate: (state, action) => {
      state.dateBirth = action.payload;
    },
  },
});

export const { changeDate } = dateSlice.actions;
export const dateReducer = dateSlice.reducer;
