import { useState } from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Box, Button, Container, Typography } from "@mui/material";
import ProjectDialog from "../components/projects/ProjectDialog";
import projects from "../data/projects";
import type { Project } from "../types/project";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <Box
        component="section"
        id="projects"
        aria-labelledby="projects-title"
        sx={{ py: { xs: 10, md: 14 }, bgcolor: "background.paper" }}
      >
        <Container maxWidth="lg">
          <Box sx={{ mb: { xs: 5, md: 7 }, maxWidth: 720 }}>
            <Typography
              variant="overline"
              sx={{
                display: "block",
                mb: 1.5,
                color: "primary.main",
                fontWeight: 700,
                letterSpacing: "0.14em",
              }}
            >
              PROJECTS
            </Typography>
            <Typography
              component="h2"
              id="projects-title"
              variant="h2"
              sx={{ mb: 2, letterSpacing: "-0.03em" }}
            >
              Selected work and applications.
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              Full-stack applications, business websites, and automation.
              Explore the work and the details behind it.
            </Typography>
          </Box>

          <Box component="ol" sx={{ m: 0, p: 0, listStyle: "none" }}>
            {projects.map((project, index) => (
              <Box
                component="li"
                key={project.id}
                sx={{
                  py: { xs: 3.5, md: 5 },
                  borderTop: "1px solid",
                  borderColor: "divider",
                  "&:last-child": { borderBottom: "1px solid", borderColor: "divider" },
                }}
              >
                <Box
                  component="article"
                  aria-labelledby={`project-title-${project.id}`}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "minmax(0, 0.65fr) minmax(0, 1.35fr)" },
                    gap: { xs: 2.5, md: 8 },
                  }}
                >
                  <Box sx={{ minWidth: 0 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1.5 }}>
                      <Typography
                        aria-hidden="true"
                        variant="body2"
                        sx={{ color: "primary.main", fontWeight: 700, fontVariantNumeric: "tabular-nums", letterSpacing: "0.08em" }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </Typography>
                      {project.isPrivate && (
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "text.secondary" }}>
                          <LockOutlinedIcon sx={{ fontSize: 14 }} />
                          <Typography variant="caption">Private project</Typography>
                        </Box>
                      )}
                    </Box>
                    <Typography
                      component="h3"
                      id={`project-title-${project.id}`}
                      variant="h5"
                      sx={{ fontWeight: 700, lineHeight: 1.4, letterSpacing: "-0.02em", overflowWrap: "anywhere" }}
                    >
                      {project.title}
                    </Typography>
                  </Box>

                  <Box sx={{ minWidth: 0 }}>
                    <Typography sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2 }}>
                      {project.shortDescription}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, lineHeight: 1.9, mb: 2 }}>
                      {project.technologies.join(" · ")}
                    </Typography>
                    <Button
                      onClick={() => setSelectedProject(project)}
                      aria-label={`View project: ${project.title}`}
                      aria-haspopup="dialog"
                      endIcon={<ArrowForwardRoundedIcon />}
                      sx={{
                        px: 0,
                        minHeight: 44,
                        borderRadius: 0,
                        borderBottom: "1px solid transparent",
                        "&:hover": { bgcolor: "transparent", borderBottomColor: "primary.main" },
                        "&:focus-visible": { outline: "2px solid", outlineColor: "primary.main", outlineOffset: 4 },
                      }}
                    >
                      View project
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
      <ProjectDialog
        project={selectedProject}
        open={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default ProjectsSection;
