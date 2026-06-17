import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { ThemeProvider } from "@/src/shared/ui/ThemeProvider";
import { locales } from "@/src/shared/config";
import type { Metadata } from "next";

type Params = { locale: string };

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("title"),
    description: t("description"),
    applicationName: t("title"),
    authors: [{ name: "Dima Hinev", url: "https://hinev.cc" }],
    robots: { index: true, follow: true },
    other: {
      "theme-color": "#0369a1",
      "format-detection": "telephone=no, address=no, email=no",
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://hinev.cc/${locale}`,
      locale,
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    alternates: {
      canonical: `https://hinev.cc/${locale}`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `https://hinev.cc/${l}`]),
      ),
    },
    metadataBase: new URL("https://hinev.cc"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<Params>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://hinev.cc/#website",
            url: "https://hinev.cc",
            name: "Dima Hinev | Senior Frontend Developer",
            author: { "@id": "https://hinev.cc/#person" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "@id": `https://hinev.cc/${locale}/#webpage`,
            url: `https://hinev.cc/${locale}`,
            inLanguage: locale,
            isPartOf: { "@id": "https://hinev.cc/#website" },
            mainEntity: { "@id": "https://hinev.cc/#person" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://hinev.cc/#person",
            url: "https://hinev.cc",
            name: "Dima Hinev",
            jobTitle: "Senior Frontend Developer",
            description:
              "Senior Frontend Developer with 6+ years of experience building scalable, high-performance web applications.",
            knowsLanguage: ["en", "ru", "ro"],
            sameAs: [
              "https://t.me/hinevcc",
              "https://linkedin.com/in/hinevcc",
              "https://github.com/hinevcc",
              "https://www.youtube.com/@frontend.odyssey",
            ],
          }),
        }}
      />
      <ThemeProvider>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </ThemeProvider>
    </>
  );
}
