import React from "react";
import { FaEllipsisV } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 pl-5 fixed top-0 z-50 w-[65%] ">
        {/* <div className="dropdown dropdown-end pl-3"> */}
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar online"
        >
          <div className="w-12 rounded-full">
            <img
              alt="Profile Pic"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
            {/* </div> */}
          </div>
        </div>
        <div className="flex-col pl-3">
          <div className="text-white"> UserName</div>
          <div className="text-sm opacity-50">Last Seen </div>
        </div>

        <div className="flex  w-full justify-end ">
          <FaEllipsisV size={20} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
