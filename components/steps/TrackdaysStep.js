import React, { useEffect, useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import TrackdaysStepItem from "../TrackdaysStepItem";
import { useStateValue } from "../../context/StateProvider";
import { useRouter } from "next/router";

export default function TrackdaysStep() {
  const [{ selectedTrackdays }, dispatch] = useStateValue();
  const router = useRouter();

  const handleOnNext = () => {
    if (
      selectedTrackdays.length === 0 ||
      selectedTrackdays.findIndex(
        (x) => x.selectedPlan === undefined || x.selectedCar === undefined
      ) > -1
    ) {
      return;
    }
    dispatch({ type: "SET_ACTIVE_STEP", activeStep: 1 });
  };

  return (
    <div className="w-full py-10 px-5 bg-gray-50">
      <div className="max-w-screen-lg m-auto pb-5 flex flex-col justify-between xs:flex-row xs:items-center">
        <p className="font-bold text-3xl pb-3 xs:pb-0 md:text-4xl">Trackdays</p>
        {selectedTrackdays.length > 0 && (
          <PrimaryButton label="Trackdays zoeken" onClick={() => router.push("/trackdays")} />
        )}
      </div>
      <div className="max-w-screen-lg m-auto space-y-2 flex flex-col">
        {selectedTrackdays.length > 0 ? (
          selectedTrackdays.map((item, index) => (
            <TrackdaysStepItem key={index} index={index} trackday={item} />
          ))
        ) : (
          <div className="bg-white px-4 py-7 text-left xs:text-center">
            <p
              className="text-motorblue cursor-pointer font-semibold underline"
              onClick={() => router.push("/trackdays")}
            >
              First select your trackdays from our list!
            </p>
          </div>
        )}
        <div className="ml-auto pt-8">
          <PrimaryButton label="Next" onClick={handleOnNext} />
        </div>
      </div>
    </div>
  );
}
