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
        <h1 className="text-3xl font-medium text-center py-5 lg:text-5xl">{t.sharePage.title}</h1>
        <p className="text-center max-w-screen-md m-auto">
          {t.sharePage.description}
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
            {t.sharePage.block1.title}
          </p>
          <div className="text-sm space-y-5 sm:text-base lg:text-lg md:text-left max-w-screen-md m-auto">
            <ul className="list-disc list-inside pt-5">
              {t.sharePage.block1.pointers.map((item, index) => <li>{item}</li>)}
            </ul>
            <p>
              {t.sharePage.block1.paragraph}
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
              {t.sharePage.block2.title}
            </p>
            <div className="text-sm space-y-3 sm:text-base lg:text-lg md:text-left max-w-screen-md m-auto">
              <p>
                {t.sharePage.block2.paragraph1}
              </p>
              <p>
                {t.sharePage.block2.paragraph2}
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
            {t.sharePage.block3.title}
          </p>
          <div className="text-sm space-y-3 sm:text-base lg:text-lg md:text-left max-w-screen-md m-auto">
            <p>
              {t.sharePage.block3.paragraph1}
            </p>
            <p>
              {t.sharePage.block3.paragraph2}
            </p>
            <p>{t.sharePage.block3.click}</p>
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
