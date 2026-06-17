import { type CvBlock } from "@/src/entities/cv/model";
import { Locale } from "@/src/shared/config";
import { CompetenciesBlock } from "./CompetenciesBlock";
import { ExperienceBlock } from "./ExperienceBlock";
import { SkillsBlock } from "./SkillsBlock";
import { CertificatesBlock } from "./CertificatesBlock";
import { LanguagesBlock } from "./LanguagesBlock";
import { EducationBlock } from "./EducationBlock";
import { ProjectsBlock } from "./ProjectsBlock";
import { PersonalProjectsBlock } from "./PersonalProjectsBlock";

type Props = {
  block: CvBlock;
  locale: Locale;
  sectionTitles: Record<string, string>;
};

export function CvBlockRenderer({ block, locale, sectionTitles }: Props) {
  switch (block.discriminant) {
    case "competencies":
      return (
        <CompetenciesBlock
          data={block.value}
          title={sectionTitles.competencies}
          locale={locale}
        />
      );
    case "experience":
      return (
        <ExperienceBlock
          data={block.value}
          title={sectionTitles.experience}
          locale={locale}
        />
      );
    case "skills":
      return (
        <SkillsBlock
          data={block.value}
          title={sectionTitles.skills}
          locale={locale}
        />
      );
    case "certificates":
      return (
        <CertificatesBlock
          data={block.value}
          title={sectionTitles.certificates}
          locale={locale}
        />
      );
    case "languages":
      return (
        <LanguagesBlock
          data={block.value}
          title={sectionTitles.languages}
          locale={locale}
        />
      );
    case "education":
      return (
        <EducationBlock
          data={block.value}
          title={sectionTitles.education ?? sectionTitles.competencies}
          locale={locale}
        />
      );
    case "projects":
      return (
        <ProjectsBlock
          data={block.value}
          title={sectionTitles.projects}
          locale={locale}
        />
      );
    case "personalProjects":
      return (
        <PersonalProjectsBlock
          data={block.value}
          title={sectionTitles.personalProjects}
          locale={locale}
        />
      );
    default:
      return null;
  }
}
