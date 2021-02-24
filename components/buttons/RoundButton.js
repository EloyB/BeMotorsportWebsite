import React from "react";

export const RoundButton = ({ children, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      className="w-9 h-9 bg-motorblue rounded-full my-3 flex items-center justify-center"
    >
      {children}
    </a>
  );
};
