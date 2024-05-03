import React from "react";
import Navbar from "../Navbar";
import SideNavbar from "./SideNavbar";
import UserContainer from "./UserContainer";
import MessageContainer from "../Message/MessageContainer";

const Sidebar = () => {
  return (
    <>
      <div className="   w-[35%] bg-[rgba(30,30,30)] h-screen overflow-y-scroll">
        <SideNavbar />
        <UserContainer />
      </div>
    </>
  );
};

export default Sidebar;
