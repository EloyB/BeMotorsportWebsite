import Image from "next/image";
import React from "react";
import { FaFlagCheckered, FaRegHandshake } from "react-icons/fa";
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { useRouter } from "next/router";
import { activeLocale } from "../../data/translations";
import parse from "html-react-parser";


export default function teambuilding() {
  const router = useRouter();
  const { locale } = router;
  const t = activeLocale(locale);

  const steps = [
    {
      title: t.businessPage.teambuildingPage.steps.title1,
      description:
        t.businessPage.teambuildingPage.steps.description1,
      icon: <FaRegHandshake className="w-8 h-8 text-motorblue" />,
    },
    {
      title: t.businessPage.teambuildingPage.steps.title2,
      description:
        t.businessPage.teambuildingPage.steps.description2,
      icon: <HiOutlinePresentationChartBar className="w-8 h-8 text-motorblue" />,
    },
    {
      title: t.businessPage.teambuildingPage.steps.title3,
      description:
        t.businessPage.teambuildingPage.steps.description3,
      icon: <FaFlagCheckered className="w-8 h-8 text-motorblue" />,
    },
  ];

  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-5 pt-32 pb-10 md:flex md:items-center md:space-x-5 lg:justify-between xl:px-0">
        <div className="space-y-6 md:w-1/2">
          <div className="space-y-3">
            <h1 className="text-xl font-bold">
              <span className="text-motorblue">{t.businessPage.teambuildingPage.title}</span>
            </h1>
            <p>
              {t.businessPage.teambuildingPage.introduction.paragraph1}
            </p>
            <p>
              {t.businessPage.teambuildingPage.introduction.paragraph2.senctence1}{" "}
              <span className="font-bold">{t.businessPage.teambuildingPage.introduction.paragraph2.senctence2}</span> 
              {t.businessPage.teambuildingPage.introduction.paragraph2.senctence3}{" "}
              <span className="font-bold">
                {t.businessPage.teambuildingPage.introduction.paragraph2.senctence4}
              </span>{" "}
              {t.businessPage.teambuildingPage.introduction.paragraph2.senctence5}
            </p>
            <p>
              {t.businessPage.teambuildingPage.introduction.paragraph3.senctence1}
              <br />
              <span className="font-bold">{t.businessPage.teambuildingPage.introduction.paragraph3.senctence2}</span>
            </p>
          </div>
        </div>
        <div className="pt-5 md:w-1/2 md:pt-0 lg:w-auto">
          <Image src="/wie-zijn-wij.jpg" layout="intrinsic" width="500" height="333" />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-5 py-20 md:flex md:items-center md:space-x-5 lg:justify-between xl:px-0">
        <div className="space-y-3">
          <h1 className="text-2xl md:text-4xl font-bold">{t.businessPage.teambuildingPage.introduction.title2}</h1>
          <p>
            {t.businessPage.teambuildingPage.introduction.paragraph4}
          </p>
        </div>
      </div>
      <div className="w-full bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-5 xl:px-0 py-20">
          <h1 className="text-xl font-bold text-center sm:text-2xl">
            {t.businessPage.teambuildingPage.theme.title}
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
              <p className="text-sm sm:text-base">{t.businessPage.teambuildingPage.theme.point1}</p>
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
              <p className="text-sm sm:text-base">{t.businessPage.teambuildingPage.theme.point2}</p>
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
              <p className="text-sm sm:text-base">{t.businessPage.teambuildingPage.theme.point3}</p>
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
              <p className="text-sm sm:text-base">{t.businessPage.teambuildingPage.theme.point4}</p>
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
              <p className="text-sm sm:text-base">{t.businessPage.teambuildingPage.theme.point5}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-5 py-20 xl:px-0">
        <h1 className="text-xl font-bold">
        {parse(t.businessPage.flirtingPage.block4.title)}
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
           {t.businessPage.teambuildingPage.block4.paragraph1.senctence1}{" "}
            {parse(t.businessPage.teambuildingPage.block4.paragraph1.senctence2)}
          </p>
          <p>
            <span className="font-bold">
              {t.businessPage.teambuildingPage.block4.paragraph2.senctence1}{" "}
            </span>{" "}
            {t.businessPage.teambuildingPage.block4.paragraph2.senctence2}
          </p>
          <p className="font-bold text-base">{t.businessPage.teambuildingPage.block4.paragraph3}</p>
        </div>
      </div>
    </div>
  );
}
