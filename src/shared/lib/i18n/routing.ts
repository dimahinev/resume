import { defineRouting } from "next-intl/routing";
import { locales, defaultLocale } from "@/src/shared/config";

export const routing = defineRouting({
  locales,
  defaultLocale,
});
