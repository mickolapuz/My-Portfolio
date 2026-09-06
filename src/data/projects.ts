import type { Project } from "../types/project";

const projects: Project[] = [
  {
    id: "ohayo-brew",
    title: "Ohayo Brew Loyalty System",
    shortDescription:
      "A full-stack customer loyalty platform with authentication, rewards, role-based access, and administrative tools.",
    description:
      "Ohayo Brew is a full-stack loyalty management system designed to manage customer accounts, loyalty cards, sticker transactions, rewards, and administrative operations. The system separates authentication responsibilities from business functionality through dedicated APIs.",
    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      ".NET",
      "PostgreSQL",
      "JWT",
      "OAuth",
      "REST API",
    ],
    highlights: [
      "Implemented customer, staff, and administrator roles.",
      "Built JWT-based authentication and role-based authorization.",
      "Implemented Google and Facebook external authentication.",
      "Added OTP verification for administrative and staff authentication.",
      "Created customer loyalty cards, sticker transactions, and reward redemption workflows.",
      "Separated authentication and business functionality into dedicated APIs.",
      "Implemented automated backend tests.",
    ],
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: "employee-management",
    title: "Employee Management System",
    shortDescription:
      "A full-stack CRUD application for managing employees, departments, offices, and organizational roles.",
    description:
      "The Employee Management System is a full-stack application that provides centralized management of employees and organizational information. It includes dedicated management interfaces for employees, departments, roles, and offices.",
    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      ".NET Web API",
      "Entity Framework Core",
      "SQL Server",
      "REST API",
    ],
    highlights: [
      "Built employee creation, editing, searching, and management functionality.",
      "Created dedicated management modules for departments, roles, and offices.",
      "Implemented a RESTful .NET Web API.",
      "Used Entity Framework Core for data access.",
      "Implemented relational validation for organizational records.",
      "Built a responsive Material UI frontend.",
      "Implemented collapsible application navigation.",
    ],
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: "enterprise-contract-automation",
    title: "Enterprise Contract Automation",
    shortDescription:
      "An enterprise automation solution for validating, transforming, and processing contract-related business data.",
    description:
      "An enterprise automation solution designed to process master data, perform validation and transformation, interact with external APIs, and support contract-related business workflows. Project information is intentionally generalized to protect proprietary business information.",
    technologies: [
      ".NET",
      "C#",
      "REST APIs",
      "UiPath",
      "UiPath Apps",
      "Docker",
      "Kubernetes",
      "Serilog",
    ],
    highlights: [
      "Developed automated data validation and transformation workflows.",
      "Integrated external business systems through REST APIs.",
      "Created reusable .NET processing components.",
      "Implemented application logging and error handling.",
      "Worked with UiPath Apps and UiPath Orchestrator.",
      "Designed automation workflows for enterprise business processes.",
      "Prepared application components for containerized deployment.",
    ],
    isPrivate: true,
  },
  {
    id: "gerbs-corporate-website",
    title: "Corporate Website",
    shortDescription:
      "A responsive corporate website for showcasing services, products, projects, company information, and quotation requests.",
    description:
      "A modern single-page corporate website developed using React, TypeScript, Material UI, and Vite. The application provides company information, services, product categories, completed projects, documentation previews, and contact functionality.",
    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "Vite",
      "EmailJS",
      "Responsive Design",
    ],
    highlights: [
      "Built a responsive single-page application.",
      "Created reusable Material UI components.",
      "Implemented responsive desktop and mobile navigation.",
      "Developed product and project showcase sections.",
      "Added company documentation previews.",
      "Implemented quotation and contact functionality.",
      "Optimized page structure for accessibility and SEO.",
    ],
    githubUrl: "",
    liveUrl: "",
  },
];

export default projects;
