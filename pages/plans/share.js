import React from "react";
import { useRouter } from "next/router";
import { activeLocale } from "../../data/translations";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useStateValue } from "../../context/StateProvider";

export default function share() {
  const router = useRouter();
  const { locale } = router;
  const t = activeLocale(locale);
  const [{}, dispatch] = useStateValue();

  return (
    <div>
      <div className="pt-32 pb-10 md:pb-20 px-8 max-w-screen-xl m-auto lg:px-0">
        <h1 className="text-3xl font-medium text-center py-5 lg:text-5xl">Share a ride</h1>
        <p className="text-center max-w-screen-md m-auto">
          Ontdek onze 'Share your ride’ formule voor een zeer aantrekkelijk budget!
        </p>
      </div>
      <div className="hidden md:px-0 md:flex md:flex-row md:items-center lg:max-w-screen-xl lg:m-auto">
        <img className="md:w-1/2" src="/porsche-front.jpg" alt="Porsche Cayman GT4 Clubsport" />
        <img className="md:w-1/2" src="/peugeot-side.jpg" alt="Peugeot 206 GTi" />
      </div>
      <div className="md:px-0 md:flex md:flex-row-reverse md:justify-between md:items-center lg:max-w-screen-xl lg:m-auto py-8 md:py-12">
        <img className="md:w-1/2" src="/porsche-side.jpg" alt="Porsche Cayman GT4 Clubsport" />
        <div className="inline-block text-left px-8 py-5 md:px-5 lg:pr-16">
          <p className="text-sm sm:text-base lg:text-lg md:text-left max-w-screen-md m-auto font-bold pb-5">
            Heb je altijd al op circuit willen rijden maar …
          </p>
          <div className="text-sm space-y-5 sm:text-base lg:text-lg md:text-left max-w-screen-md m-auto">
            <ul className="list-disc list-inside pt-5">
              <li> Liet het budget dit niet toe?</li>
              <li>Niet alleen een auto wenste te huren?</li>
              <li>Je ook graag andere mensen leerde kennen?</li>
              <li>Vul zelf maar aan!</li>
            </ul>
            <p className="font-semibold">We got you!</p>
            <p>
              Via ons Share a Ride concept, zijn bovenstaande punten verleden tijd! We organiseren
              heel de dag voor je en dat met een zeer aantrekkelijk budget tot leven komt.
            </p>
          </div>
          <div className="mt-10">
            <PrimaryButton
              label={t.rentingPage.callToAction}
              onClick={() => {
                dispatch({
                  type: "FILTER_TRACKDAYS",
                  name: "Circuit Zolder",
                  date: "",
                });
                router.push("/trackdays");
              }}
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-50 w-full">
        <div className="md:px-0 md:flex md:flex-row md:items-center lg:max-w-screen-xl lg:m-auto py-8 md:py-12">
          <img className="md:w-1/2" src="/peugeot-front.jpg" alt="Peugeot 206 GTi" />
          <div className="inline-block text-left px-8 py-5 md:px-5 lg:pl-16">
            <p className="text-sm sm:text-base lg:text-lg md:text-left max-w-screen-md m-auto font-bold pb-5">
              Hoe gaat het precies in zijn werk?
            </p>
            <div className="text-sm space-y-3 sm:text-base lg:text-lg md:text-left max-w-screen-md m-auto">
              <p>
                Je informeert ons naar welke auto je voorkeur gaat, wanneer je beschikbaar bent & op
                welk circuit je graag wenst te rijden of op onze website vind je verschillende dagen
                terug waar we dit concept organiseren.
              </p>
              <p>
                Met deze informatie gaan we meteen aan de slag en zoeken we de perfecte combinatie
                voor je. We combineren verschillende personen die graag op samen op het circuit
                willen rijden voor een aanvaardbaar budget & leer je andere mensen kennen met
                dezelfde interesse.
              </p>
            </div>
            <div className="mt-10">
              <PrimaryButton
                label={t.rentingPage.callToAction}
                onClick={() => {
                  dispatch({
                    type: "FILTER_TRACKDAYS",
                    name: "Circuit Zolder",
                    date: "",
                  });
                  router.push("/trackdays");
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-0 md:flex md:flex-row-reverse md:items-center lg:max-w-screen-xl lg:m-auto py-8 md:py-12">
        <img className="md:w-1/2" src="/renting-section-3.jpeg" alt="Peugeot 206 GTi" />
        <div className="inline-block text-left px-8 py-5 md:px-5 lg:pr-16">
          <p className="text-sm sm:text-base lg:text-lg md:text-left max-w-screen-md m-auto font-bold pb-5">
            Concreet voorbeeld:
          </p>
          <div className="text-sm space-y-3 sm:text-base lg:text-lg md:text-left max-w-screen-md m-auto">
            <p>
              Op een Porsche-dag hebben we 5 verschillende piloten onze Porsche Cayman GT4 clubsport
              bestuurd. In plaats van dat 1 piloot het volledige bedrag betaald voor een dag, hebben
              we de kost kunnen verdelen over de 5 verschillende piloten. Geweldig idee toch?{" "}
            </p>
            <p>
              Een dag vol fun, waar je nieuwe mensen leert kennen, en waar krijgt voor je geld ? Dan
              is Share a ride iets voor jou !
            </p>
            <p>Klik hier om onze share a ride formule te vinden</p>
          </div>
          <div className="mt-10">
            <PrimaryButton
              label={t.rentingPage.callToAction}
              onClick={() => {
                dispatch({
                  type: "FILTER_TRACKDAYS",
                  name: "Circuit Zolder",
                  date: "",
                });
                router.push("/trackdays");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
