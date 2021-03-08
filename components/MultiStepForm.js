import React, { useState } from "react";
import { useStateValue } from "../context/StateProvider";
import PrimaryButton from "./buttons/PrimaryButton";
import DriversStep from "./steps/DriversStep";
import PersonalInformationStep from "./steps/PersonalInformationStep";
import TrackdaysStep from "./steps/TrackdaysStep";
import Stepper from "@material-ui/core/Stepper";
import StepButton from "@material-ui/core/StepButton";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import ConfirmationStep from "./steps/ConfirmationStep";
import { activeLocale } from "../data/translations";
import { useRouter } from "next/router";

export default function MultiStepForm() {
  const router = useRouter();
  const { locale } = router;
  const t = activeLocale(locale);
  const [{ activeStep }, dispatch] = useStateValue();

  const steps = [
    { name: t.reservationPage.trackdaysStep.title, component: <TrackdaysStep /> },
    { name: t.reservationPage.driversStep.title, component: <DriversStep /> },
    {
      name: t.reservationPage.personalInformationStep.title,
      component: <PersonalInformationStep />,
    },
    { name: t.reservationPage.confirmationStep.title, component: <ConfirmationStep /> },
  ];

  return (
    <div className="mb-10 flex flex-col items-center">
      <div className="w-full sm:w-1/2">
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
