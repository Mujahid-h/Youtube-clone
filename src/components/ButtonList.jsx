import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../utils/appSlice";

const buttonList = [
  "All",
  "Javascript",
  "Vlogs",
  "Mufti Tariq Masood",
  "Hum Tv",
  "Kapil Sharma",
  "Redux Toolkit",
  "Cricket",
  "Green Entertainment",
  "News",
];

const ButtonList = () => {
  const [active, setActive] = useState("All");
  const dispatch = useDispatch();

  const videoByTagName = (tag) => {
    if (active !== tag) {
      dispatch(setCategory(tag));
      setActive(tag);
    }
  };

  return (
    <div className="py-4 mt-4 flex w-full overflow-x-scroll no-scrollbar">
      {buttonList.map((buttonName, index) => (
        <div key={index}>
          <button
            onClick={() => videoByTagName(buttonName)}
            className={`font-medium px-4 py-1 mx-2 ${
              active === buttonName
                ? "bg-slate-900 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }  rounded-lg overflow-x-hidden`}
          >
            <span className="whitespace-nowrap">{buttonName}</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ButtonList;
