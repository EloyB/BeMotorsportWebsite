import React, { useState } from "react";
import { useStateValue } from "../context/StateProvider";
import PrimaryButton from "./buttons/PrimaryButton";
import DriversStep from "./steps/DriversStep";
import PersonalInformationStep from "./steps/PersonalInformationStep";
import TrackdaysStep from "./steps/TrackdaysStep";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

export default function MultiStepForm() {
  const [{ activeStep }, dispatch] = useStateValue();

  const steps = [
    { name: "trackdays", component: <TrackdaysStep /> },
    { name: "drivers", component: <DriversStep /> },
    { name: "personal information", component: <PersonalInformationStep /> },
  ];

  return (
    <div className="mb-10 flex flex-col items-center">
      <div className="w-1/2">
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((item) => (
            <Step key={item.name}>
              <StepLabel>{item.name}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      {steps[activeStep].component}
    </div>
  );
}
