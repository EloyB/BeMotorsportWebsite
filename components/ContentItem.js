import React from "react";

export default function ContentItem({ image, subTitle, title, body, extension, reverse }) {
  return (
    <div>
      <div
        className={`px-8 xl:px-0 md:flex 
            ${reverse ? "md:flex-row-reverse" : "md:flex-row"} 
        md:items-center lg:max-w-screen-xl lg:m-auto py-10`}
      >
        <img className="w-full max-w-sm md:w-1/3" src={image} alt="groepsfoto" />
        <div
          className={` flex flex-col ${
            reverse ? "md:text-right md:items-end lg:pr-12" : "md:text-left lg:pl-12"
          }  inline-block md:px-5`}
        >
          <div className="pt-3 pb-1 md:pt-0">
            <p className="text-motorblue font-medium">{subTitle}</p>
            <h1 className="text-4xl font-medium sm:text-5xl md:text-3xl lg:text-4xl">{title}</h1>
          </div>
          <p className="text-base font-light lg:text-xl">{body}</p>
          {extension}
        </div>
      </div>
    </div>
  );
}
