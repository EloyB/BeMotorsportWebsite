import { clearStorage } from "mapbox-gl";
import React, { useState } from "react";
import PrimaryButton from "./buttons/PrimaryButton";
import TrackdaysStepPlanItem from "./TrackdaysStepPlanItem";
import { useStateValue } from "../context/StateProvider";
import CarItem from "./CarItem";

export default function TrackdaysStepItem({ index, trackday }) {
  const [{ filteredTrackdays }, dispatch] = useStateValue();
  const [open, setOpen] = useState(false);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(-1);
  const [selectedCarIndex, setSelectedCarIndex] = useState(-1);
  const plans = ["Renting", "Share a ride", "VIP", "Business"];
  const cars = [
    { name: "Porsche Cayman GT4", image: "/porshe.jpg" },
    { name: "Peugeot 107", image: "/peugeot.jpg" },
  ];

  const handleConfirmTrackday = () => {
    if (selectedCarIndex === -1 || selectedPlanIndex === -1) {
      console.log("no good");
      return;
    }

    dispatch({
      type: "UPDATE_SELECTED_TRACKDAY",
      trackday: {
        ...trackday,
        selectedPlan: plans[selectedPlanIndex],
        selectedCar: cars[selectedCarIndex].name,
      },
    });
  };

  return (
    <div className={`p-8 space-y-3 bg-white`}>
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
              <span className="text-motorblue font-semibold">{trackday.date} </span>|{" "}
              {trackday.circuit.country}
            </p>
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
      <div className={`${open ? "block" : "hidden"}`}>
        <div className="flex py-6 space-y-5 flex-col">
          <div>
            <p className="font-bold text-md md:text-xl">Choose your car:</p>
            <div className="space-y-2 pt-4 sm:flex sm:space-y-0 sm:space-x-2">
              {cars.map((item, index) => (
                <CarItem
                  key={index}
                  selectedIndex={selectedCarIndex}
                  index={index}
                  img={item.image}
                  name={item.name}
                  onClick={() => setSelectedCarIndex(index)}
                />
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold text-md md:text-xl">Choose your plan:</p>
            <div className="pt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {plans.map((item, index) => (
                <TrackdaysStepPlanItem
                  key={index}
                  index={index}
                  title={item}
                  selectedIndex={selectedPlanIndex}
                  onClick={() => setSelectedPlanIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
        <PrimaryButton label="Confirm" onClick={handleConfirmTrackday} />
      </div>
    </div>
  );
}
