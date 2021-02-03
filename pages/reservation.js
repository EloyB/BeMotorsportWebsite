import React from "react";
import MultiStepForm from "../components/MultiStepForm";

export default function reservation() {
  return (
    <div className="pt-20">
      <div className="py-10">
        <h1 className="text-4xl font-semibold text-center py-5 lg:text-5xl">Onze Trackdays</h1>
        <p className="text-center text-sm max-w-screen-md m-auto">
          Onze sportauto's huren via BE motorsport is nog nooit zo makkelijk geweest! Kijk op de
          kaart waar je graag wilt rijden, klik in onderstaande agenda wanneer je beschikbaar bent,
          vul je gegevens in en wij regelen de rest! Aarzel niet om ons te contacteren als de dag of
          auto van je keuze reeds geblokkeerd is. We zoeken samen naar een oplossing.
        </p>
      </div>
      <MultiStepForm />
    </div>
  );
}
