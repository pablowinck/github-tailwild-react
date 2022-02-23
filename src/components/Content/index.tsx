import React from "react";
import Infos from "../Infos";
import SocialMedia from "../SocialMedia";

const Content: React.FC = () => {
  return (
    <div className="h-3/4 w-full rounded-lg p-10 bg-200">
      <div className="flex gap-5">
        <div className="w-auto">
          <div className="w-20 h-20 rounded-full bg-white"></div>
        </div>
        <div className="w-full h-full flex flex-col">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <div className="w-full flex justify-between items-center">
                <div className="text-2xl text-white font-bold">The Octocat</div>
                <div className="text-sm text-grey">Joined 25 Jan 2011</div>
              </div>
              <div className="w-full text-sm text-light-blue">@octocat</div>
            </div>

            <div className="w-full text-sm text-grey">
              This profile has no bio
            </div>

            <Infos />
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
