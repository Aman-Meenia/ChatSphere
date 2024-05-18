import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setChats } from "../features/selectedUser/selectedUserSlice";
export const useGetChats = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const getChats = async ({ userId }) => {
    setLoading(true);

    await axios
      .post("/api/v1/message/get", {
        receiver: userId,
      })
      .then((response) => {
        console.log("Get chats");
        dispatch(
          setChats({
            chats: response.data.allMessages,
          }),
        );
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { loading, getChats };
};
