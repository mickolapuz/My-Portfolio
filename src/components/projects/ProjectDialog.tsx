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
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (!project) {
    return null;
  }

  const projectTypeMeta = getProjectTypeMeta(project.projectType);
  const ProjectTypeIcon = projectTypeMeta.icon;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      fullScreen={isMobile}
      maxWidth="md"
      scroll="paper"
      slotProps={{
        paper: {
          sx: {
            borderRadius: {
              xs: 0,
              sm: 3,
            },
            m: {
              xs: 0,
              sm: 4,
            },
            maxHeight: {
              xs: "100%",
              sm: "calc(100% - 64px)",
            },
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          p: {
            xs: 2.25,
            sm: 3,
          },
          position: {
            xs: "sticky",
            sm: "static",
          },
          top: 0,
          zIndex: 2,
          bgcolor: "background.paper",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box sx={{ minWidth: 0 }}>
            <Typography
              component="h2"
              variant="h5"
              sx={{
                color: "text.primary",
                fontWeight: 700,
                fontSize: {
                  xs: "1.35rem",
                  sm: undefined,
                },
                lineHeight: {
                  xs: 1.25,
                  sm: undefined,
                },
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
                mt: {
                  xs: 1,
                  sm: 1.25,
                },
                color: "text.secondary",
                borderColor: "divider",
              }}
            />
          </Box>

          <IconButton
            aria-label="Close project details"
            onClick={onClose}
            sx={{
              flexShrink: 0,
              color: "text.secondary",
            }}
          >
            <CloseRoundedIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent
        sx={{
          px: {
            xs: 2.25,
            sm: 3,
          },
          pt: {
            xs: 2.75,
            sm: 3.5,
          },
          pb: {
            xs: 2.25,
            sm: 3,
          },
          "&:first-of-type": {
            pt: {
              xs: 2.75,
              sm: 4,
            },
          },
        }}
      >
        <Typography
          variant="overline"
          sx={{
            display: "block",
            mb: {
              xs: 0.75,
              sm: 1.25,
            },
            color: "primary.main",
            fontWeight: 700,
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
              sm: 1.8,
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
              xs: 2.5,
              sm: 3.25,
            },
            mb: {
              xs: 0.75,
              sm: 1.25,
            },
            color: "primary.main",
            fontWeight: 700,
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
            gap: {
              xs: 0.75,
              sm: 1,
            },
          }}
        >
          {project.technologies.map((technology) => (
            <Chip
              key={technology}
              label={technology}
              size={isMobile ? "small" : "medium"}
              variant="outlined"
              sx={{
                bgcolor: "background.paper",
                borderColor: "divider",
                color: "text.secondary",
                fontWeight: 500,
              }}
            />
          ))}
        </Box>

        <Typography
          variant="overline"
          sx={{
            display: "block",
            mt: {
              xs: 2.5,
              sm: 3.25,
            },
            mb: {
              xs: 0.75,
              sm: 1.25,
            },
            color: "primary.main",
            fontWeight: 700,
            letterSpacing: "0.12em",
          }}
        >
          KEY HIGHLIGHTS
        </Typography>

        <Box
          component="ul"
          sx={{
            m: 0,
            pl: {
              xs: 2.25,
              sm: 2.5,
            },
            color: "text.secondary",
          }}
        >
          {project.highlights.map((highlight) => (
            <Typography
              key={highlight}
              component="li"
              variant="body1"
              sx={{
                mb: {
                  xs: 0.65,
                  sm: 1,
                },
                pl: {
                  xs: 0.25,
                  sm: 0.5,
                },
                color: "text.secondary",
                fontSize: {
                  xs: "0.9rem",
                  sm: "1rem",
                },
                lineHeight: {
                  xs: 1.55,
                  sm: 1.7,
                },
              }}
            >
              {highlight}
            </Typography>
          ))}
        </Box>

        {(project.githubUrl || project.liveUrl) && (
          <Box
            sx={{
              mt: {
                xs: 3,
                sm: 3.5,
              },
              pt: {
                xs: 2.5,
                sm: 3,
              },
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
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
