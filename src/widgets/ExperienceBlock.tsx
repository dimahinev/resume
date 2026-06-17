import type { Node } from "@markdoc/markdoc";
import { SectionWrapper } from "./SectionWrapper";
import { Locale } from "@/src/shared/config";
import { MarkdownRenderer } from "@/src/shared/ui/MarkdownRenderer";

type MarkdocField = { node: Node };

type ExperienceItem = {
  title_en: string;
  title_ru: string;
  title_ro: string;
  company: string;
  companyUrl: string;
  period: string;
  description_en: MarkdocField;
  description_ru: MarkdocField;
  description_ro: MarkdocField;
  achievements_en: MarkdocField;
  achievements_ru: MarkdocField;
  achievements_ro: MarkdocField;
};

type Props = {
  data: { items: readonly ExperienceItem[] };
  title: string;
  locale: Locale;
};

export function ExperienceBlock({ data, title, locale }: Props) {
  return (
    <SectionWrapper id="experience" title={title} fullWidth>
      <div className="flex flex-col print:gap-0">
        {data.items.map((item, i) => (
          <div
            key={i}
            className="relative flex flex-col gap-4 py-8 md:flex-row md:gap-8 print:flex-col print:gap-2 print:py-2 not-last:border-b not-last:pb-8 not-last:border-sky-200 dark:not-last:border-sky-800 [&_a]:link-underline"
          >
            <div className="top-4 flex h-fit basis-1/4 flex-col md:sticky lg:basis-1/3 print:basis-full">
              <div className="flex flex-col gap-1 print:w-full print:flex-row print:items-baseline print:justify-start print:gap-2">
                <h3 className="pb-2 font-mono text-lg font-bold dark:text-gray-100 print:pb-0">
                  {item[`title_${locale}`] || item.title_en}
                </h3>
                <h4 className="font-mono text-sm font-bold print:pb-0">
                  <a
                    className="link-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.companyUrl}
                  >
                    {item.company}
                  </a>
                </h4>
                <p className="order-2 font-mono text-sm dark:text-gray-400 print:order-3">
                  {item.period}
                </p>
              </div>
              <MarkdownRenderer
                node={
                  (item[`description_${locale}`] || item.description_en).node
                }
                className="text-sm italic text-gray-500 dark:text-gray-400"
              />
            </div>
            <div className="flex basis-3/4 flex-col gap-4 lg:basis-2/3 print:basis-full print:gap-2">
              <MarkdownRenderer
                node={
                  (item[`achievements_${locale}`] || item.achievements_en).node
                }
                className="text-gray-900 dark:text-gray-300 [&_ul]:list-square [&_ul]:ml-4 [&_ul]:marker:text-sm [&_ul]:marker:text-sky-300 [&_ul]:space-y-2 print:[&_ul]:space-y-1"
              />
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
