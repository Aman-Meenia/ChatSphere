import React from "react";
import MessageContainer from "../message/MessageContainer";
import { TiMessages } from "react-icons/ti";
import Navbar from "../message/Navbar";
import MessageBox from "../message/MessageBox";
import { useSelector } from "react-redux";

const ChatArea = () => {
  const user = useSelector((state) => state.auth.user);
  const selectedUser = useSelector((state) => state.selectedUser.selectedUser);

  console.log("Selected User is ");

  console.log(selectedUser);

  return (
    <>
      {/* When user select some user to chat */}

      {/* <div className="chat-area w-[65%] h-screen overflow-y-scroll "> */}
      {/*   <Navbar /> */}
      {/*   <MessageContainer /> */}
      {/*   <MessageBox /> */}
      {/* </div> */}

      {/* Empty side bar  */}

      <div className="chat-area w-[65%] h-screen overflow-y-scroll ">
        {selectedUser ? (
          <>
            <Navbar />
            <MessageContainer />
            <MessageBox />
          </>
        ) : (
          <>
            <div className="flex items-center justify-center w-full h-full">
              <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p> Welcome 👋 {user?.fullName}</p>

                <p>Select a chat to start messaging</p>
                <TiMessages className="text-3xl md:text-6xl text-center" />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ChatArea;
