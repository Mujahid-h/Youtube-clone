import React, { useEffect } from "react";
import { API_KEY, YOUTUBE_VIDEO_API } from "../constants/Youtube";
import axios from "axios";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setVideo } from "../utils/appSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();

  const { video, category } = useSelector((store) => store.app);

  const fetchYoutubeVideo = async () => {
    try {
      const res = await axios.get(YOUTUBE_VIDEO_API);
      dispatch(setVideo(res?.data?.items));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVideoByCategory = async () => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`
      );
      dispatch(setVideo(res?.data?.items));
    } catch (error) {
      console.log(error);
    }
  };

  // You all need to use the useEffect hook whenever you are making api/network call
  useEffect(() => {
    if (category === "All") {
      fetchYoutubeVideo();
    } else {
      fetchVideoByCategory();
    }
  }, [category]);

  return (
    <div className="grid grid-cols-3 gap-2">
      {video.map((item) => (
        <Link
          to={`/watch?v=${
            typeof item.id === "object" ? item.id.videoId : item.id
          }`}
          key={item.id}
        >
          <VideoCard item={item} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
