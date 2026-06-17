import { SectionWrapper } from "./SectionWrapper";
import { Locale } from "@/src/shared/config";
import { t } from "@/src/shared/lib/locale-text";

type SkillCategory = {
  name_en: string;
  name_ru: string;
  name_ro: string;
  items: string;
};

type Props = {
  data: { categories: readonly SkillCategory[] };
  title: string;
  locale: Locale;
};

export function SkillsBlock({ data, title, locale }: Props) {
  return (
    <SectionWrapper id="skills" title={title}>
      {data.categories.map((cat, i) => (
        <div key={i} className="flex flex-col gap-1">
          <h4 className="font-mono text-sm font-bold dark:text-gray-200 print:pb-0">
            {t(cat, locale, "name")}
          </h4>
          <ul className="list-square ml-4 marker:text-sm marker:text-sky-300 sm:columns-3 print:columns-4">
            {cat.items.split(",").map((skill, j) => (
              <li key={j} className="text-gray-900 dark:text-gray-300">
                {skill.trim()}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </SectionWrapper>
  );
}
