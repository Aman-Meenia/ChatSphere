import React from "react";

const SearchUser = ({ friendStatus }) => {
  const handleClick = (e) => {
    // Stop propagation of the click event
    e.stopPropagation();
  };
  return (
    <>
      <div className="">
        <div className="flex ml-4 pt-2">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar  h-14 w-14"
          >
            <div className="w-16 rounded-full">
              <img
                alt="Profile Pic"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>

          {/* If request is received than show accept and reject button   */}

          <div className="flex flex-col  justify-center w-full">
            <div className="flex ">
              <div className="ml-3 text-white">UserName</div>
              <div className="flex w-full justify-end gap-2 mr-4">
                <button
                  className="btn btn-sm px-[5px]  bg-[rgba(39,135,84)] hover:bg-[rgba(39,135,84)] text-white"
                  onClick={handleClick}
                >
                  Accept
                </button>
                <button
                  className="btn btn-sm ml-2 px-[5px] bg-[rgba(42,56,60,0.6)] hover:bg-[rgba(42,56,60,0.8)] text-white "
                  onClick={handleClick}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>

          {/* If Friend request sent */}

          {/* <div className="flex flex-col  justify-center w-full"> */}
          {/*   <div className="flex "> */}
          {/*     <div className="ml-3 text-white">UserName</div> */}
          {/*     <div className="flex w-full justify-end gap-2 mr-4"> */}
          {/*       <button */}
          {/*         className=" btn btn-sm px-[5px] bg-[rgba(0,182,255,0.6)] */}
          {/**/}
          {/*           hover:bg-[rgba(0,182,255,0.8)] text-white" */}
          {/*       > */}
          {/*         Withdraw */}
          {/*       </button> */}
          {/*     </div> */}
          {/*   </div> */}
          {/* </div> */}

          {/* Request send to user  */}

          {/* <div className="flex flex-col  justify-center w-full"> */}
          {/*   <div className="flex "> */}
          {/*     <div className="ml-3 text-white">UserName</div> */}
          {/*     <div className="flex w-full justify-end gap-2 mr-4"> */}
          {/*       <button */}
          {/*         className=" btn btn-sm px-[5px] bg-[rgba(0,182,255,0.6)] */}
          {/*             hover:bg-[rgba(0,182,255,0.8)] text-white" */}
          {/*       > */}
          {/*         Send Request */}
          {/*       </button> */}
          {/*     </div> */}
          {/*   </div> */}
          {/* </div> */}

          {/* If already Friend show message button */}

          {/*   <div className="flex flex-col  justify-center w-full"> */}
          {/*     <div className="flex "> */}
          {/*       <div className="ml-3 text-white">UserName</div> */}
          {/*       <div className="flex w-full justify-end gap-2 mr-4"> */}
          {/*         <button */}
          {/*           className=" btn btn-sm px-[5px] bg-[rgba(144,238,144,0.6)] */}
          {/*               hover:bg-[rgba(0,182,255,0.8)] text-white" */}
          {/*         > */}
          {/*           Message */}
          {/*         </button> */}
          {/*       </div> */}
          {/*     </div> */}
          {/*   </div> */}
        </div>
        <div className="flex justify-end  ">
          <hr className=" mt-2 w-[85%] h-[0.5px] bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
      </div>
    </>
  );
};

export default SearchUser;
