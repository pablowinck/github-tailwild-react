import React from "react";
import { BsFillSunFill } from "react-icons/bs";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between">
      <div className="font-bold text-lime-50">devfinder</div>
      <div className="uppercase flex gap-2 items-center font-bold text-sm text-lime-50">
        light
        <BsFillSunFill />
      </div>
    </div>
  );
};

export default Header;
