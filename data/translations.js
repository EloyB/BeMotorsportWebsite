const translationLanguage = {
  navbar: {
    planYourDay: "",
    aboutUs: "",
  },
  home: {
    carDetails: {
      typeOfDrive: "",
      power: "",
      transmission: "",
      steering: "",
      engine: "",
      tank: "",
      safety: "",
    },
    porscheData: {
      typeOfDrive: "",
      power: "",
      transmission: "",
      steering: "",
      engine: "",
      tank: "",
      safety: "",
    },
    porscheData: {
      typeOfDrive: "",
      power: "",
      transmission: "",
      steering: "",
      engine: "",
      tank: "",
      safety: "",
    },
  },
  trackdaysPage: {
    title: "",
    description: "",
    dropdownPlaceholder: "",
    selectTrackdaysPlaceholder: "",
  },
  reservationPage: {
    title: "",
    description: "",
    trackdaysStep: {
      placeholder: "",
      searchTrackdaysButtonText: "",
    },
    driversStep: {
      title: "",
      placeholder: "",
      addButtonText: "",
      age: "",
      hasExperience: "",
    },
    personalInformationStep: {
      title: "",
      submitButtonText: "",
    },
    general: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      street: "",
      city: "",
      number: "",
      appartment: "",
      zip: "",
      country: "",
      backButtonText: "",
      nextButtonText: "",
    },
  },
  contactPage: {
    title: "",
    description: "",
    didierDescription: "",
    stephanDescription: "",
    julieDescription: "",
    sendMessageButtonText: "",
  },
  footer: {
    pages: "",
    plans: "",
  },
};

export const activeLocale = (locale) => {
  return locale === "en-US" ? enUS : locale === "nl" ? nl : fr;
};

export const toggleLocale = (locale, router) => {
  router.push("/", "/", { locale });
};

export const enUS = {
  footer: {
    plans: "Plans",
    pages: "Pages",
  },
};

export const nl = {
  navbar: {
    planYourDay: "Plan je dag",
    aboutUs: "Over ons",
  },
  home: {
    carDetails: {
      typeOfDrive: "Type aandrijving",
      power: "Vermogen",
      transmission: "Transmissie",
      steering: "Stuurinrichting",
      engine: "Motor",
      tank: "Tank",
      safety: "Veiligheid",
      topspeed: "Topsnelheid",
    },
    porscheData: {
      typeOfDrive: "Achterwielaandrijving",
      power: "283 kW (385 pk)",
      transmission:
        "6-speed Porsche Doppelkupplung (PDK) met geoptimaliseerde schakelapplicatie paddle shift",
      steering: "Elektromechanische stuurbekrachtiging",
      engine: "3.800 cc",
      tank: "60 l-veiligheidstank",
      safety: "Originele Porsche rolkooi met racing kit en volledig gestript interieur",
    },
    peugeotData: {
      typeOfDrive: "Voorwielaandrijving",
      power: "100 kW (138 pk)",
      transmission: "5 versnellingen, handgeschakeld",
      topspeed: "210 km/h",
      engine: "1997 cm3",
      tank: "50 liter",
      safety: "rolkooi met racing kit en volledig gestript interieur",
    },
  },
  trackdaysPage: {
    title: "Onze Trackdays",
    description:
      "Onze race auto's huren via BE motorsport is nog nooit zo makkelijk geweest! Kijk op de kaart waar je graag wilt rijden, klik in onderstaande agenda wanneer je beschikbaar bent, vul je gegevens in en wij regelen de rest! Aarzel niet om ons te contacteren als de dag of auto van je keuze reeds geblokkeerd is. We zoeken samen naar een oplossing!",
    dropdownPlaceholder: "Selecteer een circuit",
    selectTrackdaysPlaceholder:
      "Selecteer een circuit op de kaart of in de lijst om de trackdays te zien",
  },
  reservationPage: {
    title: "Plan je trackday",
    description: "Plan nu vrijblijvend je trackday en wij regelen de rest!",
    trackdaysStep: {
      placeholder: "Selecteer eerst een trackday",
      searchTrackdaysButtonText: "Trackdays zoeken",
    },
    driversStep: {
      title: "Piloten",
      placeholder: "Voeg eerst piloten toe via het formulier",
      addButtonText: "Voeg toe",
      age: "Leeftijd",
      hasExperience: "Heeft ervaring",
    },
    personalInformationStep: {
      title: "Persoonlijke gegevens",
      submitButtonText: "Boek",
    },
    general: {
      firstName: "Voornaam",
      lastName: "Achternaam",
      phoneNumber: "Telefoonnummer",
      street: "Straat",
      city: "Dorp/Stad",
      number: "Nummer",
      appartment: "Bus",
      zip: "Postcode",
      country: "Land",
      backButtonText: "Terug",
      nextButtonText: "Volgende",
    },
  },
  contactPage: {
    title: "Ons Team",
    description:
      "BE motorsport is een familiebedrijf met een grote interesse voor de motorsport. Racing is de metafoor die ons heeft doen nadenken over dit nieuwe project. Het zakendoen zit bij de familie Beyens in hart en nieren, en van daaruit is de passie ontstaan om beide te gaan combineren",
    didierDescription:
      "Heb je vragen over onze pakketten? Aarzel zeker niet om contact met mij op te nemen. Ik help je graag verder!",
    stephanDescription:
      "Heb je technische vragen of wil je graag brainstormen over hoe we jullie bedrijf kunnen verder helpen? Aarzel dan zeker niet om contact met mij op te nemen! Persoonlijk contact blijft belangrijk in zaken doen, so, let's meet!",
    julieDescription:
      "Wil je graag een creatief event organiseren voor je team? Of wil je graag een teambuilding organiseren met leuke workshops? Weet je niet goed waar te starten? Twijfel dan zeker niet en bel me op! Ik help je graag verder!",
    sendMessageButtonText: "Verstuur bericht",
  },
  footer: {
    pages: "Pagina's",
    plans: "Opties",
  },
};
