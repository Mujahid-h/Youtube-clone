import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY } from "../constants/Youtube";
import Avatar from "react-avatar";
import { BiDislike, BiLike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
import LiveChat from "./LiveChat";
import { useDispatch } from "react-redux";
import { setMessage } from "../utils/chatSlice";

const Watch = () => {
  const [input, setInput] = useState("");
  const [singleVideo, setSingleVideo] = useState(null);
  const [serachParams] = useSearchParams();
  const videoId = serachParams.get("v");
  const dispatch = useDispatch();

  const getSingleVideo = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&autoplay=1&id=${videoId}&key=${API_KEY}`
      );
      setSingleVideo(res?.data?.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleVideo();
    // eslint-disable-next-line
  }, []);

  const sendMessage = () => {
    dispatch(
      setMessage({
        name: "Mujahid Programmer",
        message: input,
      })
    );
    setInput("");
  };

  return (
    <div className="flex ml-4 w-[100%] mt-8">
      <div className="flex w-[100%]">
        <div className="w-[65%]">
          <iframe
            width="100%"
            height="80%"
            src={`https://www.youtube.com/embed/${videoId}?&autoplay=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-2xl"
          />
          <h1 className="font-bold text-lg">{singleVideo?.snippet?.title}</h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between w-[40%]">
              <div className="flex">
                <Avatar
                  src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
                  size={35}
                  round={true}
                />
                <h1 className="font-bold ml-2">
                  {singleVideo?.snippet?.channelTitle}
                </h1>
              </div>
              <button className="px-4 py-1 font-medium bg-black text-white rounded-full">
                Subscribe
              </button>
            </div>
            <div className="flex items-center w-[45%] justify-between mt-2">
              <div className="flex items-center cursor-pointer bg-gray-200 px-3 py-2 rounded-full">
                <BiLike size="20px" className="mr-2" />
                <span>|</span>
                <BiDislike size="20px" className="ml-2" />
              </div>
              <div className="flex items-center cursor-pointer bg-gray-200 px-3 py-2 rounded-full">
                <PiShareFatLight size="20px" />
                <span>Share</span>
              </div>
              <div className="flex items-center cursor-pointer bg-gray-200 px-3 py-2 rounded-full">
                <LiaDownloadSolid />
                <span>Download</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[30%] border border-gray-300 ml-8 rounded-lg h-fit px-4 py-2">
          <div className="flex justify-between items-center">
            <h1>Top Chat</h1>
            <BsThreeDotsVertical />
          </div>

          <div className="overflow-y-auto h-[25rem] flex flex-col-reverse">
            <LiveChat />
          </div>

          <div className="border-t border-gray-200 p-2">
            <div className="flex items-center w-[100%]">
              <div>
                <Avatar
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRU7QDd8mkzxgbuNoRa5Hu70V3spfu97HEd-NPPkPSSQ&s"
                  size={40}
                  round={true}
                  className="cursor-pointer"
                />
              </div>
              <input
                type="text"
                placeholder="Send message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="border-b border-gray-300 outline-none mx-2 w-[90%]"
              />
              <div className="bg-gray-100 rounded-full p-2 cursor-pointer hover:bg-gray-200">
                <AiOutlineSend onClick={sendMessage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
