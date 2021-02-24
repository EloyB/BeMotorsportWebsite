import React, { useState } from "react";
import { useStateValue } from "../context/StateProvider";
import PrimaryButton from "./buttons/PrimaryButton";
import DriversStep from "./steps/DriversStep";
import PersonalInformationStep from "./steps/PersonalInformationStep";
import TrackdaysStep from "./steps/TrackdaysStep";

export default function MultiStepForm() {
  const [{ activeStep }, dispatch] = useStateValue();

  const steps = [
    { name: "trackdays", component: <TrackdaysStep /> },
    { name: "drivers", component: <DriversStep /> },
    { name: "personal information", component: <PersonalInformationStep /> },
  ];

  return <div>{steps[activeStep].component}</div>;
}
