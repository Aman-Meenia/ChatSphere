import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageDate from "./MessageDate";
import { useGetChats } from "../../hooks/useGetChats";
import { useSelector } from "react-redux";
import { Message } from "./Message";
import { useSocketMessage } from "../../hooks/useSocketMessage";

const MessageContainer = () => {
  // const [messages, setMessages] = useState([]);

  const { loading, getChats } = useGetChats();
  const chats = useSelector((state) => state.selectedUser.chats);
  const slectedUser = useSelector((state) => state.selectedUser.selectedUser);
  // console.lo(selectedUser);
  // console.log(slectedUser);
  useEffect(() => {
    const fun = async () => {
      await getChats({ userId: slectedUser?.friend?._id });
    };

    fun();
  }, [slectedUser]);
  // console.log("Message Contianer");
  // console.log(chats);
  return (
    <>
      <div
        // className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue
        // scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
        // className=" !overflow-scroll"
        className=" mt-[64px] h-full overflow-y-auto  mb-[64px]"
      >
        {chats?.map((chat, index) => {
          return <Message key={index} chat={chat} />;
        })}
        {/*   <MessageDate /> */}
        {/*   <Messages /> */}
        {/*   <Messages /> */}
        {/*   <MessageDate /> */}
        {/**/}
        {/*   <Messages /> */}
        {/*   <Messages /> */}
        {/*   <MessageDate /> */}
        {/**/}
        {/*   <Messages /> */}
        {/*   <Messages /> */}
        {/*   <MessageDate /> */}
        {/**/}
        {/*   <Messages /> */}
        {/*   <Messages /> */}
        {/**/}
        {/*   <Messages /> */}
        {/*   <Messages /> */}
        {/*   <MessageDate /> */}
        {/**/}
        {/*   <Messages /> */}
        {/*   <Messages /> */}
        {/*   <Messages /> */}
        {/*   <Messages /> */}
        {/*   <Messages /> */}
        {/*   <MessageDate /> */}
        {/**/}
        {/*   <Messages /> */}
        {/*   <Messages /> */}
        {/*   <Messages /> */}
      </div>
    </>
  );
};

export default MessageContainer;
