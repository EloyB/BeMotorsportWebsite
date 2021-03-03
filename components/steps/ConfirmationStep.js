import React from "react";

export default function ConfirmationStep() {
  return (
    <div className="w-full py-10 px-5 bg-gray-50">
      <div className="max-w-screen-lg m-auto pb-5 flex flex-col justify-between xs:flex-row xs:items-center">
        <p className="font-bold text-3xl pb-3 xs:pb-0 md:text-4xl">
          <span className="text-motorblue">Stap 4 - </span>
          Bedankt!
        </p>
      </div>
      <div className="max-w-screen-lg m-auto space-y-2 flex flex-col">
        <p>
          We hebben succesvol je aanvraag voor een trackday aangekregen. Via mail heb je de offerte
          doorgekregen hiervoor. Wij nemen zo snel mogelijk contact met u op om verdere stappen te
          ondernemen in het plannen van jullie trackday
        </p>
      </div>
    </div>
  );
}
