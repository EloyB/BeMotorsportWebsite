import enUS from "./en-US";
import nl from "./nl";
import fr from "./fr";

export const activeLocale = (locale) => {
  return locale === "en-US" ? enUS : locale === "nl" ? nl : fr;
};

export const toggleLocale = (locale, router) => {
  router.push(router.pathname, router.pathname, { locale });
};
