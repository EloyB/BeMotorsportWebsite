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
        <img className="md:w-1/2" src="/porsche-front.jpg" alt="Porsche Cayman GT4 Clubsport" />
        <img className="md:w-1/2" src="/peugeot-side.jpg" alt="Peugeot 206 GTi" />
      </div>
      <div className="md:px-0 md:flex md:flex-row-reverse md:items-center lg:max-w-screen-xl lg:m-auto py-8 md:py-12">
        <img className="md:w-1/2" src="/porsche-side.jpg" alt="Porsche Cayman GT4 Clubsport" />
        <div className="inline-block text-left px-8 py-5 md:px-5 lg:pr-16">
          <p className="text-sm sm:text-base lg:text-lg md:text-left max-w-screen-md m-auto font-bold pb-5">
            {t.rentingPage.section1.title}
          </p>
          <div className="text-sm sm:text-base lg:text-lg md:text-left max-w-screen-md m-auto">
            <p>{t.rentingPage.receive}</p>
            <ul className="list-disc list-inside pt-5">
              <li> {t.rentingPage.section1.bullet1}</li>
              <li>{t.rentingPage.section1.bullet2}</li>
              <li>{t.rentingPage.section1.bullet3}</li>
              <li>{t.rentingPage.section1.bullet4}</li>
              <li>{t.rentingPage.section1.bullet5}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 w-full">
        <div className="md:px-0 md:flex md:flex-row md:items-center lg:max-w-screen-xl lg:m-auto py-8 md:py-12">
          <img className="md:w-1/2" src="/peugeot-front.jpg" alt="Peugeot 206 GTi" />
          <div className="inline-block text-left px-8 py-5 md:px-5 lg:pl-16">
            <p className="text-sm sm:text-base lg:text-lg md:text-left max-w-screen-md m-auto font-bold pb-5">
              {t.rentingPage.section2.title}
            </p>
            <div className="text-sm sm:text-base lg:text-lg md:text-left max-w-screen-md m-auto">
              <p>{t.rentingPage.receive}</p>
              <ul className="list-disc pt-5 pl-4">
                <li>{t.rentingPage.section2.bullet1}</li>
                <li>{t.rentingPage.section2.bullet2}</li>
                <li>{t.rentingPage.section2.bullet3}</li>
                <li>{t.rentingPage.section2.bullet4}</li>
                <li>{t.rentingPage.section2.bullet5}</li>
                <li>{t.rentingPage.section2.bullet6}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-0 md:flex md:flex-row-reverse md:items-center lg:max-w-screen-xl lg:m-auto py-8 md:py-12">
        <img className="md:w-1/2" src="/renting-section-3.jpeg" alt="Peugeot 206 GTi" />
        <div className="inline-block text-left px-8 py-5 md:px-5 lg:pr-16">
          <p className="text-sm sm:text-base lg:text-lg md:text-left max-w-screen-md m-auto font-bold pb-5">
            {t.rentingPage.section3.title}
          </p>
          <div className="text-sm sm:text-base lg:text-lg md:text-left max-w-screen-md m-auto">
            <p>{t.rentingPage.receive}</p>
            <ul className="list-disc list-inside pt-2">
              <li>{t.rentingPage.section3.bullet1}</li>
              <li>{t.rentingPage.section3.bullet2}</li>
              <li>{t.rentingPage.section3.bullet3}</li>
            </ul>
          </div>
          <div className="text-sm sm:text-base lg:text-lg md:text-left max-w-screen-md m-auto pt-7">
            <p>{t.rentingPage.extra}</p>
            <ul className="list-disc list-inside pt-2">
              <li>{t.rentingPage.section2.bullet1}</li>
              <li>{t.rentingPage.section2.bullet2}</li>
              <li>{t.rentingPage.section2.bullet3}</li>
              <li>{t.rentingPage.section2.bullet4}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 w-full">
        <div className="md:px-0 md:flex md:flex-row md:items-center lg:max-w-screen-xl lg:m-auto py-8 md:py-12">
          <img className="md:h-60" src="/dieter.jpeg" alt="Dieter Coppens" />
          <div className="inline-block text-left px-8 py-5 md:px-5 lg:pl-16">
            <p className="text-7xl text-gray-200">“</p>
            <p className="text-sm sm:text-base lg:text-lg md:text-left max-w-screen-md m-auto pb-5">
              {t.rentingPage.testimonial}”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
