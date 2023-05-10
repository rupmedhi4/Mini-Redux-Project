import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "messageSlice",
  initialState: {
    message: "",
  },
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    resetMessage: (state) => {
      state.message = "";
    },
  },
});

export const { setMessage, resetMessage } = messageSlice.actions;
export default messageSlice.reducer;
