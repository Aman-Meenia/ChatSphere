import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  socket: null,
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    setSocket: (state, action) => {
      console.log("Setting socket");
      console.log(action.payload.socket);
      state.socket = action.payload.socket;
    },
  },
});

export const { setSocket } = socketSlice.actions;
export default socketSlice.reducer;
