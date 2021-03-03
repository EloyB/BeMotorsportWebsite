import { useRouter } from "next/router";
import React, { useState } from "react";
import { useStateValue } from "../../context/StateProvider";
import { activeLocale } from "../../data/translations";
import PrimaryButton from "../buttons/PrimaryButton";
import Checkbox from "../Checkbox";
import DriverItem from "../DriverItem";
import TextInput from "../TextInput";
import TrackdaysStepPlanItem from "../TrackdaysStepPlanItem";

export default function DriversStep() {
  const [{ drivers }, dispatch] = useStateValue();
  const [driver, setDriver] = useState({
    firstName: "",
    lastName: "",
    age: "",
    hasExperience: false,
    instuctorNeeded: true,
  });
  const router = useRouter();
  const { locale } = router;
  const t = activeLocale(locale);

  const handleOnNext = () => {
    if (drivers.length > 0) {
      dispatch({ type: "SET_ACTIVE_STEP", activeStep: 2 });
    }
  };
  const setExperience = (value) => {
    setDriver({
      ...driver,
      hasExperience: value,
      instuctorNeeded: value ? false : true,
    });
  };
  const setInstructor = (value) => {
    setDriver({
      ...driver,
      instuctorNeeded: value,
    });
  };

  return (
    <div className="w-full py-10 px-5 bg-gray-50">
      <div className="max-w-screen-lg m-auto">
        <p className="font-bold text-2xl pb-5 md:text-4xl">
          <span className="text-motorblue">Stap 2 - </span>
          {t.reservationPage.driversStep.title}
        </p>
        <div className="flex flex-col">
          <div className="divide-y-2 lg:flex lg:divide-y-0 lg:divide-x-2">
            <div className="w-full space-y-4 pb-5 lg:pr-5">
              <TextInput
                label={t.reservationPage.general.firstName}
                value={driver.firstName}
                onChange={(value) => setDriver({ ...driver, firstName: value })}
                requirement={driver.firstName === ""}
                required
                errorMessage={"First name is required!"}
              />
              <TextInput
                label={t.reservationPage.general.lastName}
                value={driver.lastName}
                onChange={(value) => setDriver({ ...driver, lastName: value })}
                requirement={driver.lastName === ""}
                required
                errorMessage={"Last name is required!"}
              />
              <TextInput
                label={t.reservationPage.driversStep.age}
                onChange={(value) => setDriver({ ...driver, age: value })}
                value={driver.age}
                requirement={driver.age === ""}
                required
                errorMessage={"Age is required!"}
              />
              <div className="pt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div
                  className={`cursor-pointer h-16 ${
                    driver.hasExperience ? "bg-motorblue" : "bg-white"
                  } col-span-1 px-5 flex items-center justify-between`}
                  onClick={() => setExperience(true)}
                >
                  <p className={`${driver.hasExperience ? "text-white" : "text-black"}`}>
                    {t.reservationPage.driversStep.hasExperience}
                  </p>
                  {driver.hasExperience && (
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
                <div
                  className={`cursor-pointer h-16 ${
                    !driver.hasExperience ? "bg-motorblue" : "bg-white"
                  } col-span-1 px-5 flex items-center justify-between`}
                  onClick={() => setExperience(false)}
                >
                  <p className={`${!driver.hasExperience ? "text-white" : "text-black"}`}>
                    {t.reservationPage.driversStep.hasNoExperience}
                  </p>
                  {!driver.hasExperience && (
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

              <div className="pt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div
                  className={`cursor-pointer h-16 ${
                    !driver.instuctorNeeded ? "bg-motorblue" : "bg-white"
                  } col-span-1 px-5 flex items-center justify-between`}
                  onClick={() => setInstructor(false)}
                >
                  <p className={`${!driver.instuctorNeeded ? "text-white" : "text-black"}`}>
                    {t.reservationPage.driversStep.noInstructorNeeded}
                  </p>
                  {!driver.instuctorNeeded && (
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
                <div
                  className={`cursor-pointer h-16 ${
                    driver.instuctorNeeded ? "bg-motorblue" : "bg-white"
                  } col-span-1 px-5 flex items-center justify-between`}
                  onClick={() => setInstructor(true)}
                >
                  <p className={`${driver.instuctorNeeded ? "text-white" : "text-black"}`}>
                    {t.reservationPage.driversStep.instructorNeeded}
                  </p>
                  {driver.instuctorNeeded && (
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

              <button
                className={`px-6 py-3 w-full bg-motorblue text-white focus:outline-none sm:px-16 sm:w-auto ${
                  driver.firstName !== "" && driver.lastName !== "" && driver.age !== ""
                    ? "opacity-100"
                    : "opacity-75"
                }`}
                onClick={(e) => {
                  dispatch({
                    type: "ADD_DRIVER",
                    driver: {
                      ...driver,
                      id: Math.floor(Math.random() * 1001) + 1,
                    },
                  });
                  setDriver({
                    firstName: "",
                    lastName: "",
                    age: "",
                    hasExperience: false,
                  });
                }}
                value={t.reservationPage.general.nextButtonText}
                disabled={driver.firstName === "" || driver.lastName === "" || driver.age === ""}
              >
                {t.reservationPage.driversStep.addButtonText}
              </button>
            </div>
            <div className="w-full pt-5 space-y-5 lg:pl-5">
              {drivers.length > 0 ? (
                drivers.map((item, index) => <DriverItem key={index} driver={item} index={index} />)
              ) : (
                <div className="bg-white px-4 py-7 text-center">
                  <p className="text-motorblue cursor-pointer font-semibold">
                    {t.reservationPage.driversStep.placeholder}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="ml-auto pt-8">
            <button
              className="px-6 py-3 bg-transparent focus:outline-none sm:px-16"
              onClick={() => dispatch({ type: "SET_ACTIVE_STEP", activeStep: 0 })}
            >
              {t.reservationPage.general.backButtonText}
            </button>
            <PrimaryButton
              label={t.reservationPage.general.nextButtonText}
              onClick={handleOnNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
