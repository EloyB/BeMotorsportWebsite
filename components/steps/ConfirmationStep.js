import React from "react";
import { useStateValue } from "../../context/StateProvider";
import { useRouter } from "next/router";
import { activeLocale } from "../../data/translations";

export default function ConfirmationStep() {
  const router = useRouter();
  const { locale } = router;
  const t = activeLocale(locale);
  const [{ booking }, dispatch] = useStateValue();

  return (
    <div className="w-full py-10 px-5 bg-gray-50">
      <div className="max-w-screen-lg m-auto pb-5 flex flex-col justify-between xs:flex-row xs:items-center">
        <p className="font-bold text-3xl pb-3 xs:pb-0 md:text-4xl">
          <span className="text-motorblue">Stap 4 - </span>
          {t.reservationPage.confirmationStep.title}
        </p>
      </div>
      <div className="max-w-screen-lg m-auto space-y-2 flex flex-col">
        <p>{t.reservationPage.confirmationStep.description}</p>
      </div>
    </div>
  );
}
