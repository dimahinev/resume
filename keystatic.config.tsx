import { config, fields, singleton } from "@keystatic/core";

export const showAdminUI = process.env.NODE_ENV === "development";

export default config({
  storage: {
    kind: "local",
  },
  singletons: {
    translations: singleton({
      label: "Translations",
      path: "content/translations",
      format: { data: "json" },
      schema: {
        meta: fields.object({
          title_en: fields.text({ label: "Title (EN)" }),
          title_ru: fields.text({ label: "Title (RU)" }),
          title_ro: fields.text({ label: "Title (RO)" }),
          description_en: fields.text({ label: "Description (EN)", multiline: true }),
          description_ru: fields.text({ label: "Description (RU)", multiline: true }),
          description_ro: fields.text({ label: "Description (RO)", multiline: true }),
        }),
        nav: fields.object({
          settings_en: fields.text({ label: "Settings (EN)" }),
          settings_ru: fields.text({ label: "Settings (RU)" }),
          settings_ro: fields.text({ label: "Settings (RO)" }),
          theme_en: fields.text({ label: "Theme (EN)" }),
          theme_ru: fields.text({ label: "Theme (RU)" }),
          theme_ro: fields.text({ label: "Theme (RO)" }),
          language_en: fields.text({ label: "Language (EN)" }),
          language_ru: fields.text({ label: "Language (RU)" }),
          language_ro: fields.text({ label: "Language (RO)" }),
          light_en: fields.text({ label: "Light (EN)" }),
          light_ru: fields.text({ label: "Light (RU)" }),
          light_ro: fields.text({ label: "Light (RO)" }),
          dark_en: fields.text({ label: "Dark (EN)" }),
          dark_ru: fields.text({ label: "Dark (RU)" }),
          dark_ro: fields.text({ label: "Dark (RO)" }),
          system_en: fields.text({ label: "System (EN)" }),
          system_ru: fields.text({ label: "System (RU)" }),
          system_ro: fields.text({ label: "System (RO)" }),
        }),
        intro: fields.object({
          greeting_en: fields.text({ label: "Greeting (EN)" }),
          greeting_ru: fields.text({ label: "Greeting (RU)" }),
          greeting_ro: fields.text({ label: "Greeting (RO)" }),
          namePrefix_en: fields.text({ label: "Name Prefix (EN)" }),
          namePrefix_ru: fields.text({ label: "Name Prefix (RU)" }),
          namePrefix_ro: fields.text({ label: "Name Prefix (RO)" }),
          name_en: fields.text({ label: "Name (EN)" }),
          name_ru: fields.text({ label: "Name (RU)" }),
          name_ro: fields.text({ label: "Name (RO)" }),
          role_en: fields.text({ label: "Role (EN)" }),
          role_ru: fields.text({ label: "Role (RU)" }),
          role_ro: fields.text({ label: "Role (RO)" }),
          location_en: fields.text({ label: "Location (EN)" }),
          location_ru: fields.text({ label: "Location (RU)" }),
          location_ro: fields.text({ label: "Location (RO)" }),
          basedIn_en: fields.text({ label: "Based In (EN)" }),
          basedIn_ru: fields.text({ label: "Based In (RU)" }),
          basedIn_ro: fields.text({ label: "Based In (RO)" }),
          email_en: fields.text({ label: "Email (EN)" }),
          email_ru: fields.text({ label: "Email (RU)" }),
          email_ro: fields.text({ label: "Email (RO)" }),
          phone_en: fields.text({ label: "Phone (EN)" }),
          phone_ru: fields.text({ label: "Phone (RU)" }),
          phone_ro: fields.text({ label: "Phone (RO)" }),
          links_en: fields.text({ label: "Links (EN)" }),
          links_ru: fields.text({ label: "Links (RU)" }),
          links_ro: fields.text({ label: "Links (RO)" }),
        }),
        sections: fields.object({
          competencies_en: fields.text({ label: "Competencies (EN)" }),
          competencies_ru: fields.text({ label: "Competencies (RU)" }),
          competencies_ro: fields.text({ label: "Competencies (RO)" }),
          experience_en: fields.text({ label: "Experience (EN)" }),
          experience_ru: fields.text({ label: "Experience (RU)" }),
          experience_ro: fields.text({ label: "Experience (RO)" }),
          skills_en: fields.text({ label: "Skills (EN)" }),
          skills_ru: fields.text({ label: "Skills (RU)" }),
          skills_ro: fields.text({ label: "Skills (RO)" }),
          certificates_en: fields.text({ label: "Certificates (EN)" }),
          certificates_ru: fields.text({ label: "Certificates (RU)" }),
          certificates_ro: fields.text({ label: "Certificates (RO)" }),
          languages_en: fields.text({ label: "Languages (EN)" }),
          languages_ru: fields.text({ label: "Languages (RU)" }),
          languages_ro: fields.text({ label: "Languages (RO)" }),
          education_en: fields.text({ label: "Education (EN)" }),
          education_ru: fields.text({ label: "Education (RU)" }),
          education_ro: fields.text({ label: "Education (RO)" }),
          projects_en: fields.text({ label: "Projects (EN)" }),
          projects_ru: fields.text({ label: "Projects (RU)" }),
          projects_ro: fields.text({ label: "Projects (RO)" }),
          personalProjects_en: fields.text({ label: "Personal Projects (EN)" }),
          personalProjects_ru: fields.text({ label: "Personal Projects (RU)" }),
          personalProjects_ro: fields.text({ label: "Personal Projects (RO)" }),
        }),
      },
    }),
    cv: singleton({
      label: "CV",
      path: "content/cv",
      format: { data: "json" },
      schema: {
        name: fields.text({ label: "Name" }),
        role: fields.text({ label: "Role" }),
        location: fields.text({ label: "Location" }),
        email: fields.text({ label: "Email" }),
        phone: fields.text({ label: "Phone" }),
        telegram: fields.text({ label: "Telegram URL" }),
        linkedin: fields.text({ label: "LinkedIn URL" }),
        github: fields.text({ label: "GitHub URL" }),
        youtube: fields.text({ label: "YouTube URL" }),
        blocks: fields.blocks(
          {
            competencies: {
              label: "Key Competencies",
              schema: fields.object({
                text_en: fields.markdoc.inline({ label: "Text (EN)" }),
                text_ru: fields.markdoc.inline({ label: "Text (RU)" }),
                text_ro: fields.markdoc.inline({ label: "Text (RO)" }),
              }),
            },
            experience: {
              label: "Experience",
              schema: fields.object({
                items: fields.array(
                  fields.object({
                    title_en: fields.text({ label: "Job Title (EN)" }),
                    title_ru: fields.text({ label: "Job Title (RU)" }),
                    title_ro: fields.text({ label: "Job Title (RO)" }),
                    company: fields.text({ label: "Company" }),
                    companyUrl: fields.text({ label: "Company URL" }),
                    period: fields.text({ label: "Period" }),
                    description_en: fields.markdoc.inline({
                      label: "Description (EN)",
                    }),
                    description_ru: fields.markdoc.inline({
                      label: "Description (RU)",
                    }),
                    description_ro: fields.markdoc.inline({
                      label: "Description (RO)",
                    }),
                    achievements_en: fields.markdoc.inline({
                      label: "Achievements (EN)",
                    }),
                    achievements_ru: fields.markdoc.inline({
                      label: "Achievements (RU)",
                    }),
                    achievements_ro: fields.markdoc.inline({
                      label: "Achievements (RO)",
                    }),
                  }),
                  {
                    label: "Experience Items",
                    itemLabel: (props) => props.fields.company.value || "Job",
                  }
                ),
              }),
            },
            skills: {
              label: "Skills",
              schema: fields.object({
                categories: fields.array(
                  fields.object({
                    name_en: fields.text({ label: "Category Name (EN)" }),
                    name_ru: fields.text({ label: "Category Name (RU)" }),
                    name_ro: fields.text({ label: "Category Name (RO)" }),
                    items: fields.text({
                      label: "Skills (comma-separated)",
                      multiline: true,
                    }),
                  }),
                  {
                    label: "Skill Categories",
                    itemLabel: (props) =>
                      props.fields.name_en.value || "Category",
                  }
                ),
              }),
            },
            certificates: {
              label: "Certificates & Courses",
              schema: fields.object({
                items: fields.array(
                  fields.object({
                    year: fields.text({ label: "Year" }),
                    name_en: fields.text({ label: "Course Name (EN)" }),
                    name_ru: fields.text({ label: "Course Name (RU)" }),
                    name_ro: fields.text({ label: "Course Name (RO)" }),
                    provider: fields.text({ label: "Provider" }),
                    url: fields.text({ label: "URL" }),
                  }),
                  {
                    label: "Certificate Items",
                    itemLabel: (props) =>
                      props.fields.name_en.value || "Course",
                  }
                ),
              }),
            },
            languages: {
              label: "Languages",
              schema: fields.object({
                items: fields.array(
                  fields.object({
                    language_en: fields.text({ label: "Language (EN)" }),
                    language_ru: fields.text({ label: "Language (RU)" }),
                    language_ro: fields.text({ label: "Language (RO)" }),
                    level_en: fields.text({ label: "Level (EN)" }),
                    level_ru: fields.text({ label: "Level (RU)" }),
                    level_ro: fields.text({ label: "Level (RO)" }),
                    code: fields.text({ label: "Level Code (e.g. B2)" }),
                  }),
                  {
                    label: "Language Items",
                    itemLabel: (props) =>
                      props.fields.language_en.value || "Language",
                  }
                ),
              }),
            },
            education: {
              label: "Education",
              schema: fields.object({
                items: fields.array(
                  fields.object({
                    institution_en: fields.text({
                      label: "Institution (EN)",
                    }),
                    institution_ru: fields.text({
                      label: "Institution (RU)",
                    }),
                    institution_ro: fields.text({
                      label: "Institution (RO)",
                    }),
                    degree_en: fields.markdoc.inline({ label: "Degree (EN)" }),
                    degree_ru: fields.markdoc.inline({ label: "Degree (RU)" }),
                    degree_ro: fields.markdoc.inline({ label: "Degree (RO)" }),
                    period: fields.text({ label: "Period" }),
                    url: fields.text({ label: "URL" }),
                  }),
                  {
                    label: "Education Items",
                    itemLabel: (props) =>
                      props.fields.institution_en.value || "Institution",
                  }
                ),
              }),
            },
            projects: {
              label: "Recent Projects",
              schema: fields.object({
                items: fields.array(
                  fields.object({
                    name: fields.text({ label: "Project Name" }),
                    url: fields.text({ label: "URL" }),
                    stack: fields.text({ label: "Stack" }),
                    description_en: fields.text({
                      label: "Description (EN)",
                      multiline: true,
                    }),
                    description_ru: fields.text({
                      label: "Description (RU)",
                      multiline: true,
                    }),
                    description_ro: fields.text({
                      label: "Description (RO)",
                      multiline: true,
                    }),
                  }),
                  {
                    label: "Project Items",
                    itemLabel: (props) =>
                      props.fields.name.value || "Project",
                  }
                ),
              }),
            },
            personalProjects: {
              label: "Personal Projects",
              schema: fields.object({
                items: fields.array(
                  fields.object({
                    name: fields.text({ label: "Project Name" }),
                    url: fields.text({ label: "URL" }),
                    description_en: fields.text({
                      label: "Description (EN)",
                      multiline: true,
                    }),
                    description_ru: fields.text({
                      label: "Description (RU)",
                      multiline: true,
                    }),
                    description_ro: fields.text({
                      label: "Description (RO)",
                      multiline: true,
                    }),
                  }),
                  {
                    label: "Personal Project Items",
                    itemLabel: (props) =>
                      props.fields.name.value || "Project",
                  }
                ),
              }),
            },
          },
          { label: "CV Blocks" }
        ),
      },
    }),
  },
});
