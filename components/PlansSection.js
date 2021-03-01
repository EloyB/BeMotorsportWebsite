import { useRouter } from "next/router";
import React from "react";
import { activeLocale } from "../data/translations";
import SecondaryButton from "./buttons/SecondaryButton";

export default function PlansSection() {
  const router = useRouter();
  const { locale } = router;
  const t = activeLocale(locale);

  return (
    <div className="max-w-screen-xl m-auto pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
      <div
        className="group relative bg-cover bg-center cursor-pointer w-full h-72 bg-gray-200 flex items-center justify-center lg:h-96 lg:col-span-3"
        style={{
          backgroundImage: "url(/renting.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black transition-opacity opacity-30 duration-500 group-hover:bg-motorblue group-hover:opacity-80"></div>
        <div className="relative h-full w-full p-10 flex flex-col items-start justify-end">
          <h1 className="text-3xl font-medium text-white lg:text-5xl">
            {t.home.planSection.renting.title}
          </h1>
          <p className="pt-1 text-white w-full lg:w-1/2 text-sm lg:text-base xl:text-lg transition-height duration-300 h-0 overflow-hidden group-hover:h-16 xl:group-hover:h-16">
            {t.home.planSection.renting.hover}
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
        <div className="absolute inset-0 bg-black transition-opacity opacity-30 duration-500 group-hover:bg-motorblue group-hover:opacity-80"></div>
        <div className="relative h-full w-full p-10 flex flex-col items-start justify-end">
          <h1 className="text-3xl font-medium text-white lg:text-5xl">
            {t.home.planSection.shareARide.title}
          </h1>
          <p className="pt-1 text-white w-full text-sm lg:text-base xl:text-lg transition-height duration-300 h-0 overflow-hidden group-hover:h-20 md:group-hover:h-16">
            {t.home.planSection.shareARide.hover}
          </p>
          <SecondaryButton label="Coming soon" />
        </div>
      </div>
      <div
        className="group relative bg-cover bg-center cursor-pointer w-full h-72 bg-gray-200 flex items-center justify-center lg:h-96 lg:col-span-2"
        style={{
          backgroundImage: "url(/wie-zijn-wij.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black transition-opacity opacity-30 duration-500 group-hover:bg-motorblue group-hover:opacity-80"></div>
        <div className="relative h-full w-full p-10 flex flex-col items-start justify-end">
          <h1 className="text-3xl font-medium text-white lg:text-5xl">
            {t.home.planSection.VIP.title}
          </h1>
          <p className="pt-1 text-white w-full text-sm lg:text-base xl:text-lg transition-height duration-300 h-0 overflow-hidden group-hover:h-20 md:group-hover:h-16">
            {t.home.planSection.VIP.hover}
          </p>
          <SecondaryButton label="Coming soon" />
        </div>
      </div>
      <div
        className="group relative bg-cover bg-center cursor-pointer w-full h-72 bg-gray-200 flex items-center justify-center lg:h-96 lg:col-span-3"
        style={{
          backgroundImage: "url(/business.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black transition-opacity opacity-30 duration-500 group-hover:bg-motorblue group-hover:opacity-80"></div>
        <div className="relative h-full w-full p-10 flex flex-col items-start justify-end">
          <h1 className="text-3xl font-medium text-white lg:text-5xl">
          {t.home.planSection.business.title}
          </h1>
          <p className="pt-1 text-white w-full text-sm lg:text-base xl:text-lg transition-height duration-300 h-0 overflow-hidden group-hover:h-20 md:group-hover:h-16 lg:group-hover:h-11">
          {t.home.planSection.business.hover}
          </p>
          <SecondaryButton label="Coming soon" />
        </div>
      </div>
    </div>
  );
}
