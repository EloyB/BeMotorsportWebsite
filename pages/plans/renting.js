import React from "react";
import { useRouter } from "next/router";
import { activeLocale } from "../../data/translations";

export default function renting() {
  const router = useRouter();
  const { locale } = router;
  const t = activeLocale(locale);

  return (
    <div>
      <div className="pt-32 pb-10 md:pb-20 px-8 max-w-screen-xl m-auto lg:px-0">
        <h1 className="text-3xl font-medium text-center py-5 lg:text-5xl">{t.rentingPage.title}</h1>
        <p className="text-center max-w-screen-md m-auto">{t.rentingPage.description}</p>
      </div>
      <div className="hidden md:px-0 md:flex md:flex-row md:items-center lg:max-w-screen-xl lg:m-auto">
        <img className="md:w-1/2" src="/porsche-front.jpg" alt="Porsche Cayman" />
        <img className="md:w-1/2" src="/peugeot-side.jpg" alt="Peugeot 206 GTi" />
      </div>
      <div className="md:px-0 md:flex md:flex-row-reverse md:items-center lg:max-w-screen-xl lg:m-auto pt-16 md:pt-24">
        <img className="md:w-1/2" src="/porsche-side.jpg" alt="groepsfoto" />
        <div className="inline-block text-left px-8 py-5 md:px-5 lg:pr-16">
          <p className="text-sm sm:text-base lg:text-lg md:text-left max-w-screen-md m-auto font-bold pb-5">
            "Ik ben een ervaren piloot en wil de Porsche Cayman GT4 Clubsport huren"
          </p>
          <div className="text-sm sm:text-base lg:text-lg md:text-left max-w-screen-md m-auto">
            <p>Dan ontvang je dit pakket:</p>
            <ul className="list-disc list-inside pt-5">
              <li>Porsche Cayman GT4 Clubsport (incl. 1 volle bezinetank)</li>
              <li>3 Sets velgen (slicks en/of regenbanden)</li>
              <li>Verzekering</li>
              <li>Open pitlane sessie (volgens organisatie)</li>
              <li>Professionele ondersteuning door Porsche technieker</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:px-0 md:flex md:flex-row md:items-center lg:max-w-screen-xl lg:m-auto pt-16 md:pt-24">
        <img className="md:w-1/2" src="/peugeot-front.jpg" alt="groepsfoto" />
        <div className="inline-block text-left px-8 py-5 md:px-5 lg:pl-16">
          <p className="text-sm sm:text-base lg:text-lg md:text-left max-w-screen-md m-auto font-bold pb-5">
            "Ik ben een (on)ervaren piloot en wil de Peugeot 206 GTi huren"
          </p>
          <div className="text-sm sm:text-base lg:text-lg md:text-left max-w-screen-md m-auto">
            <p>Dan ontvang je dit pakket:</p>
            <ul className="list-disc pt-5 pl-4">
              <li>Peugeot 206 GTi </li>
              <li>inclusief 1 volle bezinetank</li>
              <li>semi slicks banden </li>
              <li>technische ondersteuning</li>
              <li>Open pitlane sessie (volgens organisatie)</li>
              <li>Instructeur*</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:px-0 md:flex md:flex-row-reverse md:items-center lg:max-w-screen-xl lg:m-auto pt-16 md:pt-24">
        <img className="md:w-1/2" src="/porsche-side.jpg" alt="groepsfoto" />
        <div className="inline-block text-left px-8 py-5 md:px-5 lg:pr-16">
          <p className="text-sm sm:text-base lg:text-lg md:text-left max-w-screen-md m-auto font-bold pb-5">
            "Ik ben een piloot zonder ervaring en wens een opleidingstraject van een dag te volgen"
          </p>
          <div className="text-sm sm:text-base lg:text-lg md:text-left max-w-screen-md m-auto">
            <p>Dan ontvang je dit pakket:</p>
            <ul className="list-disc list-inside pt-2">
              <li>Theorie training</li>
              <li>1 uur achter pace wagen</li>
              <li>2 uur vrij rijden met instructeur</li>
            </ul>
          </div>
          <div className="text-sm sm:text-base lg:text-lg md:text-left max-w-screen-md m-auto pt-7">
            <p>Wat zit er nog in het pakket inbegrepen:</p>
            <ul className="list-disc list-inside pt-2">
              <li>Peugeot 206 GTi</li>
              <li>Inclusief 1 volle benzinetank</li>
              <li>semi slicks banden</li>
              <li>technische ondersteuning</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
