import React from "react";

export default function MailTemplate() {
  return (
    <div>
      <p>
        Beste {{ firstName }} {{ lastName }}
      </p>
      <p>Hartelijk dank voor je interesse in BE motorsport!</p>
      <p>In bijlage ontvang je meer informatie over de huur van de raceauto.</p>
      <p>Als er vragen zijn, twijfel dan niet om ons te contacteren.</p>
      <p>We zien je graag op het circuit.</p>
      <p>Met vriendelijke groeten</p>
      <p>Didier Beyens</p>
      <div>
        <p>BE motorsport BV</p>
        <p>Didier Beyens</p>
        <p>Mobile: +32 478 72 92 87</p>
        <a href="http://www.bemotorsport.com">www.bemotorsport.com</a>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/bemotorsport-9b713.appspot.com/o/mailtemplate%2Flogo.svg?alt=media&token=c5137953-dfd0-4430-8d7b-86ca81f947e3"
          alt="logo"
        />
      </div>
    </div>
  );
}
