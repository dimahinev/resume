export const locales = ["en", "ru", "ro"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
