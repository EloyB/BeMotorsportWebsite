import React, { useState } from "react";
import TrackdayAssetItem from "./TrackdayAssetItem";

export default function TrackdayItem({ index, circuitname, date, country }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`p-8 space-y-3 ${index % 2 !== 0 ? "bg-gray-50" : "bg-white"}`}>
      <div
        className="cursor-pointer flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center">
          <div>
            <img className="w-10 h-auto lg:w-14" src="/track-icon.png" alt="track icon" />
          </div>
          <div className="ml-5">
            <p className="font-bold text-md md:text-xl">Circuit Name</p>
            <p className="text-xs md:text-sm">Date | Country</p>
          </div>
        </div>
        <button
          className="h-5 w-5 cursor-pointer focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <svg
            className={`w-6 h-6 text-motorblue transform transition duration-300 ${
              open ? "rotate-90" : "rotate-0"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          open ? "flex" : "hidden"
        } py-6 space-y-5 flex-col lg:flex-row lg:items-center lg:justify-between lg:space-y-0`}
      >
        <div className="space-y-5 flex flex-col sm:flex-row sm:space-y-0 sm:justify-between lg:w-2/3 xl:w-1/2">
          <div>
            <p className="text-gray-600 text-md font-semibold">Licenses needed</p>
            <TrackdayAssetItem description="Racelicense required" />
            <TrackdayAssetItem description="Experience required" />
          </div>
          <div>
            <p className="text-gray-600 text-md font-semibold">Available cars</p>
            <TrackdayAssetItem checked description="Porsche" />
            <TrackdayAssetItem checked description="Peugeot" />
          </div>
          <div>
            <p className="text-gray-600 text-md font-semibold">Available formulas</p>
            <TrackdayAssetItem checked description="Renting" />
            <TrackdayAssetItem description="VIP" />
          </div>
        </div>
        <div className="flex space-x-3 pt-6 lg:flex-col lg:pt-0 lg:space-x-0 lg:space-y-2">
          <div className="cursor-pointer w-10 h-10 bg-motorblue rounded-md flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="cursor-pointer w-10 h-10 bg-motorblue rounded-md flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}