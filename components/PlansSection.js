import React from "react";
import SecondaryButton from "./buttons/SecondaryButton";

export default function PlansSection() {
  return (
    <div className="pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
      <div
        className="group relative bg-cover bg-center cursor-pointer w-full h-72 bg-gray-200 flex items-center justify-center lg:h-96 lg:col-span-3"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cG9yc2NoZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
        }}
      >
        <div className="absolute inset-0 bg-motorblue transition-opacity opacity-0 duration-500 group-hover:opacity-80"></div>
        <div className="relative h-full w-full p-10 flex flex-col items-start justify-end">
          <h1 className="text-3xl font-medium text-white lg:text-5xl">Renting</h1>
          <p className="pt-1 text-white w-full lg:w-1/2 text-sm lg:text-base xl:text-lg transition-height duration-300 h-0 overflow-hidden group-hover:h-16 xl:group-hover:h-16">
            Huur onze Porsche Cayman GT4 Clubsport & de Peugeot 206 GTi
          </p>
          <SecondaryButton label="Learn More" />
        </div>
      </div>
      <div
        className="group relative bg-cover bg-center cursor-pointer w-full h-72 bg-gray-200 flex items-center justify-center lg:h-96 lg:col-span-2"
        style={{
          backgroundImage: "url(/share.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-motorblue transition-opacity opacity-0 duration-500 group-hover:opacity-80"></div>
        <div className="relative h-full w-full p-10 flex flex-col items-start justify-end">
          <h1 className="text-3xl font-medium text-white lg:text-5xl">Share a ride</h1>
          <p className="pt-1 text-white w-full text-sm lg:text-base xl:text-lg transition-height duration-300 h-0 overflow-hidden group-hover:h-20 md:group-hover:h-16">
            Ontdek onze 'Share your ride (&) Network' formule voor een aantrekkelijk budget.
          </p>
          <SecondaryButton label="Learn More" />
        </div>
      </div>
      <div
        className="group relative bg-cover bg-center cursor-pointer w-full h-72 bg-gray-200 flex items-center justify-center lg:h-96 lg:col-span-2"
        style={{
          backgroundImage: "url(/wie-zijn-wij.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-motorblue transition-opacity opacity-0 duration-500 group-hover:opacity-80"></div>
        <div className="relative h-full w-full p-10 flex flex-col items-start justify-end">
          <h1 className="text-3xl font-medium text-white lg:text-5xl">VIP</h1>
          <p className="pt-1 text-white w-full text-sm lg:text-base xl:text-lg transition-height duration-300 h-0 overflow-hidden group-hover:h-20 md:group-hover:h-16">
            BE motorsport legt je in de watten van A tot Z met een VIP Experience
          </p>
          <SecondaryButton label="Learn More" />
        </div>
      </div>
      <div
        className="group relative bg-cover bg-center cursor-pointer w-full h-72 bg-gray-200 flex items-center justify-center lg:h-96 lg:col-span-3"
        style={{
          backgroundImage: "url(/business.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-motorblue transition-opacity opacity-0 duration-500 group-hover:opacity-80"></div>
        <div className="relative h-full w-full p-10 flex flex-col items-start justify-end">
          <h1 className="text-3xl font-medium text-white lg:text-5xl">Business</h1>
          <p className="pt-1 text-white w-full text-sm lg:text-base xl:text-lg transition-height duration-300 h-0 overflow-hidden group-hover:h-20 md:group-hover:h-16 lg:group-hover:h-11">
            Boost jouw bedrijf naar the next level samen met BE motorsport
          </p>
          <SecondaryButton label="Learn More" />
        </div>
      </div>
    </div>
  );
}
