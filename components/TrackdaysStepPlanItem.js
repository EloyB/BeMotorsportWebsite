import React from "react";

export default function TrackdaysStepPlanItem({ index, selectedIndex, title, onClick }) {
  return (
    <div
      className={`cursor-pointer h-16 ${
        index === selectedIndex ? "bg-motorblue" : "bg-gray-50"
      } col-span-1 px-5 flex items-center justify-between`}
      onClick={onClick}
    >
      <p className={`${index === selectedIndex ? "text-white" : "text-black"}`}>{title}</p>
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
  );
}
