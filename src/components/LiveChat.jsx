import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../constants/helper";

const LiveChat = () => {
  const message = useSelector((store) => store.chat.message);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        setMessage({
          name: generateRandomName(),
          message: generateRandomMessage(15),
        })
      );
    }, 2000);

    return () => {
      clearInterval(timer);
    };

    // eslint-disable-next-line
  }, []);

  return (
    <div className="px-4 py-2">
      <div>
        {message?.map((item, idx) => (
          <ChatMessage key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default LiveChat;
