import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registerEventId: 0,
};
const registerEventSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    addEventsForRegister: (state, action) => {
      state.registerEventId = action.payload;
    },
  },
});

export const { addEventsForRegister } = registerEventSlice.actions;
export const registerEventReducer = registerEventSlice.reducer;
