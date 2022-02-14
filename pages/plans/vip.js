import React from "react";
import { useRouter } from "next/router";
import { activeLocale } from "../../data/translations";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useStateValue } from "../../context/StateProvider";

export default function vip() {
  const router = useRouter();
  const { locale } = router;
  const t = activeLocale(locale);
  const [{}, dispatch] = useStateValue();

  return (
    <div>
      <div className="pt-32 pb-10 md:pb-20 px-8 max-w-screen-xl m-auto lg:px-0">
        <h1 className="text-3xl font-medium text-center py-5 lg:text-5xl">VIP</h1>
        <p className="text-center max-w-screen-md m-auto">
          De renting en business modules dekken wat mensen het meest boeken. Er zijn echter zoveel
          meer programma's en pakketten dat je bij ons kan kiezen zonder je zorgen te maken over
          iets.
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
            Alles. Is. Mogelijk.
          </p>
          <div className="text-sm space-y-5 sm:text-base lg:text-lg md:text-left max-w-screen-md m-auto">
            <ul className="list-disc list-inside pt-5">
              <li> Wens je een volledig op maat gemaakt pakket?</li>
              <li>
                Wil je graag op circuit rijden met aansluitend een luxe lunch waar een DJ ter
                plaatse je favoriete liedjes brengt?{" "}
              </li>
              <li>
                Wil je met een sportwagen worden opgepikt en naar het circuit gebracht worden om dan
                met verschillende racewagens op circuit naar keuze te rijden?{" "}
              </li>
              <li>
                Wil je graag een netwerk event organiseren voor je klanten op een luxueuze manier?
              </li>
            </ul>
            <p>
              Dan is de VIP-formule iets voor u! De VIP-formule is tot stand gekomen voor personen
              die all-in willen gaan.
            </p>
            <p>
              Ben je op zoek naar een exclusieve dag helemaal naar uw wensen uitgewerkt? Contacteer
              ons!
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 w-full">
        <div className="md:px-0 md:flex md:flex-row md:items-center lg:max-w-screen-xl lg:m-auto py-8 md:py-12">
          <img className="md:w-1/2" src="/peugeot-front.jpg" alt="Peugeot 206 GTi" />
          <div className="inline-block text-left px-8 py-5 md:px-5 lg:pl-16">
            <p className="text-sm sm:text-base lg:text-lg md:text-left max-w-screen-md m-auto font-bold pb-5">
              Wat zit er standaard in het VIP pakket?
            </p>
            <div className="text-sm space-y-5 sm:text-base lg:text-lg md:text-left max-w-screen-md m-auto">
              <ul className="list-disc list-inside pt-5">
                <li>Racewagen naar keuze (incl. 1 volle benzinetank)</li>
                <li>3 sets velgen (slicks en/of regenbanden)</li>
                <li>Verzekering</li>
                <li>Open pitlane sessie (volgens organisatie)</li>
                <li>Professionele onderseuning door technieker</li>
              </ul>
              <p>
                Optie: Instructeur, Luxe Lunch, DJ, Taxidrive in sportwagen, helikoptervlucht etc.
              </p>
              <p>
                Niets is te gek bij ons. Indien je graag een persoonlijk gesprek wenst over de VIP
                formule, contacteer ons hier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
