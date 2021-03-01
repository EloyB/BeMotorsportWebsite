import PlansSection from "../components/PlansSection";
import Typical from "react-typical";
import { useRouter } from "next/router";
import { activeLocale } from "../data/translations";

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
      <div className="w-full">
        <div className="w-full md:h-screen">
          <img
            className="h-96 md:h-4/5 w-full object-cover lg:h-5/6"
            src="/small-banner 1.png"
            alt="small banner"
          />
          <div className="text-base font-medium text-left md:text-2xl lg:text-3xl px-5 xl:px-0 py-10 h-1/5 w-full max-w-screen-xl m-auto flex items-center bg-white lg:h-1/6">
            <img src="/donut.jpg" alt="donut" className="w-7 h-7 sm:w-14 sm:h-14 mr-3 sm:mr-5" />
            <Typical
              steps={[
                "Create your Business Experience",
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
