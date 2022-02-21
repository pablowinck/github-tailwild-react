import React from "react";

const Container: React.FC = ({ children }) => {
  return (
    <div className="container h-auto w-[35rem] flex flex-col gap-7">
      {children}
    </div>
  );
};

export default Container;
