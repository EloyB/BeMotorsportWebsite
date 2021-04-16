import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { Datepicker } from "../components/Datepicker";
import { Dropdown } from "../components/Dropdown";
import TrackdayItem from "../components/TrackdayItem";
import firebase from "../context/firebase";
import { useStateValue } from "../context/StateProvider";
import { activeLocale } from "../data/translations";
import Head from "next/head";

export default function trackdays({ circuits }) {
  const router = useRouter();
  const trackdaysRef = useRef();
  const [{ filteredTrackdays, trackdays }, dispatch] = useStateValue();
  const [showCircuitPopup, setShowCircuitPopup] = useState({
    show: false,
    circuit: {},
  });
  const [selectedCircuit, setSelectedCircuit] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [viewport, setViewPort] = useState({
    longitude: 5.97521,
    latitude: 50.43258,
    width: "100%",
    height: "100%",
    zoom: 4,
  });
  const { locale } = router;
  const t = activeLocale(locale);

  const mbToken =
    "pk.eyJ1IjoicXdlYmRlc2lnbiIsImEiOiJja2tmbzV3ZWUwY2gzMndtcHJjYzd1NmZ2In0.39BM3JaR3bYywwvVHDzKCA";

  useEffect(() => {
    dispatch({
      type: "SET_CIRCUITS",
      circuits,
    });
    firebase
      .firestore()
      .collection("trackdays")
      .get()
      .then((res) => {
        var sortedList = res.docs.sort((a, b) => new Date(a.data().date) - new Date(b.data().date));
        dispatch({
          type: "SET_TRACKDAYS",
          list: sortedList.map((entry) => ({
            id: entry.id,
            ...entry.data(),
          })),
        });
      });
  }, []);

  return (
    <div>
      <Head>
        <title>BE Motorsport | Trackdays</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <div className="pt-32 pb-20 px-8 max-w-screen-xl m-auto lg:px-0">
          <h1 className="text-3xl font-medium text-center py-5 lg:text-5xl">
            {t.trackdaysPage.title}
          </h1>
          <p className="text-center max-w-screen-md m-auto">{t.trackdaysPage.description}</p>
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
                    setSelectedCircuit(item.name);
                    dispatch({
                      type: "FILTER_TRACKDAYS",
                      name: item.name,
                      date: selectedDate,
                    });
                    trackdaysRef.current.scrollIntoView({ behavior: "smooth" });
                  }}
                  onMouseEnter={() => setShowCircuitPopup({ show: true, circuit: item })}
                  onMouseLeave={() => setShowCircuitPopup({ show: false, circuit: {} })}
                ></div>
              </Marker>
            ))}
          </ReactMapGL>
        </div>
        <div className="max-w-screen-xl m-auto px-5 lg:px-0 py-5 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-5 sm:justify-end sm:items-center">
          <svg
            className="w-6 h-6 text-motorblue hidden sm:block"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
              clipRule="evenodd"
            ></path>
          </svg>
          <Dropdown
            selectOptions={circuits}
            targetField="name"
            placeholder={t.trackdaysPage.dropdownPlaceholder}
            value={selectedCircuit}
            setSelectedOption={(item) => {
              setSelectedCircuit(item.name);
              dispatch({
                type: "FILTER_TRACKDAYS",
                name: item.name,
                date: selectedDate,
              });
            }}
          />
          <Datepicker
            onChange={(value) => {
              setSelectedDate(value);
              dispatch({
                type: "FILTER_TRACKDAYS",
                name: selectedCircuit,
                date: value,
              });
            }}
          />
        </div>
        <div className="max-w-screen-xl m-auto">
          <hr />
        </div>

        <div ref={trackdaysRef} className="max-w-screen-xl m-auto px-5 pt-4 pb-12 lg:px-0">
          {filteredTrackdays !== null ? (
            filteredTrackdays.map((item, index) => (
              <TrackdayItem key={index} index={index} trackday={item} />
            ))
          ) : trackdays.length > 0 ? (
            trackdays.map((item, index) => (
              <TrackdayItem key={index} index={index} trackday={item} />
            ))
          ) : (
            <div className="bg-gray-50 px-4 py-7 text-center">
              <p className="font-semibold text-motorblue">
                {t.trackdaysPage.noTrackdaysFoundPlaceholder}
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
