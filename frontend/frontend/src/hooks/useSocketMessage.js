import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewChats } from "../features/selectedUser/selectedUserSlice";

export const useSocketMessage = () => {
  const [loading, setLoading] = useState(false);
  const dispath = useDispatch();
  const socket = useSelector((state) => state.socket.socket);
  const user = useSelector((state) => state.auth.user);
  const selectedUser = useSelector((state) => state.selectedUser.selectedUser);

  const socketMessage = async ({ message }) => {
    console.log(message);
    socket.emit("message", {
      message: message,
      userId: user._id,
    });

    dispath(
      addNewChats({
        newChat: {
          sender: user._id,
          receiver: selectedUser._id,
          msg: message,
        },
      }),
    );
  };

  return { loading, socketMessage };
};
