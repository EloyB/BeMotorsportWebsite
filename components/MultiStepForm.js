import React, { useState } from "react";
import PrimaryButton from "./buttons/PrimaryButton";
import DriversStep from "./steps/DriversStep";
import PersonalInformationStep from "./steps/PersonalInformationStep";
import TrackdaysStep from "./steps/TrackdaysStep";

export default function MultiStepForm() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { name: "personal information", component: <PersonalInformationStep /> },
    { name: "drivers", component: <DriversStep /> },
    { name: "trackdays", component: <TrackdaysStep /> },
  ];

  const handleButtonClick = (action) => {
    switch (action) {
      case "back":
        if (activeStep === 0) {
          return;
        }
        setActiveStep(activeStep - 1);
        break;
      case "next":
        if (activeStep + 1 === steps.length) {
          return;
        }
        setActiveStep(activeStep + 1);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {steps[activeStep].component}
      <div className="bg-gray-50 ">
        <div className="max-w-screen-lg m-auto py-5 px-3 flex justify-end lg:px-0 ">
          <button
            className="px-6 py-3 focus:outline-none sm:px-16"
            onClick={(e) => handleButtonClick(e.target.value)}
            value="back"
          >
            back
          </button>
          <PrimaryButton label="next" onClick={(value) => handleButtonClick(value)} />
        </div>
      </div>
    </div>
  );
}
