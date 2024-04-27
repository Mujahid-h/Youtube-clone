import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { RiVideoAddLine } from "react-icons/ri";
import Avatar from "react-avatar";
import { MdNotificationsNone } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setOpen, setSuggestion } from "../utils/appSlice";
import axios from "axios";
import { SEARCH_SUGGESTION_API } from "../constants/Youtube";

const Navbar = () => {
  const [input, setInput] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState(false);
  const dispatch = useDispatch();

  const { suggestion } = useSelector((store) => store.app);

  const toggleHandler = () => {
    dispatch(setOpen());
  };

  const searchVideo = () => {
    dispatch(setCategory(input));
    setInput("");
  };

  const showSuggestion = async () => {
    try {
      const res = await axios.get(SEARCH_SUGGESTION_API + input);
      dispatch(setSuggestion(res?.data[1]));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      showSuggestion();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div className="flex justify-center items-center fixed top-0 w-[100%] z-10 bg-white">
      <div className="flex w-[97%] py-1 justify-between items-center">
        <div className="flex items-center cursor-pointer">
          <div
            className="hover:bg-gray-200 rounded-full p-2"
            onClick={toggleHandler}
          >
            <GiHamburgerMenu size={24} />
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png"
            alt="yt_logo"
            width={"115px"}
            className="px-3"
          />
        </div>

        <div className="flex items-center w-[50%]">
          <div className="w-[100%] flex ">
            <input
              type="text"
              className=" w-full  outline-none border border-gray-400 border-r-0 py-2 px-6 rounded-l-full"
              placeholder="Search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onFocus={() => setSearchSuggestion(true)}
            />
            <button
              className="px-6 py-2 border border-gray-400 rounded-r-full bg-gray-100 hover:bg-gray-200"
              onClick={searchVideo}
            >
              <FiSearch size={24} />
            </button>

            {suggestion.length !== 0 && searchSuggestion && (
              <div className="absolute top-2 z-50 w-[43%] py-3 bg-white border border-gray-300 shadow-lg mt-10 rounded-lg ">
                <ul>
                  {suggestion?.map((text, idx) => (
                    <div
                      key={idx}
                      className="px-4 flex items-center hover:bg-gray-200 py-1 cursor-pointer"
                      onClick={() => {
                        setInput(text);
                        setSearchSuggestion(false);
                      }}
                    >
                      <FiSearch />
                      <li className="px-4 text-medium font-bold">{text}</li>
                    </div>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center">
          <div className="hover:bg-gray-200 rounded-full p-2 cursor-pointer">
            <RiVideoAddLine size={22} />
          </div>
          <div className="mx-4 mr-6  hover:bg-gray-200 rounded-full p-2 cursor-pointer">
            <MdNotificationsNone size={24} />
          </div>
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRU7QDd8mkzxgbuNoRa5Hu70V3spfu97HEd-NPPkPSSQ&s"
            size={40}
            round={true}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
