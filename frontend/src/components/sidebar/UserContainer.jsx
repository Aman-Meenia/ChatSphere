import React from "react";
import DisplayUsers from "./DisplayUsers";
import MessageContainer from "../Message/MessageContainer";

const UserContainer = () => {
  return (
    <>
      <div
        // className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue
        // scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch mt-15"
        className="mt-[110px]"
      >
        {/* <div */}
        {/*   className="scroll-smooth focus:scroll-auto" */}
        {/*   // className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue */}
        {/*   // scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch max-h-[calc(100vh - 200px)]" */}
        {/* > */}
        <DisplayUsers />
        <DisplayUsers />
        <DisplayUsers />
        <DisplayUsers />
        <DisplayUsers />
        <DisplayUsers />
        <DisplayUsers />
        <DisplayUsers />
        <DisplayUsers />
        <DisplayUsers />
      </div>
    </>
  );
};

export default UserContainer;
