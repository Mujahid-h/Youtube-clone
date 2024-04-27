import React from "react";
import Avatar from "react-avatar";

const ChatMessage = ({ item }) => {
  return (
    <div className="flex items-center">
      <div>
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRU7QDd8mkzxgbuNoRa5Hu70V3spfu97HEd-NPPkPSSQ&s"
          size={25}
          round={true}
          className="cursor-pointer"
        />
      </div>
      <div className="flex items-center">
        <h1 className="font-bold text-sm ml-2">{item.name}</h1>
        <p className="text-sm py-2 ml-2">{item.message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
