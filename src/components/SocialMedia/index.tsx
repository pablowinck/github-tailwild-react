import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { ImLocation2, ImTwitter } from "react-icons/im";
import { MdOutlineLocationCity } from "react-icons/md";
import { useUserContext } from "../../context/UserContext";

const SocialMedia: React.FC = () => {
  const { data } = useUserContext();

  const currentData = [
    {
      icon: <ImLocation2 />,
      text: data?.location,
    },
    {
      icon: <ImTwitter />,
      text: data?.twitter_username,
    },
    {
      icon: <AiFillGithub />,
      text: data?.login && "/" + data?.login,
    },
    {
      icon: <MdOutlineLocationCity />,
      text: data?.login && `@${data?.login}`,
    },
  ];

  return (
    <div className="h-auto w-full grid sm:grid-cols-2 grid-cols-1 gap-4">
      {currentData.map(({ icon, text }, index) => (
        <div
          key={index}
          className="sm:text-sm text-md sm:w-32 w-full flex items-center gap-2 text-white"
        >
          <div className={`${!text && "text-grey"}`}>{icon}</div>
          <div className={`${!text && "text-grey select-none"}`}>
            {text || "Not Available"}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
