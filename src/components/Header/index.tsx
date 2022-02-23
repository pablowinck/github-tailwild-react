import React from "react";
import { BsFillSunFill } from "react-icons/bs";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between">
      <div className="font-bold text-white">devfinder</div>
      <div className="uppercase flex gap-2 items-center font-bold text-sm text-white select-none cursor-pointer hover:text-grey transition-colors duration-300">
        light
        <BsFillSunFill />
      </div>
    </div>
  );
};

export default Header;
