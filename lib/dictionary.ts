import { en } from "@/locales/en";
import { es } from "@/locales/es";

const dictionaries = {
  en: () => en,
  es: () => es,
};

export type Locale = keyof typeof dictionaries;
export type Dictionary = typeof en;

export const getDictionary = (locale: Locale): Dictionary => {
  return dictionaries[locale] ? dictionaries[locale]() : dictionaries.en();
};
