import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

export const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const selectedUser = useSelector((state) => state.selectedUser.selectedUser);
  // const selectedUser = useSelector((state) => {
  //   return state.selectedUser.selectedUser;
  // });
  console.log(selectedUser);

  const sendMessage = async ({ message }) => {
    await axios
      .post("/api/v1/message/send", {
        receiver: selectedUser?.friend?._id,
        message: message,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { loading, sendMessage };
};
