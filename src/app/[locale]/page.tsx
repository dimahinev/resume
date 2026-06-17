import { getTranslations, setRequestLocale } from "next-intl/server";
import { getCvData } from "@/src/entities/cv/model";
import { Locale } from "@/src/shared/config";
import {
  TelegramIcon,
  LinkedInIcon,
  GitHubIcon,
  YouTubeIcon,
} from "@/src/shared/icons";
import { ThemeToggle } from "@/src/features/theme-toggle/ui/ThemeToggle";
import { LanguageSwitcher } from "@/src/features/language-switcher/ui/LanguageSwitcher";
import { CvBlockRenderer } from "@/src/widgets";

type Props = { params: Promise<{ locale: string }> };

export default async function CvPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const cv = await getCvData();
  const t = await getTranslations({ locale, namespace: "sections" });
  const tIntro = await getTranslations({ locale, namespace: "intro" });

  const sectionTitles = {
    competencies: t("competencies"),
    experience: t("experience"),
    skills: t("skills"),
    certificates: t("certificates"),
    languages: t("languages"),
    education: t("education"),
    projects: t("projects"),
    personalProjects: t("personalProjects"),
  };

  return (
    <>
      <header className="relative container mx-auto flex max-w-6xl flex-row justify-end gap-2 print:hidden">
        <div className="flex gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto mt-24 mb-24 flex max-w-6xl flex-col divide-y divide-sky-200 px-4 dark:divide-sky-800 sm:px-6 lg:px-8 print:mt-0 print:mb-0 print:divide-y-0 print:p-0">
        {/* Intro Section */}
        <section data-cv-block="intro">
          <div className="flex flex-col justify-between gap-4 pb-8 lg:flex-row lg:gap-8 print:flex-row print:gap-2 print:pb-2">
            <div className="flex flex-col gap-2 print:hidden">
              <h1 className="mb-0 font-mono text-2xl font-bold dark:text-gray-100">
                {tIntro("greeting")}{" "}
                <span className="inline-block">
                  {tIntro("namePrefix")}{" "}
                  <span className="inline-block">{tIntro("name")}.</span> 👨‍💻
                </span>
              </h1>
              <h3 className="mt-0 font-mono text-lg font-bold dark:text-gray-200">
                {tIntro("role")}{" "}
                <span className="inline-block">
                  {tIntro("basedIn")} {tIntro("location")}.
                </span>
              </h3>
            </div>

            <div className="hidden font-mono font-bold print:flex print:flex-col">
              <h1 className="mb-2 text-xl">{cv.name}</h1>
              <h3 className="mt-0 flex flex-col text-base">
                <span>{cv.role}</span>
                <span>{cv.location}</span>
              </h3>
            </div>

            <div className="flex min-w-60 flex-col gap-2 align-middle print:min-w-[24rem] print:gap-0">
              <div className="m-0 flex p-0">
                <span className="w-20 font-mono text-sm leading-6 font-bold uppercase dark:text-gray-300">
                  {tIntro("email")}
                </span>
                <a
                  className="leading-6 font-bold text-sky-700 underline hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300"
                  href={`mailto:${cv.email}`}
                >
                  {cv.email}
                </a>
              </div>
              {cv.phone && (
                <div className="m-0 flex p-0">
                  <span className="w-20 font-mono text-sm leading-6 font-bold uppercase dark:text-gray-300">
                    {tIntro("phone")}
                  </span>
                  <a
                    className="leading-6 font-bold text-sky-700 underline hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300"
                    href={`tel:${cv.phone}`}
                  >
                    {cv.phone}
                  </a>
                </div>
              )}

              <div className="m-0 flex p-0">
                <span className="w-20 font-mono text-sm leading-6 font-bold uppercase dark:text-gray-300">
                  {tIntro("links")}
                </span>
                <span className="flex gap-2 print:flex-col print:gap-0">
                  {cv.telegram && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Telegram"
                      className="flex h-6 w-6 fill-sky-700 text-sky-700 transition hover:fill-sky-800 dark:fill-sky-400 dark:text-sky-400 print:w-full print:underline"
                      href={cv.telegram}
                    >
                      <span className="print:hidden">
                        <TelegramIcon />
                      </span>
                      <span className="hidden print:inline-block print:font-bold print:text-sky-700">
                        {cv.telegram}
                      </span>
                    </a>
                  )}
                  {cv.linkedin && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="flex h-6 w-6 fill-sky-700 text-sky-700 transition hover:fill-sky-800 dark:fill-sky-400 dark:text-sky-400 print:w-full print:underline"
                      href={cv.linkedin}
                    >
                      <span className="print:hidden">
                        <LinkedInIcon />
                      </span>
                      <span className="hidden print:inline-block print:font-bold print:text-sky-700">
                        {cv.linkedin}
                      </span>
                    </a>
                  )}
                  {cv.github && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="flex h-6 w-6 fill-sky-700 text-sky-700 transition hover:fill-sky-800 dark:fill-sky-400 dark:text-sky-400 print:w-full print:underline"
                      href={cv.github}
                    >
                      <span className="print:hidden">
                        <GitHubIcon />
                      </span>
                      <span className="hidden print:inline-block print:font-bold print:text-sky-700">
                        {cv.github}
                      </span>
                    </a>
                  )}
                  {cv.youtube && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                      className="flex h-6 w-6 fill-sky-700 text-sky-700 transition hover:fill-sky-800 dark:fill-sky-400 dark:text-sky-400 print:w-full print:underline"
                      href={cv.youtube}
                    >
                      <span className="print:hidden">
                        <YouTubeIcon />
                      </span>
                      <span className="hidden print:inline-block print:font-bold print:text-sky-700">
                        {cv.youtube}
                      </span>
                    </a>
                  )}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic blocks from Keystatic — order is CMS-controlled */}
        {cv.blocks.map((block, i) => (
          <CvBlockRenderer
            key={`${block.discriminant}-${i}`}
            block={block}
            locale={locale as Locale}
            sectionTitles={sectionTitles}
          />
        ))}
      </main>
    </>
  );
}
