import React from "react";
import { activeLocale } from "../data/translations";
import MultiStepForm from "../components/MultiStepForm";
import { useRouter } from "next/router";
import Head from "next/head";

export default function reservation() {
  const router = useRouter();
  const { locale } = router;
  const t = activeLocale(locale);
  return (
    <div className="pt-20">
      <Head>
        <title>BE Motorsport | Plan your trackday</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="py-10 pb-20 px-5">
        <h1 className="text-4xl font-medium text-center py-5 lg:text-5xl">
          {t.reservationPage.title}
        </h1>
        <p className="text-center max-w-screen-md m-auto">{t.reservationPage.description}</p>
      </div>
      <MultiStepForm />
    </div>
  );
}
