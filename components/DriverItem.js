import React from "react";

export default function DriverItem() {
  return (
    <div className="bg-white w-full flex justify-between">
      <div className="bg-motorblue flex items-center justify-center px-3 py-5">
        <p className="text-white font-bold text-lg">#1</p>
      </div>
      <div className="flex flex-1 flex-col justify-center pl-3">
        <p className="text-base font-bold">Driver Name + Last name</p>
        <p className="text-base">Age</p>
      </div>
      <div className="flex justify-center items-center px-3">
        <svg
          className="w-5 h-5 text-motorblue cursor-pointer"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
