import React from "react";

const Wrapper = ({ children, className }) => {
  return (
    <div className={`w-full max-w-[1280px] mx-auto px-4 ${className || ""}`}>
      {children}
    </div>
  );
};

export default Wrapper;
