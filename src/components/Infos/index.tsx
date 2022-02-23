import React from "react";
import { useUserContext } from "../../context/UserContext";

const Infos: React.FC = () => {
  const { data } = useUserContext();
  console.log("infos data", data);

  return (
    <div className="h-auto w-full bg-300 rounded-lg p-5">
      <div className="flex justify-evenly">
        <div className="flex flex-col">
          <div className="text-sm text-grey">Repos</div>
          <div className="text-lg text-white font-bold">
            {data?.public_repos}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="text-sm text-grey">Followers</div>
          <div className="text-lg text-white font-bold">{data?.followers}</div>
        </div>

        <div className="flex flex-col">
          <div className="text-sm text-grey">Following</div>
          <div className="text-lg text-white font-bold">{data?.following}</div>
        </div>
      </div>
    </div>
  );
};

export default Infos;
