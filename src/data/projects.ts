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
    id: "icertis-data-validation-import",
    title: "Icertis Data Validation & Import Automation",
    shortDescription:
      "A .NET console application for validating fund and reference data, reporting missing or invalid records, and transforming validated data into an Icertis-ready import format.",
    description:
      "A support-operated .NET console application developed to prepare fund and reference data for Icertis. The application reads the required source files from a configured working location, including fund data and supporting reference datasets, validates fund records against required Icertis data, produces reports for invalid or non-existing records, and transforms valid records into the structure required for downstream Icertis bulk import.",
    technologies: [
      "C#",
      ".NET",
      "File Processing",
      "Data Validation",
      "Data Transformation",
      "Reporting",
    ],
    highlights: [
      "Built a .NET console application that can be manually executed by the support team without modifying source code.",
      "Reads fund data together with supporting reference datasets such as client group and administrative records from the configured working location.",
      "Validates fund records against required Icertis reference data before they are prepared for import.",
      "Generates reports identifying invalid, missing, or non-existing records that require review before processing continues.",
      "Transforms validated fund data into an Icertis-compatible bulk-import structure.",
      "Separates validation, reporting, and transformation steps to make the processing flow easier to support and troubleshoot.",
    ],
    isPrivate: true,
    projectType: "work",
  },
  {
    id: "icertis-contract-request-automation",
    title: "Icertis Contract Request Automation",
    shortDescription:
      "A UiPath Apps and RPA solution for capturing engagement-letter requests, queueing submissions, generating bulk-upload files, and routing output to the appropriate business teams.",
    description:
      "An enterprise contract-request solution built with UiPath Apps and supporting UiPath automation processes. The web application provides a dashboard for submitted requests and a Contract Request Form whose required information changes according to the selected engagement letter type. Submitted requests are queued for robotic processing, where the captured input is compiled into the required bulk-upload format, shared through UiPath storage, and distributed to the appropriate team based on the selected letter type.",
    technologies: [
      "UiPath Apps",
      "UiPath",
      "UiPath Orchestrator",
      "Queues",
      "Data Fabric",
      "Storage Buckets",
      "SMTP",
      "RPA",
    ],
    highlights: [
      "Built a UiPath Apps web application with a request dashboard and a dedicated Contract Request Form.",
      "Implemented engagement-letter-specific form behavior so users provide the information required for the selected letter type.",
      "Queues submitted requests so the user-facing application is separated from downstream robotic processing.",
      "Developed supporting UiPath processes used by the application for entity preparation, request processing, and bulk-upload generation.",
      "Compiles submitted form data into files used by downstream Icertis bulk-upload workflows.",
      "Uses UiPath Storage Buckets to exchange generated request files between the application and automation processes.",
      "Uses UiPath Data Fabric to persist and manage application data used by the request workflow.",
      "Routes generated output through SMTP to the appropriate distribution list based on the selected engagement letter type.",
    ],
    isPrivate: true,
    projectType: "work",
  },
];

export default projects;
