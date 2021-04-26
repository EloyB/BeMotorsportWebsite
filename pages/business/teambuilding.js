import Image from "next/image";
import React from "react";
import { FaFlagCheckered, FaRegHandshake } from "react-icons/fa";
import { HiOutlinePresentationChartBar } from "react-icons/hi";

const steps = [
  {
    title: "Meet & greet",
    description:
      "Graag komen we naar je toe om samen jullie behoeften en doelstellingen te bespreken. Na een vrijblijvend intake gesprek, maken wij een business experience op maat. Een uniek concept volledig gepersonaliseerd",
    icon: <FaRegHandshake className="w-8 h-8 text-motorblue" />,
  },
  {
    title: "Business Experience op maat",
    description:
      "Alles wordt tot in de puntjes voorzien om je experience optimaal te beleven en te laten renderen. Je wordt meteen ondergedompeld in een inspirerende sessie met top notch coaches in een motiverende omgeving",
    icon: <HiOutlinePresentationChartBar className="w-8 h-8 text-motorblue" />,
  },
  {
    title: "Teambuilding",
    description:
      "Dit exclusieve concept gaat door op een circuit naar keuze waar we uiteraard voor de nodige adrenaline zorgen",
    icon: <FaFlagCheckered className="w-8 h-8 text-motorblue" />,
  },
];

export default function teambuilding() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-5 pt-32 pb-10 md:flex md:items-center md:space-x-5 lg:justify-between xl:px-0">
        <div className="space-y-6 md:w-1/2">
          <div className="space-y-3">
            <h1 className="text-xl font-bold">
              <span className="text-motorblue">Business coaching & Teambuildings</span>
            </h1>
            <p>
              Wil jij je team terug verbinden en tijden vol met digitale meetings? Wil je jouw
              mensen alsook je bedrijf een positieve boost geven en perspectief bieden?
            </p>
            <p>
              Creëer dan samen met ons een beleving in een veilige omgeving waar{" "}
              <span className="font-bold">'connectiviteit', 'innovatie' en 'fun'</span> centraal
              staan! Geef je team de tools om nieuwe manieren van samenwerken, processen, diensten,
              producten uit te werken in een motiverende omgeving. Een{" "}
              <span className="font-bold">
                veranderlijke omgeving is vaak de motor van innovatie,
              </span>{" "}
              deze laatste durven we zowel letterlijk als figuurlijk te nemen.
            </p>
            <p>
              Ontketen daarom samen met BE motorsport het potentieel van jouw bedrijf.
              <span className="font-bold">Wij faciliteren, jullie activeren!</span>
            </p>
          </div>
        </div>
        <div className="pt-5 md:w-1/2 md:pt-0 lg:w-auto">
          <Image src="/wie-zijn-wij.jpg" layout="intrinsic" width="500" height="333" />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-5 py-20 md:flex md:items-center md:space-x-5 lg:justify-between xl:px-0">
        <div className="space-y-3">
          <h1 className="text-2xl md:text-4xl font-bold">Voor wie is deze beleving?</h1>
          <p>
            De "BEM" Business Experience richt zich vooral tot zelfstandige ondernemers,
            bestuurders, bedrijfsleiders en managers die samen met hun medewerkers doelmatig en
            vanuit een praktische aanpak willen groeien.
          </p>
        </div>
      </div>
      <div className="w-full bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-5 xl:px-0 py-20">
          <h1 className="text-xl font-bold text-center sm:text-2xl">
            BE motorsport heeft een sterk netwerk van coaches om volgende thema's te behandelen:
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
              <p className="text-sm sm:text-base">Timemanagement en omgaan met stress</p>
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
              <p className="text-sm sm:text-base">Work-life balance</p>
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
              <p className="text-sm sm:text-base">Communicatie</p>
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
              <p className="text-sm sm:text-base">Productiviteit en vitaliteit</p>
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
              <p className="text-sm sm:text-base">Management en teamwork</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-5 py-20 xl:px-0">
        <h1 className="text-xl font-bold">
          Hoe gaat dit <span className="text-motorblue">concreet </span> in zijn werk?
        </h1>
        <div className="grid grid-cols-1 gap-10 pt-10 md:grid-cols-3">
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
        <div className="max-w-screen-xl mx-auto px-5 xl:px-0 text-center text-white text-sm md:text-lg space-y-5">
          <p>
            Heeft jouw bedrijf gewoon nood aan een leuke{" "}
            <span className="font-bold">teambuilding zonder extra coaching?</span> Dat kan ook, wij
            voorzien een dag vol met fun!
          </p>
          <p>
            <span className="font-bold">
              Ben jij zelf een life - business coach of organisatie{" "}
            </span>{" "}
            die op zoek is naar een inspirerende omgeving? Neem dan zeker contact met ons op!
          </p>
          <p className="font-bold text-base">Vraag het ons nu. Een eerste gesprek is kosteloos!</p>
        </div>
      </div>
    </div>
  );
}
