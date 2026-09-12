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
