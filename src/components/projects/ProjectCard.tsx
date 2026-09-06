import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import type { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
  onViewProject: (project: Project) => void;
}

const ProjectCard = ({ project, onViewProject }: ProjectCardProps) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 3,
        transition:
          "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: "primary.main",
          boxShadow: "0 16px 40px rgba(15, 23, 42, 0.08)",
        },
      }}
    >
      <CardContent
        sx={{
          p: {
            xs: 2.5,
            sm: 3,
          },
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          "&:last-child": {
            pb: {
              xs: 2.5,
              sm: 3,
            },
          },
        }}
      >
        <Box
          sx={{
            mb: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 2,
          }}
        >
          <Typography
            component="h3"
            variant="h5"
            sx={{
              color: "text.primary",
              fontWeight: 700,
              lineHeight: 1.35,
            }}
          >
            {project.title}
          </Typography>

          {project.isPrivate && (
            <Chip
              icon={<LockOutlinedIcon />}
              label="Private"
              size="small"
              variant="outlined"
              sx={{
                flexShrink: 0,
                color: "text.secondary",
                borderColor: "divider",
              }}
            />
          )}
        </Box>

        <Typography
          variant="body2"
          sx={{
            mb: 3,
            color: "text.secondary",
            fontSize: "0.95rem",
            lineHeight: 1.7,
          }}
        >
          {project.shortDescription}
        </Typography>

        <Box
          sx={{
            mb: 3,
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          {project.technologies.slice(0, 5).map((technology) => (
            <Chip
              key={technology}
              label={technology}
              size="small"
              sx={{
                bgcolor: "action.hover",
                color: "text.secondary",
                fontWeight: 500,
              }}
            />
          ))}

          {project.technologies.length > 5 && (
            <Chip
              label={`+${project.technologies.length - 5}`}
              size="small"
              sx={{
                bgcolor: "action.hover",
                color: "text.secondary",
                fontWeight: 500,
              }}
            />
          )}
        </Box>

        <Button
          onClick={() => onViewProject(project)}
          endIcon={<ArrowForwardRoundedIcon />}
          sx={{
            mt: "auto",
            alignSelf: "flex-start",
            px: 0,
            color: "primary.main",
            "&:hover": {
              bgcolor: "transparent",
            },
          }}
        >
          View Project
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
