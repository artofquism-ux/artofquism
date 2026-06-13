import en from "./en";
import bn from "./bn";
import hi from "./hi";
import sa from "./sa";

export const translations = { en, bn, hi, sa };

export const getTranslation = (lang) =>
  translations[lang] || translations.en;

const content = {
  en,
  bn,
  hi,
  sa,
};

export default content;