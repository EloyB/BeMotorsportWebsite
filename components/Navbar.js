import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { activeLocale, toggleLocale } from "../data/translations";

export default function Navbar() {
  const router = useRouter();
  const { locale } = router;
  const t = activeLocale(locale);
  const [openMenu, setOpenMenu] = useState(false);
  const [hitScrollPoint, setHitScrollPoint] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setHitScrollPoint(true);
      } else {
        setHitScrollPoint(true);
        setOpenMenu(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed z-50 w-full shadow-md bg-white py-4 px-5 `}>
      <div
        className={`max-w-screen-xl m-auto md:flex md:items-center ${
          hitScrollPoint ? "md:justify-between" : "md:justify-center"
        }`}
      >
        <div
          className={`flex items-center ${hitScrollPoint ? "justify-between" : "justify-center"}`}
        >
          <div
            className="w-40 xs:w-60 h-10 flex items-center justify-center"
            onClick={() => router.push("/")}
          >
            <img src="/logo.svg" alt="logo zonder donut" />
          </div>
          <div
            className={`cursor-pointer ${hitScrollPoint ? "block" : "hidden"} md:hidden`}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <svg
              className="w-6 h-6 text-motorblue"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        <div
          className={`${
            !hitScrollPoint ? "hidden" : openMenu ? "flex" : "hidden"
          } flex flex-col bg-white pt-4 space-y-3 text-right ${
            hitScrollPoint ? "md:flex" : "md:hidden"
          } md:flex-row md:items-center md:space-y-0 md:space-x-8 md:pt-0`}
        >
          <div>
            <Link href="/trackdays">
              <a className="text-lg hover:text-motorblue">Trackdays</a>
            </Link>
          </div>
          <div>
            <Link href="/reservation">
              <a className="text-lg hover:text-motorblue">{t.navbar.planYourDay}</a>
            </Link>
          </div>
          <div>
            <Link href="/contact">
              <a className="text-lg hover:text-motorblue">{t.navbar.aboutUs}</a>
            </Link>
          </div>
          <div className="flex divide-x-2 items-center justify-end self-end space-x-2 bg-gray-50 px-4 py-2">
            <p
              className={`text-lg cursor-pointer ${
                locale === "nl" ? "text-motorblue" : "text-gray-500"
              }`}
              onClick={() => toggleLocale("nl", router)}
            >
              NL
            </p>
            <p
              className={`text-lg pl-2 cursor-pointer ${
                locale === "en-US" ? "text-motorblue" : "text-gray-500"
              }`}
              onClick={() => toggleLocale("en-US", router)}
            >
              ENG
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
