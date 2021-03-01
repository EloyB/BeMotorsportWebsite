import React from "react";

export const RoundButton = ({ children, url, description, reverse }) => {
  return (
    <div className={`flex items-center ${reverse ? "md:flex-row-reverse" : "flex-row"}`}>
      <a
        href={url}
        target="_blank"
        className="w-9 h-9 bg-motorblue rounded-full flex items-center justify-center"
      >
        {children}
      </a>
      {description && (
        <p className={`pl-3 ${reverse ? "pr-3 md:pl-0" : "pl-3"} text-motorblue`}>{description}</p>
      )}
    </div>
  );
};
