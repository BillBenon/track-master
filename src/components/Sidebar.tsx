import React from "react";
import logo from "../assets/logo.png";
import {HomeIcon} from "../assets/icons/index";

function Sidebar() {
  const sides = [
    {
      svg: <HomeIcon />,
      text: "Home",
    },
    {
      svg: <HomeIcon />,
      text: "Data",
    },
    {
      svg: <HomeIcon />,
      text: "Resources",
    },
    {
      svg: <HomeIcon />,
      text: "Credits",
    },
    {
      svg: <HomeIcon />,
      text: "Settings",
    },
  ];
  

  return (
    <div className="bg-[rgba(22,19,19,0.98)] py-5 justify-between text-white flex flex-col items-center px-10 h-screen w-fit">
      <img src={logo} />
      <div className="flex flex-col gap-5">
        {sides.map((side, index) => (
          <div
            key={index}
            className={`flex ${
              index === 0 && "bg-[#1F1F1F]"
            } hover:bg-[#1F1F1F] cursor-pointer rounded-md py-4 pr-14 pl-5 gap-4 items-center`}
          >
            <div>{side.svg}</div>
            <div className="text-lg font0-medium">{side.text}</div>
          </div>
        ))}
      </div>
      <div className="flex items-center w-[90%] gap-4">
        <HomeIcon />
        <div>Logout</div>
      </div>
    </div>
  );
}

export default Sidebar;
