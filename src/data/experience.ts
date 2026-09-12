export interface ExperienceItem {
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experienceCompany = "Citco";

const experienceItems: ExperienceItem[] = [
  {
    title: "Software Developer",
    description:
      "Experience across full-stack application development and enterprise business automation, contributing to business applications, APIs, data integrations, and automated workflows.",
    highlights: [
      "Developed and maintained .NET applications and REST API integrations.",
      "Built responsive frontend applications and internal business tools.",
      "Worked with SQL databases and application data processing.",
      "Developed UiPath Apps and automated business workflows.",
      "Implemented application logging, validation, error handling, and production support.",
      "Contributed to projects ranging from new application development to enterprise process automation.",
    ],
    technologies: [
      "React",
      ".NET",
      "C#",
      "SQL",
      "REST APIs",
      "UiPath",
      "UiPath Apps",
    ],
  },
];

export default experienceItems;
