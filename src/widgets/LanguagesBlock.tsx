import { SectionWrapper } from "./SectionWrapper";
import { Locale } from "@/src/shared/config";
import { t } from "@/src/shared/lib/locale-text";

type LanguageItem = {
  language_en: string;
  language_ru: string;
  language_ro: string;
  level_en: string;
  level_ru: string;
  level_ro: string;
  code: string;
};

type Props = {
  data: { items: readonly LanguageItem[] };
  title: string;
  locale: Locale;
};

export function LanguagesBlock({ data, title, locale }: Props) {
  return (
    <SectionWrapper id="languages" title={title}>
      <ul className="list-square ml-4 marker:text-sm marker:text-sky-300 sm:columns-2 print:columns-3 space-y-2 print:space-y-0">
        {data.items.map((item, i) => (
          <li key={i} className="break-inside-avoid">
            <h4 className="font-mono text-sm font-bold dark:text-gray-200 print:pb-0">
              {t(item, locale, "language")}{" "}
              <span className="font-sans text-base font-normal text-gray-900 dark:text-gray-300">
                ({t(item, locale, "level")}
                {item.code ? ` [${item.code}]` : ""})
              </span>
            </h4>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
