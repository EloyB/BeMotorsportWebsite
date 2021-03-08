const translationLanguage = {
  navbar: {
    planYourDay: "",
    aboutUs: "",
  },
  home: {
    planSection: {
      renting: {
        title: "",
        hover: "",
      },
      shareARide: {
        title: "",
        hover: "",
      },
      VIP: {
        title: "",
        hover: "",
      },
      business: {
        title: "",
        hover: "",
      },
    },
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
    peugotData: {
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
      hasNoExperience: "",
      instructorNeeded: "",
      noInstructorNeeded: "",
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
  router.push(router.pathname, router.pathname, { locale });
};

export const enUS = {
  navbar: {
    planYourDay: "Plan your day",
    aboutUs: "About us",
  },
  home: {
    planSection: {
      renting: {
        title: "Renting",
        hover: "Rent our Porsche Cayman GT4 Clubsport or the Peugeot 206 GTi",
      },
      shareARide: {
        title: "Share a ride",
        hover: "Discover our 'Share your ride (&) Network' formula on an affordable budget",
      },
      VIP: {
        title: "VIP",
        hover:
          "BE\xa0motorsport arranges everything for you from A\xa0to\xa0Z with a VIP Experience",
      },
      business: {
        title: "Business",
        hover: "Boost your company to the next level together with BE\xa0motorsport",
      },
    },
    carDetails: {
      typeOfDrive: "Type of drive",
      power: "Power",
      transmission: "Transmission",
      steering: "Steering",
      topspeed: "Top speed",
      engine: "Engine",
      tank: "Tank",
      safety: "Safety",
    },
    porscheData: {
      typeOfDrive: "Rear wheel drive",
      power: "283 kW (385 pk)",
      transmission: "6-speed Porsche Doppelkupplung (PDK) with optimized shift application",
      steering: "Elektromechanical power steering",
      engine: "3.800 cc",
      tank: "60 l-safety tank",
      safety: "Original Porsche welded cage with racing kit and completely stripped interior",
    },
    peugeotData: {
      typeOfDrive: "Front-wheel drive",
      power: "100 kW (139 hp)",
      transmission: "5 gear manual gear box",
      topspeed: "210 km/h",
      engine: "1997 cc",
      tank: "50 Liter",
      safety: "Welded cage with racing kit and fully stripped interior",
    },
    title: "Meet the team",
  },
  trackdaysPage: {
    title: "Our Trackdays",
    description:
      "Renting our race cars through BE motorsport has never been easier! Look on the map where you would like to drive, click in the agenda below when you are available, fill in your details and we will send you a free quotation! Do not hesitate to contact us if the day or car of your choice has already been taken. We will look for a solution together!",
    dropdownPlaceholder: "Choose circuit",
    selectTrackdaysPlaceholder: "Select a circuit on the map to view the available trackdays.",
  },
  reservationPage: {
    title: "Plan your trackday",
    description: "Plan your trackday now and we will send you a free quotation!",
    trackdaysStep: {
      title: "Design your trackday",
      placeholder: "First select your trackdays from our list!",
      chooseCarTitle: "Choose your car",
      chooseYourPlanTitle: "Choose your formula",
      searchTrackdaysButtonText: "Search trackdays",
    },
    driversStep: {
      title: "Choose your pilots",
      placeholder: "Add some pilots with the form first!",
      addButtonText: "Add pilot",
      age: "Age",
      hasExperience: "Has experience",
      hasNoExperience: "Has no experience",
      instructorNeeded: "Instructor needed",
      noInstructorNeeded: "Instructor not needed",
    },
    personalInformationStep: {
      title: "Fill in your personal details",
      submitButtonText: "Submit",
    },
    confirmationStep: {
      title: "Thanks for your inquiry",
      description: "We will shortly send you an email with a free quotation.",
    },
    general: {
      firstName: "First Name",
      lastName: "Last Name",
      phoneNumber: "Phone Number",
      street: "Street",
      city: "City",
      number: "Number",
      appartment: "Appartment",
      zip: "Zip code",
      country: "Country",
      backButtonText: "Back",
      nextButtonText: "Next",
    },
  },
  contactPage: {
    title: "Our team",
    description:
      "BE\xa0motorsport is a family company with a great interest in motorsport. Racing is the metaphor that made us rethink this new project. Doing business has been a great part of our lives and we will therefore take the opportunity to grow this passion into your business experience.    BE\xa0motorsport is professionally engaged in customizing your event to your personal needs so that you and especially your participants are extremely satisfied with our service.    What do you have in mind? We will make it happen!",
    didierDescription:
      "Do not hesitate to contact me if you have any questions about our packages. I am happy to help you!",
    stephanDescription:
      "Do you have  any technical questions or would you like to brainstorm about how we can boost your company to the next level? Do not hesitate to contact me! Personal contact remains important in business, so: let's meet!",
    julieDescription:
      "Would you like to organize a creative event for your team? Or would you like to organize a team building with inspiring workshops, but you are not sure where to start? Don't hesitate and give me a call! I am happy to help you!",
    fullName: "Full name",
    message: "Message",
    sendMessageButtonText: "Send message",
  },
  rentingPage: {
    title: "Renting",
    description:
      "BE\xa0motorsport rents out the Porsche Cayman GT4 Clubsport & the Peugeot 206 GTi to enjoy the most beautiful and challenging circuits in Belgium and abroad. This race car is ready to go out with you for half a day, a full day or several days. Book now and we'll take care of the rest! Ready? Set? Go!",
  },
  footer: {
    pages: "Pages",
    plans: "Plans",
  },
};

export const nl = {
  navbar: {
    planYourDay: "Plan je dag",
    aboutUs: "Over ons",
  },
  home: {
    planSection: {
      renting: {
        title: "Renting",
        hover: "Huur onze Porsche Cayman GT4 Clubsport of de Peugeot 206 GTi",
      },
      shareARide: {
        title: "Share a ride",
        hover: "Ontdek onze 'Share your ride (&) Network' formule voor een aantrekkelijk budget.",
      },
      VIP: {
        title: "VIP",
        hover: "BE\xa0motorsport legt je in de watten van A\xa0tot\xa0Z met een VIP Experience",
      },
      business: {
        title: "Business",
        hover: "Boost jouw bedrijf naar de next level samen met BE\xa0motorsport",
      },
    },
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
      power: "100 kW (139 pk)",
      transmission: "5 versnellingen, handgeschakeld",
      topspeed: "210 km/h",
      engine: "1997 cc",
      tank: "50 liter",
      safety: "Rolkooi met racing kit en volledig gestript interieur",
    },
    title: "Meet the team",
  },
  trackdaysPage: {
    title: "Onze Trackdays",
    description:
      "Onze raceauto's huren via BE\xa0motorsport is nog nooit zo makkelijk geweest! Kijk op de kaart waar je graag wilt rijden, klik in onderstaande agenda wanneer je beschikbaar bent, vul je gegevens in en wij bezorgen je een vrijblijvende offerte! Aarzel niet om ons te contacteren als de dag of auto van je keuze reeds geblokkeerd is. We zoeken samen naar een oplossing!",
    dropdownPlaceholder: "Selecteer een circuit",
    selectTrackdaysPlaceholder:
      "Selecteer een circuit op de kaart of in de lijst om de trackdays te zien",
  },
  reservationPage: {
    title: "Plan je trackday",
    description: "Plan nu je trackday en wij bezorgen je een vrijblijvende offerte!",
    trackdaysStep: {
      title: "Design je trackday",
      placeholder: "Selecteer eerst een trackday",
      searchTrackdaysButtonText: "Trackdays zoeken",
      chooseCarTitle: "Kies je auto",
      chooseYourPlanTitle: "Kies je formule",
    },
    driversStep: {
      title: "Kies je piloten",
      placeholder: "Voeg eerst piloten toe via het formulier",
      addButtonText: "Voeg toe",
      age: "Leeftijd",
      hasExperience: "Heeft ervaring",
      hasNoExperience: "Heeft geen ervaring",
      instructorNeeded: "Instructeur nodig",
      noInstructorNeeded: "Geen instructeur nodig",
    },
    personalInformationStep: {
      title: "Vul je persoonlijke gegevens in",
      submitButtonText: "Offerte aanvragen",
    },
    confirmationStep: {
      title: "Bedankt voor je aanvraag!",
      description: "We sturen je zo dadelijk een mailtje met jouw vrijblijvende offerte.",
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
      "BE\xa0motorsport is een familiebedrijf met een grote interesse voor de motorsport. Racing is de metafoor die ons heeft doen nadenken over dit nieuwe project. Het zakendoen zit bij de familie Beyens in hart en nieren, en van daaruit is de passie ontstaan om beide te gaan combineren",
    didierDescription:
      "Heb je vragen over onze pakketten? Aarzel zeker niet om contact met mij op te nemen. Ik help je graag verder!",
    stephanDescription:
      "Heb je technische vragen of wil je graag brainstormen over hoe we “jullie bedrijf kunnen boosten”? Aarzel dan zeker niet om contact met mij op te nemen! Persoonlijk contact blijft belangrijk in zaken doen, so, let's meet!",
    julieDescription:
      "Wil je graag een creatief event organiseren voor je team? Of wil je graag een teambuilding organiseren met leuke workshops? Weet je niet goed waar te starten? Twijfel dan zeker niet en bel me op! Ik help je graag verder!",
    sendMessageButtonText: "Verstuur bericht",
  },
  rentingPage: {
    title: "Renting",
    description:
      "BE\xa0motorsport verhuurt de Porsche Cayman GT4 Clubsport & de Peugeot 206 GTi om te vertoeven op de mooiste en meest uitdagende circuits in binnen -en buitenland. Deze raceauto is klaar om met jou op stap te gaan voor een halve dag, hele dag of meerdere dagen. Boek nu en de rest verzorgen wij! Ready? Set? Go!",
  },
  footer: {
    pages: "Pagina's",
    plans: "Opties",
  },
};

export const fr = {
  footer: {
    plans: "Plans",
    pages: "Pages",
  },
};
