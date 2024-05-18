import React, { useEffect } from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import ChatArea from "../../components/chatarea/ChatArea";
import Loading from "../../components/Loading";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { setSocket } from "../../features/socket/socketSlice";

const Home = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  // const [socket, setSocket] = React.useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const socket = io("http://localhost:3001");
    console.log(socket);
    dispatch(
      setSocket({
        socket: socket,
      }),
    );
  }, []);

  // const socket = useSelector((state) => state.socket.socket);
  // console.log("Socket is ");
  // console.log(socket);
  //
  // if (socket) {
  //   socket.emit("join_room", user._id);
  // }

  return (
    <>
      <div className=" w-full h-screen bg-[rgb(40,40,41)] ">
        <div className="flex w-full h-full">
          <Sidebar />
          <ChatArea />
        </div>
      </div>
    </>
  );
};

export default Home;
