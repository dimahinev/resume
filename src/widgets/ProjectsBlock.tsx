import { SectionWrapper } from "./SectionWrapper";
import { Locale } from "@/src/shared/config";
import { t } from "@/src/shared/lib/locale-text";

type ProjectItem = {
  name: string;
  url: string;
  stack: string;
  description_en: string;
  description_ru: string;
  description_ro: string;
};

type Props = {
  data: { items: readonly ProjectItem[] };
  title: string;
  locale: Locale;
};

export function ProjectsBlock({ data, title, locale }: Props) {
  return (
    <SectionWrapper id="projects" title={title}>
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
              <span className="hidden print:ml-2 print:inline-block print:font-bold print:text-sky-700 print:underline">
                ({item.url})
              </span>
            </a>
          </h4>
          <p className="text-slate-400 dark:text-slate-500">
            Stack: {item.stack}
          </p>
          <p className="text-gray-900 dark:text-gray-300">
            {t(item, locale, "description")}
          </p>
        </div>
      ))}
    </SectionWrapper>
  );
}
