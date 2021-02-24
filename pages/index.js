import PlansSection from "../components/PlansSection";
import Typical from "react-typical";

const porscheData = [
  { title: "Type aandrijving", description: "Achterwielaandrijving" },
  { title: "Vermogen", description: "283 kW (385 pk)" },
  {
    title: "Transmissie",
    description:
      "6-speed Porsche Doppelkupplung (PDK) met geoptimaliseerde schakelapplicatie paddle shift",
  },
  { title: "Stuurinrichting", description: "Elektromechanische stuurbekrachtiging" },
  { title: "Motor", description: "3.800 cc" },
  { title: "Tank", description: "60 l-veiligheidstank" },
  {
    title: "Veiligheid",
    description: "Originele Porsche rolkooi met racing kit en volledig gestript interieur",
  },
];

export default function Home() {
  return (
    <div>
      <div className="w-full">
        <div className="w-full md:h-screen">
          <img
            className="h-96 md:h-4/5 w-full object-cover lg:h-5/6"
            src="/small-banner2.jpg"
            alt="small banner"
          />
          <div className="text-lg font-medium text-left md:text-2xl lg:text-3xl px-8 py-10 h-1/5 w-full max-w-screen-xl m-auto flex items-center bg-white lg:h-1/6">
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
        <div className="bg-gray-50 py-10 px-8 ">
          <div className="max-w-screen-xl m-auto ">
            <p className="pb-8 text-center font-medium text-3xl lg:text-5xl">
              Onze team opstelling
            </p>
            <div className="space-y-10 sm:flex sm:space-y-0 sm:space-x-10 sm:justify-between">
              <div className="bg-white w-full">
                <img src="/porshe.jpg" alt="Porsche" />
                <p className="text-motorblue font-semibold p-6 xs:text-xl md:text-2xl">
                  Porsche Cayman GT4 Clubsport
                </p>
                <div className="px-4 divide-gray-50 divide-y-2">
                  {porscheData.map((item, index) => (
                    <div key={index} className="py-5 px-2 text-sm space-y-2">
                      <p className="font-semibold">{item.title}</p>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white w-full">
                <img src="/peugeot.jpg" alt="Porsche" />
                <p className="text-motorblue font-semibold p-6 xs:text-xl md:text-2xl">
                  Peugeot 207
                </p>
                <div className="px-4 divide-gray-50 divide-y-2">
                  {porscheData.map((item, index) => (
                    <div key={index} className="py-5 px-2 text-sm space-y-2">
                      <p className="font-semibold">{item.title}</p>
                      <p>{item.description}</p>
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
