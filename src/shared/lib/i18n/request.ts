import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { Locale } from "@/src/shared/config";
import raw from "../../../../content/translations.json";

type RawSection = Record<string, string>;

function extractLocale(section: RawSection, locale: string): Record<string, string> {
  return Object.fromEntries(
    Object.entries(section)
      .filter(([key]) => key.endsWith(`_${locale}`))
      .map(([key, value]) => [key.slice(0, -(locale.length + 1)), value])
  );
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  const messages = {
    meta: extractLocale(raw.meta as RawSection, locale),
    nav: extractLocale(raw.nav as RawSection, locale),
    intro: extractLocale(raw.intro as RawSection, locale),
    sections: extractLocale(raw.sections as RawSection, locale),
  };

  return { locale, messages };
});
