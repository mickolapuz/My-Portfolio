import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import DataObjectRoundedIcon from "@mui/icons-material/DataObjectRounded";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import { Box, Chip, Container, Paper, Typography } from "@mui/material";
import skillCategories from "../data/skills";

const getCategoryIcon = (id: string) => {
  switch (id) {
    case "frontend":
      return <CodeRoundedIcon />;

    case "backend":
      return <DataObjectRoundedIcon />;

    case "database":
      return <StorageRoundedIcon />;

    case "automation":
      return <SmartToyOutlinedIcon />;

    default:
      return <CodeRoundedIcon />;
  }
};

const SkillsSection = () => {
  return (
    <Box
      component="section"
      id="skills"
      sx={{
        py: {
          xs: 10,
          md: 14,
        },
        bgcolor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            mb: {
              xs: 5,
              md: 7,
            },
            maxWidth: 700,
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
            SKILLS
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
            Technologies I work with.
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
            My development stack covers frontend applications, backend services,
            databases, API integrations, and enterprise automation.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
            },
            gap: 2,
          }}
        >
          {skillCategories.map((category) => (
            <Paper
              key={category.id}
              elevation={0}
              sx={{
                p: {
                  xs: 2.5,
                  sm: 3,
                },
                height: "100%",
                bgcolor: "background.default",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 3,
              }}
            >
              <Box
                sx={{
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 2.5,
                    bgcolor: "background.paper",
                    color: "primary.main",
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  {getCategoryIcon(category.id)}
                </Box>

                <Typography
                  component="h3"
                  variant="h6"
                  sx={{
                    color: "text.primary",
                    fontWeight: 700,
                  }}
                >
                  {category.title}
                </Typography>
              </Box>

              <Typography
                variant="body2"
                sx={{
                  mb: 2.5,
                  color: "text.secondary",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                }}
              >
                {category.description}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                {category.skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
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
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default SkillsSection;
