const profile = {
  name: "Micko Lapuz",
  firstName: "Micko",
  role: "Software Developer",

  email: import.meta.env.VITE_CONTACT_EMAIL ?? "",
  githubUrl: import.meta.env.VITE_GITHUB_URL ?? "",
  linkedinUrl: import.meta.env.VITE_LINKEDIN_URL ?? "",

  resumeUrl: "/resume/Micko-Lapuz-Resume.pdf",
};

export default profile;
