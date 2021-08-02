import React, { useEffect, useState } from "react";
import cookieCutter from "cookie-cutter";
import { activeLocale } from "../../data/translations";

export default function CookieConsent() {
  const [consent, setConsent] = useState(false);
  const t = activeLocale(locale);
  useEffect(() => {
    setConsent(cookieCutter.get("CONSENT"));
  }, []);
  return (
    <div
      className={`${consent ? "hidden" : "flex"} fixed bottom-0 w-full bg-motorblue items-center`}
    >
      <div className="max-w-screen-xl m-auto w-full p-4 flex flex-col items-center sm:flex-row sm:justify-between xl:px-0">
        <p className="text-white text-xs text-center font-medium sm:text-left md:w-3/4">
          {t.cookie.description}
        </p>
        <div className="flex space-x-4 sm:items-center">
          <div
            className="p-4 bg-white mt-5 cursor-pointer sm:mt-0"
            onClick={() => {
              cookieCutter.set("CONSENT", true);
              setConsent(true);
            }}
          >
            <p className="text-xs text-center">Ok!</p>
          </div>
          <div className="p-4 bg-white mt-5 cursor-pointer sm:mt-0">
            <p className="text-xs text-center">{t.cookie.moreInfo}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
