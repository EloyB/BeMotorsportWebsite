import React, { useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import TrackdaysStepItem from "../TrackdaysStepItem";
import { useStateValue } from "../../context/StateProvider";

export default function TrackdaysStep() {
  const [{ selectedTrackdays }, dispatch] = useStateValue();

  return (
    <div className="w-full py-10 px-5 bg-gray-50">
      <div className="max-w-screen-lg m-auto pb-5 flex flex-col justify-between xs:flex-row xs:items-center">
        <p className="font-bold text-3xl pb-3 xs:pb-0 md:text-4xl">Trackdays</p>
        <PrimaryButton label="Trackdays zoeken" />
      </div>
      <div className="max-w-screen-lg m-auto space-y-2">
        {selectedTrackdays.map((item, index) => (
          <TrackdaysStepItem key={index} index={index} trackday={item} />
        ))}
      </div>
    </div>
  );
}
