import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectDialog from "../components/projects/ProjectDialog";
import projects from "../data/projects";
import type { Project } from "../types/project";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <Box
        component="section"
        id="projects"
        sx={{
          py: {
            xs: 10,
            md: 14,
          },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              mb: {
                xs: 5,
                md: 7,
              },
              maxWidth: 720,
            }}
          >
            <Typography
              variant="overline"
              sx={{
                display: "block",
                mb: 1.5,
                color: "primary.main",
                fontWeight: 700,
                fontSize: {
                  xs: "0.8rem",
                  md: "0.875rem",
                },
                letterSpacing: "0.14em",
              }}
            >
              PROJECTS
            </Typography>

            <Typography
              component="h2"
              variant="h2"
              sx={{
                mb: 2,
                color: "text.primary",
                letterSpacing: "-0.03em",
              }}
            >
              Selected work and applications.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: {
                  xs: "1rem",
                  md: "1.05rem",
                },
                lineHeight: 1.8,
              }}
            >
              A selection of full-stack applications, automation solutions,
              APIs, and business systems I have worked on.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, 1fr)",
              },
              gap: 2.5,
            }}
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewProject={handleOpenProject}
              />
            ))}
          </Box>
        </Container>
      </Box>

      <ProjectDialog
        project={selectedProject}
        open={Boolean(selectedProject)}
        onClose={handleCloseProject}
      />
    </>
  );
};

export default ProjectsSection;
