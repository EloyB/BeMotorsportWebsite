import React, { useEffect, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import TrackdayItem from "../components/TrackdayItem";
import firebase from "../context/firebase";
import { useStateValue } from "../context/StateProvider";

export default function trackdays({ circuits }) {
  const [{ filteredTrackdays }, dispatch] = useStateValue();
  const [showCircuitPopup, setShowCircuitPopup] = useState({ show: false, circuit: {} });
  const [viewport, setViewPort] = useState({
    longitude: 5.97521,
    latitude: 50.43258,
    width: "100%",
    height: "100%",
    zoom: 4,
  });

  const mbToken =
    "pk.eyJ1IjoicXdlYmRlc2lnbiIsImEiOiJja2tmbzV3ZWUwY2gzMndtcHJjYzd1NmZ2In0.39BM3JaR3bYywwvVHDzKCA";

  useEffect(() => {
    firebase
      .firestore()
      .collection("trackdays")
      .get()
      .then((res) => {
        dispatch({
          type: "SET_TRACKDAYS",
          list: res.docs.map((entry) => ({
            id: entry.id,
            ...entry.data(),
          })),
        });
      });
  }, []);

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
        <div className="relative w-full h-96 max-w-screen-xl m-auto">
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={mbToken}
            mapStyle="mapbox://styles/mapbox/dark-v10"
            onViewportChange={(viewport) => setViewPort(viewport)}
          >
            <div
              className={`p-4 bg-white absolute top-5 right-5 border-r-4 border-motorblue text-right ${
                showCircuitPopup.show ? "block" : "hidden"
              }`}
            >
              <p className="font-semibold">{showCircuitPopup.circuit.name}</p>
              <p className="text-xs">{showCircuitPopup.circuit.country}</p>
            </div>
            {circuits.map((item, index) => (
              <Marker key={index} longitude={item.coordinates.lng} latitude={item.coordinates.lat}>
                <div
                  className="cursor-pointer max-w-screen-xl mx-auto h-3 w-3 rounded-full bg-motorblue"
                  onClick={() => {
                    dispatch({
                      type: "FILTER_TRACKDAYS",
                      name: item.name,
                    });
                  }}
                  onMouseEnter={() => setShowCircuitPopup({ show: true, circuit: item })}
                  onMouseLeave={() => setShowCircuitPopup({ show: false, circuit: {} })}
                ></div>
              </Marker>
            ))}
          </ReactMapGL>
        </div>
        <div className="max-w-screen-xl m-auto px-5 py-4 md:px-8 flex items-center justify-end space-x-2 xl:px-0">
          <div className="bg-gray-200 h-8 w-32"></div>
          <div className="bg-gray-200 h-8 w-10"></div>
        </div>
        <div className="max-w-screen-xl m-auto px-5 pt-4 pb-12 lg:px-0">
          {filteredTrackdays.length > 0 ? (
            filteredTrackdays.map((item, index) => (
              <TrackdayItem key={index} index={index} trackday={item} />
            ))
          ) : (
            <div className="bg-gray-50 px-4 py-7 text-center">
              <p className="font-semibold text-motorblue">
                Selecteer een circuit op de kaart om de beschikbare trackdays te zien
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const circuits = await firebase.firestore().collection("circuits").get();
  const circuitsData = circuits.docs.map((entry) => ({
    id: entry.id,
    ...entry.data(),
  }));
  return {
    props: { circuits: circuitsData },
  };
}
