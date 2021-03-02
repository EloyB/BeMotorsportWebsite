import React from "react";
import { useRouter } from "next/router";

export default function renting() {
  const router = useRouter();
  const { locale } = router;
  const t = activeLocale(locale);

  return (
    <div className="pt-36">
      <p>Renting</p>
    </div>
  );
}
