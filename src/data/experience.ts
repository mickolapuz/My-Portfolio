export interface ExperienceItem {
  title: string;
  period: string;
  current: boolean;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experienceCompany = "Citco";

const experienceItems: ExperienceItem[] = [
  {
    title: "Mid Developer",
    period: "2025–Present",
    current: true,
    description:
      "Developing contract management solutions and business process automations.",
    highlights: [
      "Work on an enterprise contract management system using .NET.",
      "Create UiPath Apps and automation processes to support business workflows.",
      "Build a loader application to support contract management operations.",
    ],
    technologies: [".NET", "UiPath Apps", "UiPath Process"],
  },
  {
    title: "Junior Developer",
    period: "2023–2025",
    current: false,
    description:
      "Contributed to four projects, including two built from the ground up, across the full application stack.",
    highlights: [
      "Delivered tasks ranging from straightforward changes to complex functionality across frontend, backend, and database layers.",
      "Developed full-stack features using React, .NET, and SQL.",
      "Performed QA testing and manual application deployments in IIS.",
    ],
    technologies: ["React", ".NET", "SQL", "IIS"],
  },
];

export default experienceItems;
