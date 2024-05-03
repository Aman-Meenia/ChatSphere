import React from "react";
import Messages from "./Messages";
import MessageDate from "./MessageDate";

const MessageContainer = () => {
  return (
    <>
      <div
        // className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue
        // scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
        // className=" !overflow-scroll"
        className="pt-20 h-full overflow-y-auto pb-20"
      >
        <MessageDate />
        <Messages />
        <Messages />
        <MessageDate />

        <Messages />
        <Messages />
        <MessageDate />

        <Messages />
        <Messages />
        <MessageDate />

        <Messages />
        <Messages />

        <Messages />
        <Messages />
        <MessageDate />

        <Messages />
        <Messages />
        <Messages />
        <Messages />
        <Messages />
        <MessageDate />

        <Messages />
        <Messages />
        <Messages />
      </div>
    </>
  );
};

export default MessageContainer;
