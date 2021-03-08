import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { activeLocale, toggleLocale } from "../data/translations";

export const Footer = () => {
  const router = useRouter();
  const { locale } = router;
  const t = activeLocale(locale);

  return (
    <div className="text-white mt-16" style={{ backgroundColor: "#262A35" }}>
      <div className="max-w-screen-xl m-auto px-8 py-10 xl:px-0 flex flex-col items-center">
        <div className="w-full flex flex-col">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <div className="flex flex-col items-center justify-center">
              <img
                className="w-3/4 max-w-xs sm:w-60 cursor-pointer"
                src="/logo-wit.png"
                alt="logo"
              />
              <div className="flex mt-2 space-x-2">
                <div className="w-8 h-8 rounded-full cursor-pointer bg-motorblue"></div>
                <div className="w-8 h-8 rounded-full cursor-pointer bg-motorblue"></div>
                <div className="w-8 h-8 rounded-full cursor-pointer bg-motorblue"></div>
              </div>
            </div>
            <div className="w-full sm:w-auto sm:space-x-8 flex items-start justify-between lg:space-x-32 pt-8 sm:pt-0">
              <div>
                <p className="text-base md:text-lg font-bold text-center sm:text-left">
                  {t.footer.pages}
                </p>
                <div className="text-sm flex flex-col items-center sm:items-start pt-2">
                  <Link href="/">
                    <a className="text-sm py-3">Home</a>
                  </Link>
                  <Link href="/trackdays">
                    <a className="text-sm py-3">Trackdays</a>
                  </Link>
                  <Link href="/contact">
                    <a className="text-sm py-3">Contact</a>
                  </Link>
                  <Link href="/reservation">
                    <a className="text-sm py-3">Offerte</a>
                  </Link>
                </div>
              </div>
              <div>
                <p className="text-base md:text-lg font-bold text-center sm:text-left">
                  {t.footer.plans}
                </p>
                <div className="text-sm flex flex-col items-center sm:items-start pt-2">
                  <Link href="/plans/renting">
                    <a className="text-sm py-3">Renting</a>
                  </Link>
                  <p className="text-sm py-3">Business</p>
                  <p className="text-sm py-3">Share a ride</p>
                  <p className="text-sm py-3">VIP</p>
                  {/* <Link href="#">
                    <a className="text-sm">Business</a>
                  </Link>
                  <Link href="#">
                    <a className="text-sm">Share a ride</a>
                  </Link>
                  <Link href="#">
                    <a className="text-sm">VIP</a>
                  </Link> */}
                </div>
              </div>
              <div>
                <p className="text-base md:text-lg font-bold text-center sm:text-left">Languages</p>
                <div className="text-sm flex flex-col items-center sm:items-start pt-2">
                  <p
                    className={`cursor-pointer py-3 ${
                      locale === "nl" ? "text-motorblue" : "text-white"
                    }`}
                    onClick={() => toggleLocale("nl", router)}
                  >
                    Nederlands
                  </p>
                  <p
                    className={`cursor-pointer py-3 ${
                      locale === "en-US" ? "text-motorblue" : "text-white"
                    }`}
                    onClick={() => toggleLocale("en-US", router)}
                  >
                    English
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:justify-between items-center mt-8">
            <Link href="http://qwebdesign.be/">
              <a target="_blank" className="text-sm text-white">
                &copy; Created by Qweb Design {new Date().getFullYear()}
              </a>
            </Link>
            {/* <div className="flex divide-x-2 justify-self-center space-x-2">
              <p
                className={`text-sm cursor-pointer ${
                  locale === "nl" ? "text-motorblue" : "text-white"
                }`}
                onClick={() => toggleLocale("nl", router)}
              >
                NL
              </p>
              <p
                className={`text-sm pl-2 cursor-pointer ${
                  locale === "en-US" ? "text-motorblue" : "text-white"
                }`}
                onClick={() => toggleLocale("en-US", router)}
              >
                ENG
              </p>
              <p
                className={`text-sm pl-2 cursor-pointer ${
                  locale === "fr" ? "text-motorblue" : "text-white"
                }`}
                onClick={() => toggleLocale("fr", router)}
              >
                FR
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
