import { SectionWrapper } from "./SectionWrapper";
import { Locale } from "@/src/shared/config";
import { t } from "@/src/shared/lib/locale-text";

type PersonalProjectItem = {
  name: string;
  url: string;
  description_en: string;
  description_ru: string;
  description_ro: string;
};

type Props = {
  data: { items: readonly PersonalProjectItem[] };
  title: string;
  locale: Locale;
};

export function PersonalProjectsBlock({ data, title, locale }: Props) {
  return (
    <SectionWrapper id="personalProjects" title={title}>
      {data.items.map((item, i) => (
        <div key={i} className="flex flex-col">
          <h4 className="font-mono text-sm font-bold dark:text-gray-200 print:pb-0">
            <a
              className="link-underline"
              target="_blank"
              rel="noopener noreferrer"
              href={item.url}
            >
              {item.name}
            </a>
          </h4>
          <p className="text-gray-900 dark:text-gray-300">
            {t(item, locale, "description")}
          </p>
        </div>
      ))}
    </SectionWrapper>
  );
}
