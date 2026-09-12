import { Box, Container, Grid, Typography } from "@mui/material";

const AboutSection = () => {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: {
          xs: 8,
          md: 9,
        },
        bgcolor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{
            xs: 5,
            md: 10,
          }}
          alignItems="flex-start"
        >
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              component="p"
              sx={{
                color: "primary.main",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              About Me
            </Typography>

            <Typography
              component="h2"
              sx={{
                color: "text.primary",
                fontWeight: 700,
                lineHeight: 1.2,
                fontSize: {
                  xs: "2rem",
                  md: "2.5rem",
                },
              }}
            >
              Building practical software for real-world problems.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Box
              sx={{
                maxWidth: 720,
              }}
            >
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: {
                    xs: "1rem",
                    md: "1.1rem",
                  },
                  lineHeight: 1.9,
                  mb: 3,
                }}
              >
                I'm a software developer focused on building full-stack
                applications, APIs, and automation solutions using technologies
                such as .NET, React, TypeScript, and UiPath.
              </Typography>

              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: {
                    xs: "1rem",
                    md: "1.1rem",
                  },
                  lineHeight: 1.9,
                  mb: 3,
                }}
              >
                My work includes developing web applications, designing and
                integrating REST APIs, automating business processes, and
                creating internal tools that improve how users interact with
                systems and data.
              </Typography>

              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: {
                    xs: "1rem",
                    md: "1.1rem",
                  },
                  lineHeight: 1.9,
                }}
              >
                I enjoy working across both frontend and backend development,
                understanding how different parts of a system connect, and
                turning business requirements into maintainable software
                solutions.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
