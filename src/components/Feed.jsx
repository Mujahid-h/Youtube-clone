import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const Feed = () => {
  const open = useSelector((store) => store.app.open);

  return (
    <div className={`mx-5 ${open ? "w-[80%]" : "w-[91%]"} `}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default Feed;
