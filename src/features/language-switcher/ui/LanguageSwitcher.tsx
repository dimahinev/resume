"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/src/shared/lib/i18n";
import { locales, type Locale } from "@/src/shared/config";
import { useTransition } from "react";

const localeLabels: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
  ro: "RO",
};

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function handleChange(nextLocale: Locale) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div className="flex print:hidden">
      {locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => handleChange(loc)}
          disabled={isPending}
          className={`cursor-pointer rounded-b border border-sky-200 px-3 py-2 font-mono text-xs font-bold shadow-md transition dark:border-sky-800 ${
            loc === locale
              ? "bg-sky-700 text-white dark:bg-sky-600"
              : "bg-white text-sky-700 hover:bg-sky-50 dark:bg-gray-900 dark:text-sky-400 dark:hover:bg-gray-800"
          } ${loc !== locales[0] ? "-ml-px" : ""}`}
        >
          {localeLabels[loc]}
        </button>
      ))}
    </div>
  );
}
