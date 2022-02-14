import React from "react";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import { useRouter } from "next/router";
import { activeLocale } from "../../data/translations";
import parse from "html-react-parser";

export default function flirting() {
  const router = useRouter();
  const { locale } = router;
  const t = activeLocale(locale);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-5 pt-32 pb-14 md:flex md:items-center md:space-x-5 lg:justify-between xl:px-0">
        <div className="space-y-6 md:w-1/2">
          <div className="space-y-3">
            <h1 className="text-xl font-bold">
              {parse(t.businessPage.flirtingPage.block1.title1)}
            </h1>
            <p>{t.businessPage.flirtingPage.block1.paragraph1}</p>
          </div>
          <div className="space-y-3">
            <h1 className="text-xl font-bold">
              {parse(t.businessPage.flirtingPage.block1.title2)}
            </h1>
            <p>{t.businessPage.flirtingPage.block1.paragraph2}</p>
          </div>
        </div>
        <div className="pt-5 md:w-1/2 md:pt-0 lg:w-auto">
          <Image src="/wie-zijn-wij.jpg" layout="intrinsic" width="500" height="333" />
        </div>
      </div>
      <div className="w-full bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-5 xl:px-0 py-20">
          <h1 className="text-xl font-bold text-center sm:text-2xl">
            {t.businessPage.flirtingPage.block2.title}
          </h1>
          <div className="mt-8 space-y-3 sm:flex sm:flex-col sm:items-center">
            {t.businessPage.flirtingPage.block2.pointers.map((item, index) => (
              <div key={index} className="flex space-x-3">
                <FiCheck className="w-6 h-6 flex-none text-motorblue" />
                <p className="text-sm sm:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-5 py-16 md:flex md:items-center md:space-x-5 lg:justify-between xl:px-0">
        <div className="space-y-6 md:w-1/2">
          <div className="space-y-3">
            <h1 className="text-xl font-bold">
              <span className="text-motorblue">{t.businessPage.flirtingPage.block3.title}</span>
            </h1>
            <p>{parse(t.businessPage.flirtingPage.block3.paragraph)}</p>
          </div>
          <div className="space-y-3">
            <h1 className="text-xl font-bold">{t.businessPage.flirtingPage.block3.offer.title}</h1>
            <div className="space-y-3">
              {t.businessPage.flirtingPage.block3.offer.pointers.map((item, index) => (
                <div key={index} className="flex space-x-3">
                  <FiCheck className="w-6 h-6 flex-none text-motorblue" />
                  <p className="text-sm sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-5 md:w-1/2 md:pt-0 lg:w-auto">
          <Image src="/wie-zijn-wij.jpg" layout="intrinsic" width="500" height="333" />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-5 py-16 xl:px-0">
        <h1 className="text-xl font-bold">{parse(t.businessPage.flirtingPage.block4.title)}</h1>
        <div className="grid grid-cols-1 gap-10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {t.businessPage.flirtingPage.block4.steps.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-3">
              {item.icon}
              <div className="text-center">
                <h1 className="font-bold">{item.title}</h1>
                <p className="text-gray-500">{item.description}</p>
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
