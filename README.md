# My Portfolio

Personal portfolio website for **Micko Lapuz**, a software developer. This repository contains the React application that presents his background, technical skills, selected projects, professional experience, and contact information.

## Features

- Single-page layout with Hero, About, Skills, Projects, Experience, and Contact sections.
- Responsive layouts with dedicated mobile navigation.
- Project cards that open detailed project dialogs.
- Resume link backed by a PDF in `public/resume/`.
- Configurable email, GitHub, and LinkedIn links.
- Contact form that opens the visitor's email application with a prefilled message through `mailto:`; it does not send email through a backend.
- Shared Material UI theme with Inter typography and smooth section scrolling.

## Tech stack

- **React 19** and **TypeScript** for the application.
- **Vite** for development and production builds.
- **Material UI**, **Material Icons**, and **Emotion** for components and styling.
- **ESLint** for code linting.

## Getting started

Install Node.js and npm compatible with the Vite version in `package.json`, then clone the repository and install its locked dependencies:

```sh
git clone https://github.com/mickolapuz/My-Portfolio.git
cd My-Portfolio
npm ci
```

Copy `.env.example` to `.env` in the project root and set the contact details:

```dotenv
VITE_CONTACT_EMAIL=you@example.com
VITE_GITHUB_URL=https://github.com/your-username
VITE_LINKEDIN_URL=https://www.linkedin.com/in/your-username
```

These values are read by `src/data/profile.ts`. If omitted, they default to empty strings. The contact form requires `VITE_CONTACT_EMAIL` to open an email draft. Values prefixed with `VITE_` are included in the browser application, so use only public contact information.

Start the development server:

```sh
npm run dev
```

Open the local URL printed in the terminal. Restart the development server after changing environment variables.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Run the TypeScript build checks and generate a production build. |
| `npm run preview` | Preview the production build locally after building. |
| `npm run lint` | Run ESLint on the repository. |

## Repository structure

```text
public/
  resume/             Resume PDF
src/
  components/
    layout/           Header, navigation, mobile drawer, and footer
    projects/         Project cards and detail dialog
  data/               Profile, projects, skills, and experience content
  sections/           Main portfolio sections
  theme/              Shared Material UI theme
  types/              Project type definitions
  App.tsx             Page composition
  main.tsx            Application entry point
.env.example          Example public contact configuration
```

## Updating the portfolio

- Edit `src/data/profile.ts` for the name, role, and resume path.
- Edit `src/data/projects.ts`, `src/data/skills.ts`, and `src/data/experience.ts` for the corresponding portfolio content.
- Update section copy and layouts in `src/sections/`.
- Adjust colors, typography, and component defaults in `src/theme/theme.ts`.
- Replace `public/resume/Micko-Lapuz-Resume.pdf` to update the resume, or change `resumeUrl` in the profile data if the filename changes.

## Production build

Run `npm run build` to generate the static site in `dist/`. Configure the public contact environment variables before building, then publish `dist/` with a static hosting service.
