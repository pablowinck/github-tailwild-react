import React from "react";
import { ImLink, ImLocation2, ImTwitter } from "react-icons/im";
import { MdOutlineLocationCity } from "react-icons/md";
const data = [
  {
    icon: <ImLocation2 />,
    text: "San Francisco",
  },
  {
    icon: <ImTwitter />,
    text: null,
  },
  {
    icon: <ImLink />,
    text: "https://github.blog",
  },
  {
    icon: <MdOutlineLocationCity />,
    text: "@github",
  },
];

const SocialMedia: React.FC = () => {
  return (
    <div className="h-auto w-full grid grid-cols-2 gap-4">
      {data.map(({ icon, text }, index) => (
        <div
          key={index}
          className="text-sm w-32 flex items-center gap-2 text-stone-300"
        >
          <div>{icon}</div>
          <div>{text ? text : "Not Available"}</div>
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
