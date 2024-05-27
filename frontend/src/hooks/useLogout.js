import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const useLogout = () => {
  const [loading, setLoading] = useState(false);

  const userLogout = async () => {
    setLoading(true);
    console.log("Logout Working");
    axios
      .get("/api/v1/user/logout")
      .then((response) => {
        console.log(response);
        localStorage.removeItem("user");
        window.location.reload();
      })
      .catch((error) => {
        // console.log("error " + error);
        // toast.error(error.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { loading, userLogout };
};
