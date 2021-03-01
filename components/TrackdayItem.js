import React, { useState } from "react";
import TrackdayAssetItem from "./TrackdayAssetItem";
import { useStateValue } from "../context/StateProvider";
import { useRouter } from "next/router";
import moment from "moment";
import { activeLocale } from "../data/translations";

export default function TrackdayItem({ index, trackday }) {
  const router = useRouter();
  const [{ selectedTrackdays }, dispatch] = useStateValue();
  const [open, setOpen] = useState(false);
  const { locale } = router;
  const t = activeLocale(locale);

  const isTrackdaySelected = () => {
    return selectedTrackdays.findIndex((x) => x.id === trackday.id) > -1;
  };

  return (
    <div className={`p-8 space-y-3 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
      <div
        className="cursor-pointer flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center">
          <div>
            <img className="w-10 h-auto lg:w-14" src="/track-icon.png" alt="track icon" />
          </div>
          <div className="ml-5">
            <p className="font-bold text-md md:text-xl">{trackday.circuit.name}</p>
            <p className="text-xs md:text-sm">
              <span className="text-motorblue sm:text-lg font-semibold">
                {moment(trackday.date).format("DD-MM-YYYY")}{" "}
              </span>
              | {trackday.circuit.country}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-1 sm:space-x-5">
          <div
            onClick={() => {
              !isTrackdaySelected() &&
                dispatch({
                  type: "ADD_SELECTED_TRACKDAY",
                  trackday: trackday,
                });

              router.push("/reservation");
            }}
          >
            {isTrackdaySelected() ? (
              <svg
                className="w-6 h-6 text-checkgreen"
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
            ) : (
              <svg
                className="w-6 h-6 text-motorblue"
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
            )}
          </div>
          <button className="cursor-pointer focus:outline-none" onClick={() => setOpen(!open)}>
            <svg
              className="w-6 h-6 text-motorblue"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          open ? "flex" : "hidden"
        } py-6 space-y-5 flex-col lg:flex-row lg:items-start lg:justify-between lg:space-y-0`}
      >
        <div className="space-y-5 flex flex-col sm:flex-row sm:space-y-0 sm:space-x-10 lg:w-2/3 xl:w-1/2">
          <div>
            <p className="text-gray-600 text-md font-semibold">Available cars</p>
            {trackday.cars.porsche && <TrackdayAssetItem checked description="Porsche" />}
            {trackday.cars.peugeot && <TrackdayAssetItem checked description="Peugeot" />}
          </div>
          <div>
            <p className="text-gray-600 text-md font-semibold">Available formulas</p>
            {trackday.plans.renting && <TrackdayAssetItem checked description="Renting" />}
            {trackday.plans.share && <TrackdayAssetItem checked description="Share a ride" />}
            {trackday.plans.vip && <TrackdayAssetItem checked description="VIP" />}
            {trackday.plans.business && (
              <TrackdayAssetItem checked description="Business Experience" />
            )}
          </div>
          {trackday.requirements.raceLicense && trackday.requirements.experience && (
            <div>
              <p className="text-gray-600 text-md font-semibold">Requirements</p>
              {trackday.requirements.raceLicense && (
                <TrackdayAssetItem description="Racelicense required" checked />
              )}
              {trackday.requirements.experience && (
                <TrackdayAssetItem description="Experience required" checked />
              )}
            </div>
          )}
        </div>
        <div className="flex space-x-3 pt-6 lg:flex-col lg:pt-0 lg:space-x-0 lg:space-y-2"></div>
      </div>
    </div>
  );
}
