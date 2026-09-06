export interface ExperienceItem {
  title: string;
  type: string;
  description: string;
  highlights: string[];
}

const experienceItems: ExperienceItem[] = [
  {
    title: "Software & RPA Development",
    type: "Professional Experience",
    description:
      "Developing business applications, automation workflows, API integrations, and supporting enterprise software processes.",
    highlights: [
      ".NET application development",
      "REST API integration",
      "UiPath automation development",
      "UiPath Apps development",
      "UiPath Orchestrator",
      "Business workflow automation",
      "Application deployment and support",
      "Logging and error handling",
    ],
  },
  {
    title: "Full-Stack Application Development",
    type: "Project Experience",
    description:
      "Designing and developing full-stack applications using React, TypeScript, Material UI, .NET, and relational databases.",
    highlights: [
      "React and TypeScript frontend development",
      "Material UI component development",
      ".NET Web API development",
      "Authentication and authorization",
      "Entity Framework Core",
      "SQL Server and PostgreSQL",
      "Responsive application design",
      "Git-based development workflows",
    ],
  },
];

export default experienceItems;
