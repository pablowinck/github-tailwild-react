import React from "react";
import Infos from "../Infos";
import SocialMedia from "../SocialMedia";

const Content: React.FC = () => {
  return (
    <div className="h-3/4 w-full rounded-lg p-10 bg-white bg-opacity-10">
      <div className="flex gap-5">
        <div className="w-auto">
          <div className="w-20 h-20 rounded-full bg-white"></div>
        </div>
        <div className="w-full h-full flex flex-col">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <div className="w-full flex justify-between items-center">
                <div className="text-2xl text-stone-50 font-bold">
                  The Octocat
                </div>
                <div className="text-sm text-stone-50">Joined 25 Jan 2011</div>
              </div>
              <div className="w-full text-sm text-blue-600">@octocat</div>
            </div>

            <div className="w-full text-sm text-stone-300">
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
