import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { Box, Container, Paper, Typography } from "@mui/material";
import experienceItems from "../data/experience";

const ExperienceSection = () => {
  return (
    <Box
      component="section"
      id="experience"
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
            EXPERIENCE
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
            Development experience.
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
            Experience across software development, business applications, API
            integrations, full-stack development, and automation.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gap: 2.5,
          }}
        >
          {experienceItems.map((experience) => (
            <Paper
              key={experience.title}
              elevation={0}
              sx={{
                p: {
                  xs: 2.5,
                  sm: 3.5,
                },
                bgcolor: "background.default",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 3,
              }}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: "0.75fr 1.25fr",
                  },
                  gap: {
                    xs: 3,
                    md: 6,
                  },
                }}
              >
                <Box>
                  <Typography
                    variant="overline"
                    sx={{
                      display: "block",
                      mb: 1,
                      color: "primary.main",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                    }}
                  >
                    {experience.type}
                  </Typography>

                  <Typography
                    component="h3"
                    variant="h5"
                    sx={{
                      color: "text.primary",
                      fontWeight: 700,
                      lineHeight: 1.4,
                    }}
                  >
                    {experience.title}
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2.5,
                      color: "text.secondary",
                      lineHeight: 1.8,
                    }}
                  >
                    {experience.description}
                  </Typography>

                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(2, 1fr)",
                      },
                      gap: 1.25,
                    }}
                  >
                    {experience.highlights.map((highlight) => (
                      <Box
                        key={highlight}
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 1,
                        }}
                      >
                        <CheckRoundedIcon
                          sx={{
                            mt: 0.25,
                            fontSize: 18,
                            flexShrink: 0,
                            color: "primary.main",
                          }}
                        />

                        <Typography
                          variant="body2"
                          sx={{
                            color: "text.secondary",
                            fontSize: "0.95rem",
                            lineHeight: 1.6,
                          }}
                        >
                          {highlight}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ExperienceSection;
