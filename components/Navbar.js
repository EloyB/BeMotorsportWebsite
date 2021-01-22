import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [hitScrollPoint, setHitScrollPoint] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setHitScrollPoint(true);
      } else {
        setHitScrollPoint(false);
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
          <div className="w-40 h-10 bg-gray-500"></div>
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
            !hitScrollPoint ? "hidden" : openMenu ? "block" : "hidden"
          } flex flex-col bg-white pt-4 space-y-3 text-right ${
            hitScrollPoint ? "md:block" : "md:hidden"
          } md:flex-row md:space-x-3 md:pt-0`}
        >
          <Link href="/">
            <a>Trackdays</a>
          </Link>
          <Link href="/">
            <a>Boeken</a>
          </Link>
          <Link href="/">
            <a>Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
