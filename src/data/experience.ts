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
      "Building contract management solutions and business workflow automation.",
    highlights: [
      ".NET development and API integrations.",
      "UiPath apps, automation processes, and data-loading workflows.",
      "Application support, logging, and error handling.",
    ],
    technologies: [".NET", "UiPath Apps", "UiPath Process"],
  },
  {
    title: "Junior Developer",
    period: "2023–2025",
    current: false,
    description:
      "Contributed to four full-stack projects, including two built from the ground up.",
    highlights: [
      "Responsive frontends, backend APIs, and SQL database development.",
      "Delivered simple to complex features across the application stack.",
      "QA testing and manual IIS deployments.",
    ],
    technologies: ["React", ".NET", "SQL", "IIS"],
  },
];

export default experienceItems;
