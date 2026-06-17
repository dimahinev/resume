import type { Node } from "@markdoc/markdoc";
import { SectionWrapper } from "./SectionWrapper";
import { Locale } from "@/src/shared/config";
import { MarkdownRenderer } from "@/src/shared/ui/MarkdownRenderer";


type MarkdocField = { node: Node };

type EducationItem = {
  institution_en: string;
  institution_ru: string;
  institution_ro: string;
  degree_en: MarkdocField;
  degree_ru: MarkdocField;
  degree_ro: MarkdocField;
  period: string;
  url: string;
};

type Props = {
  data: { items: readonly EducationItem[] };
  title: string;
  locale: Locale;
};

export function EducationBlock({ data, title, locale }: Props) {
  return (
    <SectionWrapper id="education" title={title}>
      {data.items.map((item, i) => (
        <div key={i} className="flex flex-col">
          <h4 className="font-mono text-sm font-bold dark:text-gray-200 print:pb-0">
            {item.url ? (
              <a
                className="link-underline"
                target="_blank"
                rel="noopener noreferrer"
                href={item.url}
              >
                {item[`institution_${locale}` as keyof typeof item] as string || item.institution_en} ({item.period})
              </a>
            ) : (
              <span>
                {item[`institution_${locale}` as keyof typeof item] as string || item.institution_en} ({item.period})
              </span>
            )}
          </h4>
          <MarkdownRenderer
            node={(item[`degree_${locale}`] || item.degree_en).node}
            className="text-gray-900 dark:text-gray-300 [&_ul]:list-square [&_ul]:ml-4 [&_ul]:marker:text-sm [&_ul]:marker:text-sky-300"
          />
        </div>
      ))}
    </SectionWrapper>
  );
}
