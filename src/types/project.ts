export type ProjectType = "work" | "private" | "public";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  isPrivate?: boolean;
  projectType: ProjectType;
}
