import React from "react";
import { useSelector } from "react-redux";

export const Message = ({ chat }) => {
  const user = useSelector((state) => state.auth.user);
  const selectedUser = useSelector((state) => state.selectedUser.selectedUser);
  console.log(user);
  console.log(chat);

  let position = "chat-start";
  console.log(user._id, chat?.sender);
  if (user._id == chat?.sender) {
    position = "chat-end";
  }

  return (
    <>
      {position === "chat-start" ? (
        <div className="chat chat-start  pl-3">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Profile Pic"
                // src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                src={selectedUser?.friend?.profilePic}
              />
            </div>
          </div>

          <div className="chat-bubble">{chat?.msg}</div>

          <div className="chat-footer opacity-50">Delivered</div>
        </div>
      ) : (
        <div className="chat chat-end pr-3">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                // src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                src={user?.profilePic}
              />
            </div>
          </div>

          <div className="chat-bubble">{chat?.msg}</div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
      )}
    </>
  );
};
