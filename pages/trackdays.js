import React, { useEffect, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import TrackdayItem from "../components/TrackdayItem";

export default function trackdays() {
  const [viewport, setViewPort] = useState({
    longitude: 5.97521,
    latitude: 50.43258,
    width: "100%",
    height: "100%",
    zoom: 4,
  });

  const mbToken =
    "pk.eyJ1IjoicXdlYmRlc2lnbiIsImEiOiJja2tmbzV3ZWUwY2gzMndtcHJjYzd1NmZ2In0.39BM3JaR3bYywwvVHDzKCA";

  return (
    <div>
      <div>
        <div className="pt-32 pb-20 px-8 max-w-screen-xl m-auto lg:px-0">
          <h1 className="text-3xl font-medium text-center py-5 lg:text-5xl">Onze Trackdays</h1>
          <p className="text-center max-w-screen-md m-auto">
            Onze sportauto's huren via BE motorsport is nog nooit zo makkelijk geweest! Kijk op de
            kaart waar je graag wilt rijden, klik in onderstaande agenda wanneer je beschikbaar
            bent, vul je gegevens in en wij regelen de rest! Aarzel niet om ons te contacteren als
            de dag of auto van je keuze reeds geblokkeerd is. We zoeken samen naar een oplossing.
          </p>
        </div>
        <div className="w-full h-96 max-w-screen-xl m-auto">
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={mbToken}
            mapStyle="mapbox://styles/mapbox/dark-v10"
            onViewportChange={(viewport) => setViewPort(viewport)}
          >
            <Marker longitude={5.97521} latitude={50.43258}>
              <div className="cursor-pointer max-w-screen-xl mx-auto h-2 w-2 rounded-full bg-motorblue"></div>
            </Marker>
          </ReactMapGL>
        </div>
        <div className="max-w-screen-xl m-auto px-5 py-4 md:px-8 flex items-center justify-end space-x-2 xl:px-0">
          <div className="bg-gray-200 h-8 w-32"></div>
          <div className="bg-gray-200 h-8 w-10"></div>
        </div>
        <div className="max-w-screen-xl m-auto px-5 py-4 lg:px-0">
          <TrackdayItem index={1} />
          <TrackdayItem index={2} />
          <TrackdayItem index={3} />
        </div>
      </div>
    </div>
  );
}
