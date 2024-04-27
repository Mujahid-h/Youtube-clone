import React from "react";
import { IoMdHome } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { useSelector } from "react-redux";

const sidebarItem = [
  {
    icon: <IoMdHome size={24} />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts size={22} />,
    title: "Shorts",
  },
  {
    icon: <MdSubscriptions size={22} />,
    title: "Subscription",
  },
  {
    icon: <IoMdHome size={24} />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts size={22} />,
    title: "Shorts",
  },
  {
    icon: <MdSubscriptions size={22} />,
    title: "Subscription",
  },
  {
    icon: <IoMdHome size={24} />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts size={22} />,
    title: "Shorts",
  },
  {
    icon: <MdSubscriptions size={22} />,
    title: "Subscription",
  },
  {
    icon: <IoMdHome size={24} />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts size={22} />,
    title: "Shorts",
  },
  {
    icon: <MdSubscriptions size={22} />,
    title: "Subscription",
  },
  {
    icon: <IoMdHome size={24} />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts size={22} />,
    title: "Shorts",
  },
  {
    icon: <MdSubscriptions size={22} />,
    title: "Subscription",
  },
  {
    icon: <IoMdHome size={24} />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts size={22} />,
    title: "Shorts",
  },
  {
    icon: <MdSubscriptions size={22} />,
    title: "Subscription",
  },
  {
    icon: <IoMdHome size={24} />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts size={22} />,
    title: "Shorts",
  },
  {
    icon: <MdSubscriptions size={22} />,
    title: "Subscription",
  },
  {
    icon: <IoMdHome size={24} />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts size={22} />,
    title: "Shorts",
  },
  {
    icon: <MdSubscriptions size={22} />,
    title: "Subscription",
  },
];

const Sidebar = () => {
  const open = useSelector((store) => store.app.open);

  return (
    <div
      className={`relative left-0 ${
        open ? "w-[18%]" : "w-[6%]"
      }  p-5 overflow-y-scroll bg-white overflow-x-hidden h-[calc(100vh-4rem)]`}
    >
      {sidebarItem.map((item, index) => (
        <div
          key={index}
          className={`flex ${
            open ? "p-2 hover:bg-gray-200 hover:rounded-xl" : "my-3"
          }  cursor-pointer `}
        >
          {item.icon}
          <p className={`ml-6 mr-3 ${open ? "" : "hidden"}`}>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
