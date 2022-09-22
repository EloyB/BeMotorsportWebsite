import enUS from "./en-US";
import nl from "./nl";
import fr from "./fr";
import de from "./de"

export const activeLocale = (locale) => {
  switch (locale){
    case "en-US":
      return enUS
      break;
    case "nl":
      return nl
      break;
    case "fr": 
      return fr
      break;
    case "de": 
      return de
      break;
  }
};

export const toggleLocale = (locale, router) => {
  router.push(router.pathname, router.pathname, { locale });
};
