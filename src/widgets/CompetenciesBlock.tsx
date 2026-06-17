import type { Node } from "@markdoc/markdoc";
import { SectionWrapper } from "./SectionWrapper";
import { Locale } from "@/src/shared/config";
import { MarkdownRenderer } from "@/src/shared/ui/MarkdownRenderer";

type MarkdocField = { node: Node };

type Props = {
  data: { text_en: MarkdocField; text_ru: MarkdocField; text_ro: MarkdocField };
  title: string;
  locale: Locale;
};

export function CompetenciesBlock({ data, title, locale }: Props) {
  const field = data[`text_${locale}`] || data.text_en;

  return (
    <SectionWrapper id="competencies" title={title}>
      <MarkdownRenderer
        node={field.node}
        className="text-gray-900 dark:text-gray-300"
      />
    </SectionWrapper>
  );
}
