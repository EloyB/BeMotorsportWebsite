import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();

  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-8 h-screen">
        <div className="pt-32">
          <h1 className="text-xl font-bold text-center md:text-3xl">
            Waar is jouw bedrijf naar opzoek?
          </h1>
        </div>
        <div className="py-10 flex flex-col space-y-5 sm:flex-row sm:space-x-5 sm:space-y-0 sm:items-center sm:justify-center">
          <div className="shadow-md p-4 md:p-6 space-y-5 flex flex-col justify-between">
            <h2 className="font-semibold text-lg md:text-2xl">Is jouw bedrijf op zoek naar:</h2>
            <div>
              <div className="flex space-x-3 text-sm md:text-lg items-center">
                <BsArrowRightShort className="text-motorblue w-8 h-8 flex-none" />
                <p>Vernieuwde verkoopstrategiëen?</p>
              </div>
              <div className="flex space-x-3 text-sm md:text-lg items-center">
                <BsArrowRightShort className="text-motorblue w-8 h-8 flex-none" />
                <p>Snellere ROI?</p>
              </div>
              <div className="flex space-x-3 text-sm md:text-lg items-center">
                <BsArrowRightShort className="text-motorblue w-8 h-8 flex-none" />
                <p>Unieke beleving voor jou en je prospect?</p>
              </div>
            </div>
            <button
              onClick={() => router.push("/business/flirting")}
              className="w-full px-6 py-2 bg-motorblue text-white focus:outline-none sm:px-16 ring-2 ring-motorblue"
            >
              Klik dan hier
            </button>
          </div>
          <div>
            <p className="text-center font-semibold text-xl">OF</p>
          </div>
          <div className="shadow-md p-4 md:p-6 space-y-5 flex flex-col justify-between">
            <h2 className="font-semibold text-lg md:text-2xl">Is jouw bedrijf op zoek naar:</h2>
            <div>
              <div className="flex space-x-3 text-sm md:text-lg items-center">
                <BsArrowRightShort className="text-motorblue w-8 h-8 flex-none" />
                <p>Een uitdagende teambuidling op maat?</p>
              </div>
              <div className="flex space-x-3 text-sm md:text-lg items-center">
                <BsArrowRightShort className="text-motorblue w-8 h-8 flex-none" />
                <p>Business coaching gecombineerd met fun?</p>
              </div>
              <div className="flex space-x-3 text-sm md:text-lg items-center">
                <BsArrowRightShort className="text-motorblue w-8 h-8 flex-none" />
                <p>Een leuke incentive?</p>
              </div>
            </div>
            <button
              onClick={() => router.push("/business/teambuilding")}
              className="w-full px-6 py-2 bg-motorblue text-white focus:outline-none sm:px-16 ring-2 ring-motorblue"
            >
              Klik dan hier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
