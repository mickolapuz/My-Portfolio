import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import {
  Box,
  Button,
  Chip,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import type { Project, ProjectType } from "../../types/project";

interface ProjectDialogProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

const getProjectTypeMeta = (projectType: ProjectType) => {
  switch (projectType) {
    case "work":
      return {
        label: "Work Project",
        icon: WorkOutlineRoundedIcon,
      };
    case "private":
      return {
        label: "Private Project",
        icon: LockOutlinedIcon,
      };
    case "public":
      return {
        label: "Public Project",
        icon: PublicRoundedIcon,
      };
  }
};

const ProjectDialog = ({ project, open, onClose }: ProjectDialogProps) => {
  if (!project) {
    return null;
  }

  const projectTypeMeta = getProjectTypeMeta(project.projectType);
  const ProjectTypeIcon = projectTypeMeta.icon;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen
      scroll="paper"
      slotProps={{
        paper: {
          sx: {
            bgcolor: "background.paper",
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          p: 0,
          position: "sticky",
          top: 0,
          zIndex: 2,
          bgcolor: "background.paper",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            py: {
              xs: 2,
              sm: 2.5,
            },
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box sx={{ minWidth: 0 }}>
            <Typography
              component="h2"
              sx={{
                color: "text.primary",
                fontWeight: 700,
                fontSize: {
                  xs: "1.35rem",
                  sm: "1.6rem",
                  md: "1.75rem",
                },
                lineHeight: 1.25,
                letterSpacing: "-0.025em",
              }}
            >
              {project.title}
            </Typography>

            <Chip
              icon={<ProjectTypeIcon />}
              label={projectTypeMeta.label}
              size="small"
              variant="outlined"
              sx={{
                mt: 1,
                color: "text.secondary",
                borderColor: "divider",
              }}
            />
          </Box>

          <IconButton
            aria-label="Close project details"
            onClick={onClose}
            sx={{
              mt: -0.5,
              flexShrink: 0,
              color: "text.secondary",
            }}
          >
            <CloseRoundedIcon />
          </IconButton>
        </Container>
      </DialogTitle>

      <DialogContent
        sx={{
          p: 0,
          "&:first-of-type": {
            pt: 0,
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            py: {
              xs: 3,
              sm: 4,
              md: 5,
            },
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "minmax(0, 1fr)",
                md: "minmax(0, 0.9fr) minmax(0, 1.1fr)",
              },
              gap: {
                xs: 3.5,
                md: 7,
              },
              alignItems: "start",
            }}
          >
            <Box sx={{ minWidth: 0 }}>
              <Typography
                variant="overline"
                sx={{
                  display: "block",
                  mb: 0.75,
                  color: "primary.main",
                  fontWeight: 700,
                  fontSize: {
                    xs: "0.75rem",
                    sm: "0.8rem",
                  },
                  letterSpacing: "0.12em",
                }}
              >
                OVERVIEW
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontSize: {
                    xs: "0.95rem",
                    sm: "1rem",
                  },
                  lineHeight: {
                    xs: 1.65,
                    sm: 1.75,
                  },
                }}
              >
                {project.description}
              </Typography>

              <Typography
                variant="overline"
                sx={{
                  display: "block",
                  mt: {
                    xs: 3,
                    sm: 3.5,
                  },
                  mb: 1,
                  color: "primary.main",
                  fontWeight: 700,
                  fontSize: {
                    xs: "0.75rem",
                    sm: "0.8rem",
                  },
                  letterSpacing: "0.12em",
                }}
              >
                TECHNOLOGIES
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 0.75,
                }}
              >
                {project.technologies.map((technology) => (
                  <Chip
                    key={technology}
                    label={technology}
                    size="small"
                    variant="outlined"
                    sx={{
                      bgcolor: "background.paper",
                      borderColor: "divider",
                      color: "text.secondary",
                      fontWeight: 500,
                      fontSize: {
                        xs: "0.75rem",
                        sm: "0.8rem",
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>

            <Box sx={{ minWidth: 0 }}>
              <Typography
                variant="overline"
                sx={{
                  display: "block",
                  mb: 0.75,
                  color: "primary.main",
                  fontWeight: 700,
                  fontSize: {
                    xs: "0.75rem",
                    sm: "0.8rem",
                  },
                  letterSpacing: "0.12em",
                }}
              >
                KEY HIGHLIGHTS
              </Typography>

              <Box
                component="ul"
                sx={{
                  m: 0,
                  pl: 2.25,
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    lg: "repeat(2, minmax(0, 1fr))",
                  },
                  columnGap: 4,
                  rowGap: 0.5,
                  color: "text.secondary",
                  "& li::marker": {
                    color: "primary.main",
                  },
                }}
              >
                {project.highlights.map((highlight) => (
                  <Typography
                    key={highlight}
                    component="li"
                    sx={{
                      pl: 0.25,
                      color: "text.secondary",
                      fontSize: {
                        xs: "0.9rem",
                        sm: "0.95rem",
                      },
                      lineHeight: 1.6,
                    }}
                  >
                    {highlight}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>

          {(project.githubUrl || project.liveUrl) && (
            <Box
              sx={{
                mt: {
                  xs: 4,
                  md: 5,
                },
                pt: 3,
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 1.5,
                borderTop: "1px solid",
                borderColor: "divider",
              }}
            >
              {project.githubUrl && (
                <Button
                  component="a"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  sx={{
                    color: "text.primary",
                    borderColor: "divider",
                    "&:hover": {
                      borderColor: "primary.main",
                    },
                  }}
                >
                  GitHub
                </Button>
              )}

              {project.liveUrl && (
                <Button
                  component="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  endIcon={<LaunchRoundedIcon />}
                >
                  Live Demo
                </Button>
              )}
            </Box>
          )}
        </Container>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
