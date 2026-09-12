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
      "A production business website and multi-brand product catalog with responsive navigation, detailed product routes, quotation requests, and SEO-focused metadata.",
    description:
      "A production website developed for Gerb's Electrical Trading and Services using React, TypeScript, Material UI, Vite, and React Router. The application combines a corporate website with multi-brand safety and security product catalogs, reusable product detail pages, project and service showcases, company credentials, and an EmailJS-powered quotation workflow, deployed on Vercel under a custom domain.",
    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "Vite",
      "React Router",
      "EmailJS",
      "Vercel",
    ],
    highlights: [
      "Built a responsive and mobile-friendly corporate website with reusable Material UI components and dedicated mobile navigation.",
      "Created multi-brand safety and security product catalogs and reusable product detail experiences for Garrett, Hanwha Vision, HID, Safeway System, and Dahua.",
      "Implemented lazy-loaded product and product-detail routes with React Router to keep navigation structured and application loading efficient.",
      "Developed dedicated sections for company information, industrial, commercial, and residential projects, products, services, design, and permits and licenses.",
      "Integrated an EmailJS-powered quotation and project inquiry form with submission feedback and error handling.",
      "Implemented SEO metadata including canonical URLs, Open Graph and Twitter tags, and LocalBusiness JSON-LD structured data.",
      "Configured production deployment on Vercel with SPA routing support and a custom domain.",
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
