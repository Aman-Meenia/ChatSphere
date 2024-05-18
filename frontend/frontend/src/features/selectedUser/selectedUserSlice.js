import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selectedUser: null,
  chats: [],
};

const selectedUserSlice = createSlice({
  name: "selectedUser",
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload.selectedUser;
    },
    setChats: (state, action) => {
      state.chats = action.payload.chats;
    },
    addNewChats: (state, action) => {
      state.chats.push(action.payload.newChat);
    },
  },
});

export const { setSelectedUser, setChats, addNewChats } =
  selectedUserSlice.actions;
export default selectedUserSlice.reducer;
