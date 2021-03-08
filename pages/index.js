import PlansSection from "../components/PlansSection";
import Typical from "react-typical";
import { useRouter } from "next/router";
import { activeLocale } from "../data/translations";
import Head from "next/head";

const porscheData = [
  { title: "typeOfDrive" },
  { title: "power" },
  { title: "transmission" },
  { title: "steering" },
  { title: "engine" },
  { title: "tank" },
  { title: "safety" },
];

const peugeotData = [
  { title: "typeOfDrive" },
  { title: "power" },
  { title: "transmission" },
  { title: "topspeed" },
  { title: "engine" },
  { title: "tank" },
  { title: "safety" },
];

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = activeLocale(locale);
  return (
    <div>
      <Head>
        <title>BE Motorsport | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="BE motorsport verhuurt de Porsche Cayman GT4 Clubsport om te vertoeven op de mooiste en meest uitdagende circuits in binnen -en buitenland. Ready? Set? Go!"
        />
      </Head>
      <div className="w-full">
        <div className="relative w-full md:h-screen">
          <img
            className="relative z-10 h-96 md:h-4/5 w-full object-cover lg:h-5/6"
            src="/small-banner 1.png"
            alt="small banner"
          />
          <div className="relative text-base font-semibold text-left md:text-2xl lg:text-3xl px-5 xl:px-0 py-10 h-1/5 w-full max-w-screen-xl m-auto flex items-center bg-white lg:h-1/6">
            <Typical
              steps={[
                "Create your business experience",
                1000,
                "Live your VIP trip",
                1000,
                "Share an unforgettable ride",
                1000,
                "Experience a care-free trackday",
                1000,
                "Boost your networking opportunity",
                1000,
              ]}
              loop={Infinity}
              wrapper="h1"
            />
            <img
              src="/donut.jpg"
              alt="donut"
              className="absolute opacity-20 -top-20 -left-40 sm:-left-96"
            />
          </div>
        </div>
        <PlansSection />
        <div className="bg-white py-10 px-8 ">
          <div className="max-w-screen-xl m-auto ">
            <p className="pb-8 text-center font-medium text-3xl lg:text-5xl">{t.home.title}</p>
            <div className="space-y-20">
              <div className="bg-white w-full flex flex-col-reverse md:flex-row md:items-center">
                <div className="px-4 divide-gray-50 divide-y-2">
                  <p className="text-motorblue font-semibold py-6 text-xl sm:text-2xl lg:text-3xl">
                    Porsche Cayman GT4 Clubsport
                  </p>
                  {porscheData.map((item, index) => (
                    <div key={index} className="py-2 text-sm grid grid-cols-2">
                      <p className="font-semibold">{t.home.carDetails[item.title]}</p>
                      <p>{t.home.porscheData[item.title]}</p>
                    </div>
                  ))}
                </div>
                <img
                  src="/porshe.jpg"
                  alt="Porsche"
                  className="w-full md:w-2/5 lg:w-1/2 md:pt-10 object-contain"
                />
              </div>
              <div className="bg-white w-full flex flex-col md:flex-row md:items-center">
                <img
                  src="/peugeot.jpg"
                  alt="Peugeot 206 GTi"
                  className="w-full md:w-2/5 lg:w-1/2 md:pt-10 object-contain"
                />
                <div className="px-4 divide-gray-50 divide-y-2">
                  <p className="text-motorblue font-semibold py-6 text-xl sm:text-2xl lg:text-3xl">
                    Peugeot 206 GTi
                  </p>
                  {peugeotData.map((item, index) => (
                    <div key={index} className="py-2 text-sm grid grid-cols-2">
                      <p className="font-semibold">{t.home.carDetails[item.title]}</p>
                      <p>{t.home.peugeotData[item.title]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
