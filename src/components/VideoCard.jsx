import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { API_KEY } from "../constants/Youtube";
import axios from "axios";
import { useSelector } from "react-redux";

const VideoCard = ({ item }) => {
  const [ytIcon, setYtIcon] = useState("");
  const open = useSelector((store) => store.app.open);

  const getYoutubeChannelName = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`
      );
      setYtIcon(res.data.items[0].snippet.thumbnails.medium?.url);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getYoutubeChannelName();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={`${open ? "w-80" : "w-96"} pt-2 cursor-pointer`}>
      <img
        src={item.snippet.thumbnails.medium?.url}
        alt="thumbnail"
        className="w-full h-[60%] rounded-xl object-cover hover:rounded-none"
      />
      <div className="flex mt-2">
        <Avatar src={ytIcon} size={40} round={true} />

        <div className=" ml-4">
          <h1 className="font-bold">{item.snippet.title}</h1>
          <p className="text-sm text-gray-500 mt-2">
            {item.snippet.channelTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
