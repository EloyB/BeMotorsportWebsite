import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { useRouter } from "next/router";
import { activeLocale } from "../../data/translations";

export default function index() {
  const router = useRouter();
  const { locale } = router;
  const t = activeLocale(locale);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-8 h-screen">
        <div className="pt-32">
          <h1 className="text-xl font-bold text-center md:text-3xl">
            {t.businessPage.selectionPage.flirtingCard.title}
          </h1>
        </div>
        <div className="py-10 flex flex-col space-y-5 sm:flex-row sm:space-x-5 sm:space-y-0 sm:items-center sm:justify-center">
          <div className="shadow-md p-4 md:p-6 space-y-5 flex flex-col justify-between">
            <h2 className="font-semibold text-lg md:text-2xl">{t.businessPage.selectionPage.flirtingCard.title}</h2>
            <div>
              <div className="flex space-x-3 text-sm md:text-lg items-center">
                <BsArrowRightShort className="text-motorblue w-8 h-8 flex-none" />
                <p>{t.businessPage.selectionPage.flirtingCard.pointers[0]}</p>
              </div>
              <div className="flex space-x-3 text-sm md:text-lg items-center">
                <BsArrowRightShort className="text-motorblue w-8 h-8 flex-none" />
                <p>{t.businessPage.selectionPage.flirtingCard.pointers[1]}</p>
              </div>
              <div className="flex space-x-3 text-sm md:text-lg items-center">
                <BsArrowRightShort className="text-motorblue w-8 h-8 flex-none" />
                <p>{t.businessPage.selectionPage.flirtingCard.pointers[2]}</p>
              </div>
            </div>
            <button
              onClick={() => router.push("/business/flirting")}
              className="w-full px-6 py-2 bg-motorblue text-white focus:outline-none sm:px-16 ring-2 ring-motorblue"
            >
              {t.common.clickHere}
            </button>
          </div>
          <div>
            <p className="text-center font-semibold text-xl">{t.common.or}</p>
          </div>
          <div className="shadow-md p-4 md:p-6 space-y-5 flex flex-col justify-between">
            <h2 className="font-semibold text-lg md:text-2xl">{t.businessPage.selectionPage.teamBuildingCard.title}</h2>
            <div>
              <div className="flex space-x-3 text-sm md:text-lg items-center">
                <BsArrowRightShort className="text-motorblue w-8 h-8 flex-none" />
                <p>{t.businessPage.selectionPage.teamBuildingCard.pointers[0]}</p>
              </div>
              <div className="flex space-x-3 text-sm md:text-lg items-center">
                <BsArrowRightShort className="text-motorblue w-8 h-8 flex-none" />
                <p>{t.businessPage.selectionPage.teamBuildingCard.pointers[1]}</p>
              </div>
              <div className="flex space-x-3 text-sm md:text-lg items-center">
                <BsArrowRightShort className="text-motorblue w-8 h-8 flex-none" />
                <p>{t.businessPage.selectionPage.teamBuildingCard.pointers[1]}</p>
              </div>
            </div>
            <button
              onClick={() => router.push("/business/teambuilding")}
              className="w-full px-6 py-2 bg-motorblue text-white focus:outline-none sm:px-16 ring-2 ring-motorblue"
            >
              {t.common.clickHere}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
