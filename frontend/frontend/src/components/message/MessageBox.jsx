import React from "react";
import { MdAddPhotoAlternate } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import toast from "react-hot-toast";
import { useSendMessage } from "../../hooks/useSendMessage";
import { useSocketMessage } from "../../hooks/useSocketMessage";

const MessageBox = () => {
  let [message, setMessage] = React.useState("");
  const { loading, sendMessage } = useSendMessage();
  const { socketMessage } = useSocketMessage();

  const handleSendMessage = async () => {
    message = message?.trim();
    if (message) {
      console.log("Message is " + message);
      socketMessage({ message });
      await sendMessage({ message });
    } else {
      toast.error("Message cannot be empty", {
        duration: 1000,
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    }
    setMessage("");
  };
  return (
    <>
      {/* <div className="navbar bg-base-100 fixed bottom-0 w-full"> */}
      <div className="navbar bg-base-100 fixed bottom-0  z-50 w-full flex items-center">
        <MdAddPhotoAlternate size={30} />
        {/* <div class="w-full pl-3 pr-1 py-1 rounded-3xl border border-gray-200 items-center gap-2 inline-flex justify-between"> */}

        <input
          type="text"
          placeholder="Type message"
          className="w-[51%] pl-2 pr-5 py-1 ml-2 mr-2  rounded-3xl border border-gray-200
          items-center gap-2 "
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <BsEmojiSmile size={28} className="ml-2 mr-2" />

        <div className="w-[5%] ml-2">
          <button
            onClick={handleSendMessage}
            className="items-center flex px-3 py-2 bg-indigo-600 rounded-full shadow "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g id="Send 01">
                <path
                  id="icon"
                  d="M9.04071 6.959L6.54227 9.45744M6.89902 10.0724L7.03391 10.3054C8.31034 12.5102 8.94855 13.6125 9.80584 13.5252C10.6631 13.4379 11.0659 12.2295 11.8715 9.81261L13.0272 6.34566C13.7631 4.13794 14.1311 3.03408 13.5484 2.45139C12.9657 1.8687 11.8618 2.23666 9.65409 2.97257L6.18714 4.12822C3.77029 4.93383 2.56187 5.33664 2.47454 6.19392C2.38721 7.0512 3.48957 7.68941 5.69431 8.96584L5.92731 9.10074C6.23326 9.27786 6.38623 9.36643 6.50978 9.48998C6.63333 9.61352 6.72189 9.7665 6.89902 10.0724Z"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </g>
            </svg>
            <h3 className="text-white text-xs font-semibold leading-4 px-2">
              Send
            </h3>
          </button>
        </div>
      </div>
    </>
  );
};

export default MessageBox;
