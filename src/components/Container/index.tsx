import React from "react";

const Container: React.FC = ({ children }) => {
  return (
    <div className="container h-auto w-[35rem] p-5 flex flex-col gap-7">
      {children}
    </div>
  );
};

export default Container;
