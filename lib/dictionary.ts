import { en } from "@/locales/en";
import { es } from "@/locales/es";

const dictionaries = {
  en: () => en,
  es: () => es,
};

export type Locale = keyof typeof dictionaries;

export const getDictionary = (locale: Locale) => {
  return dictionaries[locale] ? dictionaries[locale]() : dictionaries.en();
};
