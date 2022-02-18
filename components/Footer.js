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
                <div className="w-9 h-9 rounded-full cursor-pointer bg-motorblue flex items-center justify-center">
                  <a target="_blank" href="https://www.instagram.com/be.motorsport/">
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="text-white w-5 h-5"
                    >
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                  </a>
                </div>
                <div className="w-9 h-9 rounded-full cursor-pointer bg-motorblue flex items-center justify-center">
                  <a target="_blank" href="https://www.facebook.com/bemotorsportbelgium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-white w-5 h-5"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
                <div className="w-9 h-9 rounded-full cursor-pointer bg-motorblue flex items-center justify-center">
                  <a target="_blank" href="https://www.linkedin.com/company/bemotorsport/about/">
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="text-white w-5 h-5"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
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
                  <Link href="/business">
                    <a className="text-sm py-3">Business</a>
                  </Link>
                  <Link href="/plans/share">
                    <a className="text-sm py-3">Share a ride</a>
                  </Link>
                  <Link href="/plans/vip">
                    <a className="text-sm py-3">VIP</a>
                  </Link>
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
                  <p
                    className={`cursor-pointer py-3 ${
                      locale === "fr" ? "text-motorblue" : "text-white"
                    }`}
                    onClick={() => toggleLocale("fr", router)}
                  >
                    Français
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
