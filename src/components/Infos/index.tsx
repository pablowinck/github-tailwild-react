import React from "react";

// import { Container } from './styles';

const Infos: React.FC = () => {
  return (
    <div className="h-auto w-full bg-slate-900 rounded-lg p-5">
      <div className="flex justify-evenly">
        <div className="flex flex-col">
          <div className="text-sm text-stone-300">Repos</div>
          <div className="text-lg text-stone-100 text-bold">8</div>
        </div>

        <div className="flex flex-col">
          <div className="text-sm text-stone-300">Followers</div>
          <div className="text-lg text-stone-100 text-bold">3938</div>
        </div>

        <div className="flex flex-col">
          <div className="text-sm text-stone-300">Following</div>
          <div className="text-lg text-stone-100 text-bold">9</div>
        </div>
      </div>
    </div>
  );
};

export default Infos;
