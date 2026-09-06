export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description:
      "Building responsive and maintainable user interfaces for modern web applications.",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Material UI",
      "Vite",
      "HTML",
      "CSS",
      "Zustand",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description:
      "Developing APIs, application services, and backend systems using the .NET ecosystem.",
    skills: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "REST APIs",
      "Entity Framework Core",
      "Dependency Injection",
      "Serilog",
    ],
  },
  {
    id: "database",
    title: "Database",
    description:
      "Working with relational databases and application persistence layers.",
    skills: ["SQL", "SQL Server", "PostgreSQL", "Entity Framework Core"],
  },
  {
    id: "automation",
    title: "Automation & Tools",
    description:
      "Creating automated workflows and supporting application development and deployment.",
    skills: [
      "UiPath",
      "UiPath Apps",
      "UiPath Orchestrator",
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "Kubernetes",
    ],
  },
];

export default skillCategories;
