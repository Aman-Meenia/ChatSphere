import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import searchSlice from "../features/search/searchUserSlice";
import friendSlice from "../features/friend/friendSlice";
import selectedUserSlice from "../features/selectedUser/selectedUserSlice";
import socketSlice from "../features/socket/socketSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    search: searchSlice,
    friend: friendSlice,
    selectedUser: selectedUserSlice,
    socket: socketSlice,
  },
});
