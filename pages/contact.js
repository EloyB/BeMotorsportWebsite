import Link from "next/link";
import React from "react";

export default function contact() {
  return (
    <div>
      <div className="pt-40 pb-20">
        <div className="px-8 md:px-0 md:flex md:flex-row-reverse md:items-center lg:max-w-screen-xl lg:m-auto">
          <img className="md:w-1/2" src="/wie-zijn-wij.jpg" alt="groepsfoto" />
          <div className="md:text-right inline-block md:px-5 lg:pr-16">
            <h1 className="py-4 text-4xl font-medium sm:text-5xl md:text-3xl md:pt-0 md:pb-4 lg:text-5xl">
              Ons Team
            </h1>
            <p className="text-xl font-light md:text-lg lg:text-xl">
              BE motorsport is een familiebedrijf met een grote interesse voor de motorsport. Racing
              is de metafoor die ons heeft doen nadenken over dit nieuwe project. Het zakendoen zit
              bij de familie Beyens in hart en nieren, en van daaruit is de passie ontstaan om beide
              te gaan combineren
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-10">
        <div className="px-8 xl:px-0 md:flex md:items-center lg:max-w-screen-xl lg:m-auto py-10">
          <img className="md:w-1/3" src="/wie-zijn-wij.jpg" alt="groepsfoto" />
          <div className="md:text-left inline-block md:px-5 lg:pl-16">
            <div className="pt-3 pb-1 md:pt-0">
              <p className="text-motorblue font-medium">Sales Manager</p>
              <h1 className="text-4xl font-medium sm:text-5xl md:text-3xl lg:text-4xl">
                Didier Beyens
              </h1>
            </div>
            <p className="text-base font-light lg:text-xl">
              Heb je vragen over onze pakketten? Aarzel zeker niet om contact met mij op te nemen.
              Ik help je graag verder!
            </p>
          </div>
        </div>
        <div className="px-8 xl:px-0 md:flex md:flex-row-reverse md:items-center lg:max-w-screen-xl lg:m-auto py-10">
          <img className="md:w-1/3" src="/wie-zijn-wij.jpg" alt="groepsfoto" />
          <div className="md:text-right inline-block md:px-5 lg:pr-16">
            <div className="pt-3 pb-1 md:pt-0">
              <p className="text-motorblue font-medium">CEO</p>
              <h1 className="text-4xl font-medium sm:text-5xl md:text-3xl lg:text-4xl">
                Stephan Beyens
              </h1>
            </div>
            <p className="text-base font-light lg:text-xl">
              Heb je technische vragen of wil je graag brainstormen over hoe we jullie bedrijf
              kunnen verder helpen? Aarzel dan zeker niet om contact met mij op te nemen!
              Persoonlijk contact blijft belangrijk in zaken doen, so, let's meet!
            </p>
          </div>
        </div>
        <div className="px-8 xl:px-0 md:flex md:items-center lg:max-w-screen-xl lg:m-auto py-10">
          <img className="md:w-1/3" src="/wie-zijn-wij.jpg" alt="groepsfoto" />
          <div className="md:text-left inline-block md:px-5 lg:pl-16">
            <div className="pt-3 pb-1 md:pt-0">
              <p className="text-motorblue font-medium">Creative Mind</p>
              <h1 className="text-4xl font-medium sm:text-5xl md:text-3xl lg:text-4xl">
                Julie Beyens
              </h1>
            </div>
            <p className="text-base font-light lg:text-xl">
              Wil je graag een creatief event organiseren voor je team? Of wil je graag een
              teambuilding organiseren met leuke workshops? Weet je niet goed waar te starten?
              Twijfel dan zeker niet en bel me op! Ik help je graag verder!
            </p>
          </div>
        </div>
      </div>
      <div className="py-10 bg-gray-800">
        <div className="max-w-screen-xl m-auto px-8 flex flex-col sm:flex-row xl:px-0">
          <div className="pb-8 flex flex-col items-center sm:w-full sm:items-start sm:justify-end sm:pb-0">
            <h1 className="text-white text-center sm:text-left text-4xl font-medium lg:text-4xl">
              Contact us
            </h1>
          </div>
          <div className="bg-white rounded-md shadow-md p-6 space-y-3 sm:w-full">
            <div className="bg-gray-50 w-full h-10 rounded"></div>
            <div className="bg-gray-50 w-full h-10 rounded"></div>
            <div className="bg-gray-50 w-full h-40 rounded"></div>
            <div className="bg-motorblue w-full h-10 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}