import React, { useEffect, useState } from "react";
import cookieCutter from "cookie-cutter";

export default function CookieConsent() {
  const [consent, setConsent] = useState(false);
  useEffect(() => {
    setConsent(cookieCutter.get("CONSENT"));
  }, []);
  return (
    <div
      className={`${consent ? "hidden" : "flex"} fixed bottom-0 w-full bg-motorblue items-center`}
    >
      <div className="max-w-screen-xl m-auto w-full p-4 flex flex-col items-center sm:flex-row sm:justify-between xl:px-0">
        <p className="text-white text-xs text-center font-medium sm:text-left md:w-3/4">
          Deze website maakt gebruik van cookies om je een betere service te kunnen verzekeren. Door
          verder te gaan op deze site, ga je akkoord met dit gebruik.
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
            <p className="text-xs text-center">Meer info</p>
          </div>
        </div>
      </div>
    </div>
  );
}
