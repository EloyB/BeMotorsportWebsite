import { clearStorage } from "mapbox-gl";
import React, { useEffect, useState } from "react";
import PrimaryButton from "./buttons/PrimaryButton";
import TrackdaysStepPlanItem from "./TrackdaysStepPlanItem";
import { useStateValue } from "../context/StateProvider";
import CarItem from "./CarItem";
import { useRouter } from "next/router";
import { activeLocale } from "../data/translations";
import moment from "moment";

export default function TrackdaysStepItem({ trackday }) {
  // Translation
  const router = useRouter();
  const { locale } = router;
  const t = activeLocale(locale);

  // Hardcoded plans and cars
  const plans = [
    { name: "Renting", value: "Renting", show: trackday.plans.renting },
    { name: "Share a ride", value: "Share", show: trackday.plans.share },
    { name: "VIP", value: "Vip", show: trackday.plans.vip },
    { name: "Business", value: "Business", show: trackday.plans.business },
    { name: "Training", value: "Business", show: trackday.plans.training },
  ];
  const cars = [
    {
      name: "Porsche Cayman GT4 Clubsport",
      value: "Porsche",
      image: "/porshe.jpg",
      show: trackday.cars.porsche,
    },
    {
      name: "Peugeot 206 GTi",
      value: "Peugeot",
      image: "/peugeot-links.jpg",
      show: trackday.cars.peugeot,
    },
  ];

  // State hooks
  const [{}, dispatch] = useStateValue();
  const [open, setOpen] = useState(true);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(
    plans.findIndex((x) => x.value === trackday.selectedPlan)
  );
  const [selectedCarIndex, setSelectedCarIndex] = useState(
    cars.findIndex((x) => x.value === trackday.selectedCar)
  );

  return (
    <div className={`p-5 sm:p-8 space-y-3 bg-white`}>
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
              <span className="text-motorblue font-semibold">
                {moment(trackday.date).format("DD-MM-YYYY")}{" "}
              </span>
              | {trackday.circuit.country}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-1 sm:space-x-3">
          <button
            className="h-4 w-4 cursor-pointer focus:outline-none"
            onClick={() =>
              dispatch({
                type: "DELETE_SELECTED_TRACKDAY",
                trackday,
              })
            }
          >
            <svg
              className="w-6 h-6 text-motorblue cursor-pointer"
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
          </button>
          <button
            className="h-4 w-4 cursor-pointer focus:outline-none"
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
      </div>
      <div className={`${open ? "block" : "hidden"}`}>
        <div className="flex py-6 space-y-5 flex-col">
          <div>
            <p className="font-bold text-md md:text-xl">
              {t.reservationPage.trackdaysStep.chooseCarTitle}:
            </p>
            <div className="space-y-2 pt-4 sm:flex sm:space-y-0 sm:space-x-2">
              {cars.map(
                (item, index) =>
                  item.show && (
                    <CarItem
                      key={index}
                      selectedIndex={selectedCarIndex}
                      index={index}
                      img={item.image}
                      name={item.name}
                      onClick={() => {
                        setSelectedCarIndex(index);
                        dispatch({
                          type: "UPDATE_SELECTED_TRACKDAY",
                          trackday: {
                            ...trackday,
                            selectedPlan: trackday.selectedPlan,
                            selectedCar: cars[index]?.value,
                          },
                        });
                      }}
                    />
                  )
              )}
            </div>
          </div>
          <div>
            <p className="font-bold text-md md:text-xl">
              {t.reservationPage.trackdaysStep.chooseYourPlanTitle}:
            </p>
            <div className="pt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {plans.map(
                (item, index) =>
                  item.show && (
                    <TrackdaysStepPlanItem
                      key={index}
                      index={index}
                      title={item.name}
                      selectedIndex={selectedPlanIndex}
                      onClick={() => {
                        setSelectedPlanIndex(index);
                        dispatch({
                          type: "UPDATE_SELECTED_TRACKDAY",
                          trackday: {
                            ...trackday,
                            selectedPlan: plans[index]?.value,
                            selectedCar: trackday.selectedCar,
                          },
                        });
                      }}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
