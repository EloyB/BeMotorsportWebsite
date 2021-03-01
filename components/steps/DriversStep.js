import { useRouter } from "next/router";
import React, { useState } from "react";
import { useStateValue } from "../../context/StateProvider";
import { activeLocale } from "../../data/translations";
import PrimaryButton from "../buttons/PrimaryButton";
import Checkbox from "../Checkbox";
import DriverItem from "../DriverItem";
import TextInput from "../TextInput";

export default function DriversStep() {
  const [{ drivers }, dispatch] = useStateValue();
  const [driver, setDriver] = useState({
    firstName: "",
    lastName: "",
    age: "",
    hasExperience: false,
  });
  const router = useRouter();
  const { locale } = router;
  const t = activeLocale(locale);


  const handleOnNext = () => {
    if (drivers.length > 0) {
      dispatch({ type: "SET_ACTIVE_STEP", activeStep: 2 });
    }
  };

  return (
    <div className="w-full py-10 px-5 bg-gray-50">
      <div className="max-w-screen-lg m-auto">
        <p className="font-bold text-2xl pb-5 md:text-4xl">{t.reservationPage.driversStep.title}</p>
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
              <Checkbox
                label={t.reservationPage.driversStep.hasExperience}
                onChange={(value) => setDriver({ ...driver, hasExperience: value })}
                value={driver.hasExperience}
              />
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
              Back
            </button>
            <PrimaryButton label={t.reservationPage.general.nextButtonText} onClick={handleOnNext} />
          </div>
        </div>
      </div>
    </div>
  );
}
