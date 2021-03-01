import React from "react";

export default function CarItem({ img, name, index, selectedIndex, onClick }) {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <img className="w-full xs:w-72 h-auto" src={img} alt={name} />
      <div
        className={`${
          index === selectedIndex ? "bg-motorblue text-white" : "bg-gray-50 text-black"
        } flex justify-between items-center p-3 w-full xs:w-72`}
      >
        <p>{name}</p>
        {index === selectedIndex && (
          <div>
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
