import { SectionWrapper } from "./SectionWrapper";
import { Locale } from "@/src/shared/config";
import { t } from "@/src/shared/lib/locale-text";

type CertificateItem = {
  year: string;
  name_en: string;
  name_ru: string;
  name_ro: string;
  provider: string;
  url: string;
};

type Props = {
  data: { items: readonly CertificateItem[] };
  title: string;
  locale: Locale;
};

export function CertificatesBlock({ data, title, locale }: Props) {
  return (
    <SectionWrapper id="certificates" title={title}>
      {data.items.map((item, i) => (
        <div key={i} className="flex flex-col">
          <div className="flex-inline">
            {item.url ? (
              <a
                className="link-underline"
                target="_blank"
                rel="noopener noreferrer"
                href={item.url}
              >
                {t(item, locale, "name")}
              </a>
            ) : (
              <span className="font-bold dark:text-gray-200">
                {t(item, locale, "name")}
              </span>
            )}{" "}
            <span className="text-gray-500 dark:text-gray-400">
              — {item.provider}
            </span>{" "}
            <span className="text-gray-600 dark:text-gray-500">
              ({item.year})
            </span>
          </div>
        </div>
      ))}
    </SectionWrapper>
  );
}
