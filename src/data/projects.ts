import type { Project } from "../types/project";

const projects: Project[] = [
  {
    id: "ohayo-brew",
    title: "Ohayo Brew Loyalty System",
    shortDescription:
      "A full-stack customer loyalty platform built with an AI-assisted development workflow, featuring secure authentication, QR-based loyalty operations, rewards, and role-based administration.",
    description:
      "Ohayo Brew is a full-stack loyalty management system developed with an AI-assisted workflow using ChatGPT for architecture planning, implementation support, debugging, and iterative refinement. The application supports customer, staff, and administrator experiences, QR-based loyalty operations, sticker transactions, and reward redemption, while separating identity and business capabilities into dedicated ASP.NET Core APIs.",
    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "Zustand",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      ".NET 10",
      "ASP.NET Core",
      "Entity Framework Core",
      "PostgreSQL",
      "JWT / OAuth",
      "Resend",
      "Serilog",
      "Docker",
      "NUnit / Moq",
      "ChatGPT",
    ],
    highlights: [
      "Used ChatGPT as an AI-assisted development tool for architecture planning, implementation, debugging, test refinement, and iterative code review.",
      "Built customer, staff, and administrator flows with JWT authentication, Google and Facebook OAuth, OTP verification, password reset, and email verification.",
      "Implemented QR-based customer identification and loyalty workflows for sticker transactions and reward redemption.",
      "Managed client and server state with Zustand and TanStack Query, with validated forms using React Hook Form and Zod.",
      "Separated identity and loyalty/business functionality into dedicated ASP.NET Core APIs backed by Entity Framework Core and PostgreSQL.",
      "Integrated Resend for transactional email and Serilog for structured application and request logging.",
      "Containerized the Identity API and Web API with Docker for deployment.",
      "Added automated backend coverage using NUnit and Moq.",
    ],
    githubUrl: "",
    isPrivate: true,
    projectType: "private",
    liveUrl: "",
  },
  {
    id: "gerbs-electrical",
    title: "Gerb's Electrical Trading and Services",
    shortDescription:
      "A responsive business website showcasing company services, projects, products, certifications, and electrical and construction solutions.",
    description:
      "A modern business website developed for Gerb's Electrical Trading and Services using React, TypeScript, Material UI, and Vite. The website provides a centralized digital presence for the company, featuring its services, completed projects, product offerings, company credentials, and customer inquiry functionality.",
    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "Vite",
      "React Router",
      "EmailJS",
      "Framer Motion",
      "Responsive Design",
    ],
    highlights: [
      "Built a responsive and mobile-friendly company website using React and Material UI.",
      "Developed dedicated sections for company information, services, projects, products, and permits and licenses.",
      "Created product category and product detail pages using React Router.",
      "Implemented lazy-loaded product routes to improve application loading behavior.",
      "Built reusable Material UI components for consistent design across the website.",
      "Implemented customer inquiry and quotation functionality using EmailJS.",
      "Added structured metadata, Open Graph tags, and schema markup for SEO and social sharing.",
      "Configured the application for production deployment with a custom domain.",
    ],
    githubUrl: "https://github.com/mickolapuz/Gerbs-Electrical-Website",
    liveUrl: "https://www.gerbselectrical.com/",
    projectType: "public",
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
    projectType: "work",
  },
];

export default projects;
