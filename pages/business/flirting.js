import React from "react";
import Image from "next/image";
import { FaFlagCheckered, FaRegHandshake } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlinePresentationChartBar } from "react-icons/hi";

const steps = [
  {
    title: "Meet & greet",
    description:
      "Graag komen we naar je toe om samen jullie behoeften en doelstellingen te bespreken",
    icon: <FaRegHandshake className="w-8 h-8 text-motorblue" />,
  },
  {
    title: "Business flirting plan",
    description:
      "Na een vrijblijvend intake gesprek, maken wij een 'Business Flirting Plan' dat we uitgebreid met jullie bespreken",
    icon: <HiOutlinePresentationChartBar className="w-8 h-8 text-motorblue" />,
  },
  {
    title: "JOUW prospect wordt ONZE prospect",
    description: "Wij gaan voor jullie aan de slag volgens onze overeenkomst",
    icon: <FiPhoneCall className="w-8 h-8 text-motorblue" />,
  },
  {
    title: "ONZE prospect wordt JOUW klant",
    description:
      "Wij organiseren een onvergetelijke dag en zorgen ervoor dat onze prospect de jouwe wordt",
    icon: <FaFlagCheckered className="w-8 h-8 text-motorblue" />,
  },
];

export default function flirting() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-5 pt-32 pb-10 md:flex md:items-center md:space-x-5 lg:justify-between xl:px-0">
        <div className="space-y-6 md:w-1/2">
          <div className="space-y-3">
            <h1 className="text-xl font-bold">
              <span className="text-motorblue">Business flirting</span>: Hoe maak ik van mijn
              prospect een nieuwe klant?
            </h1>
            <p>
              Onze samenleving evolueert. Het gedrag van consumenten verandert constant en wordt
              steeds veeleisender. Prospectie is de basis van de verkoopsstrategie en heeft nooit
              aan belang verloren, integendeel. Verder is er een nieuwe verhouding ontstaan tussen
              off- en online prospectie. Bedrijven moeten de behoeften van de doelgroep correct
              kunnen inschatten en aangepaste oplossingen kunnen aanbieden.
            </p>
          </div>
          <div className="space-y-3">
            <h1 className="text-xl font-bold">
              Hoe ga je van een lead naar klant in no time vanaf het eerste contact?
            </h1>
            <p>
              Door een toekomstige klant op een originele manier te benaderen en gebruik te maken
              van een unieke gepersonaliseerde oplossing!
            </p>
          </div>
        </div>
        <div className="pt-5 md:w-1/2 md:pt-0 lg:w-auto">
          <Image src="/wie-zijn-wij.jpg" layout="intrinsic" width="500" height="333" />
        </div>
      </div>
      <div className="w-full bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-5 xl:px-0 py-20">
          <h1 className="text-xl font-bold text-center sm:text-2xl">
            Als je op deze pagina beland, is je bedrijf opzoek naar:
          </h1>
          <div className="mt-8 space-y-3 sm:flex sm:flex-col sm:items-center">
            <div className="flex space-x-3">
              <svg
                className="w-6 h-6 flex-none text-motorblue"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm sm:text-base">
                Vernieuwde verkoopstrategiëen en prospectie voor huidige en/of nieuwe klanten
              </p>
            </div>
            <div className="flex space-x-3">
              <svg
                className="w-6 h-6 flex-none text-motorblue"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm sm:text-base">Snellere ROI bij toekomstige klanten</p>
            </div>
            <div className="flex space-x-3">
              <svg
                className="w-6 h-6 flex-none text-motorblue"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm sm:text-base">Unieke beleving voor jou en je prospect</p>
            </div>
            <div className="flex space-x-3">
              <svg
                className="w-6 h-6 flex-none text-motorblue"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm sm:text-base">
                Gepersonaliseerde concepten en oplossingen op maat
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-5 py-10 md:flex md:items-center md:space-x-5 lg:justify-between xl:px-0">
        <div className="space-y-6 md:w-1/2">
          <div className="space-y-3">
            <h1 className="text-xl font-bold">
              <span className="text-motorblue">BEM team</span>
            </h1>
            <p>
              Ontmoet een <span className="font-bold">divers team</span> dat altijd de grenzen
              opzoekt en die vertrouwd is met deze technieken/strategieën. We hebben{" "}
              <span className="font-bold">meer dan 30 jaar aan prospectie-ervaring</span> op de
              nationale en internationale B2B markten. Door het grote aanbod aan bedrijven die
              uitblinken in online marketing, maken wij daarentegen het verschil in de{" "}
              <span className="font-bold">OFFLINE, oldschool, persoonlijke prospectie.</span> Daarom
              zijn we ervan overtuigd dat we voor jouw bedrijf het verschil kunnen maken.
            </p>
          </div>
          <div className="space-y-3">
            <h1 className="text-xl font-bold">Als je met ons werkt, krijg je:</h1>
            <div className="space-y-3">
              <div className="flex space-x-3">
                <svg
                  className="w-6 h-6 flex-none text-motorblue"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm sm:text-base">Ongeëvenaarde klantenservice</p>
              </div>
              <div className="flex space-x-3">
                <svg
                  className="w-6 h-6 flex-none text-motorblue"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm sm:text-base">
                  Personalisatie, personalisatie en nog meer personalisatie
                </p>
              </div>
              <div className="flex space-x-3 items-center">
                <svg
                  className="w-6 h-6 flex-none text-motorblue"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm sm:text-base">Een uniek onvergetelijk concept</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5 md:w-1/2 md:pt-0 lg:w-auto">
          <Image src="/wie-zijn-wij.jpg" layout="intrinsic" width="500" height="333" />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-5 py-10 xl:px-0">
        <h1 className="text-xl font-bold">
          Hoe gaat dit <span className="text-motorblue">concreet </span> in zijn werk?
        </h1>
        <div className="grid grid-cols-1 gap-10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-3">
              {item.icon}
              <div className="text-center">
                <h1 className="font-bold">{item.title}</h1>{" "}
                <p className="text-gray-500">{item.description}</p>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-motorblue py-20">
        <div className="max-w-screen-xl mx-auto px-5 xl:px-0 text-center text-white text-sm space-y-5">
          <p>
            Plan een kennismakend gesprek in waar we samen met jou gaan kijken wat jouw bedrijf
            nodig heeft. Plan nu een vrijblijvend gesprek in van 30-minuten en we tonen je graag hoe
            je jouw business tot de next level brengt!
          </p>
          <p className="font-bold text-base">Vraag het ons nu. Een eerste gesprek is kosteloos!</p>
        </div>
      </div>
    </div>
  );
}
