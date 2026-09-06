import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Box, Button, Chip, Container, Typography } from "@mui/material";
import profile from "../data/profile";

const technologies = [
  ".NET",
  "React",
  "TypeScript",
  "UiPath",
  "REST APIs",
  "SQL",
];

const HeroSection = () => {
  return (
    <Box
      component="section"
      id="home"
      aria-labelledby="hero-title"
      sx={{
        minHeight: { xs: "auto", md: "calc(100svh - 72px)" },
        position: "relative",
        bgcolor: "#0F172A",
        color: "#F8FAFC",
        backgroundImage: "radial-gradient(ellipse at 0% 0%, rgba(37,99,235,0.22), transparent 60%)",
        "&::before": {
          content: '""',
          position: "absolute",
          width: 480,
          height: 480,
          border: "1px solid rgba(148,163,184,0.12)",
          borderRadius: "50%",
          right: -280,
          bottom: -260,
          pointerEvents: "none",
        },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        pt: {
          xs: 12,
          md: 14,
        },
        pb: {
          xs: 8,
          md: 10,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "minmax(0, 1fr)",
              md: "minmax(0, 1.15fr) minmax(0, 0.85fr)",
            },
            alignItems: "center",
            gap: {
              xs: 8,
              md: 7,
            },
          }}
        >
          <Box>
            <Typography
              variant="overline"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                "&::before": { content: '""', width: 32, height: 2, bgcolor: "#93C5FD" },
                mb: 2,
                color: "#93C5FD",
                fontWeight: 700,
                fontSize: {
                  xs: "0.8rem",
                  md: "0.875rem",
                },
                letterSpacing: "0.14em",
              }}
            >
              SOFTWARE DEVELOPER
            </Typography>

            <Typography
              component="h1"
              id="hero-title"
              sx={{
                maxWidth: 760,
                color: "#F8FAFC",
                fontSize: {
                  xs: "2.75rem",
                  sm: "3.75rem",
                  md: "4rem",
                  lg: "4.5rem",
                },
                fontWeight: 700,
                lineHeight: {
                  xs: 1.08,
                  md: 1.05,
                },
                letterSpacing: "-0.045em",
              }}
            >
              Hi, I&apos;m {profile.firstName}.
              <Box
                component="span"
                sx={{
                  display: "block",
                  color: "#93C5FD",
                }}
              >
                I build software solutions.
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mt: 3,
                maxWidth: 650,
                color: "#CBD5E1",
                fontSize: {
                  xs: "1rem",
                  sm: "1.125rem",
                },
                lineHeight: 1.8,
              }}
            >
              I develop full-stack applications, APIs, and automation solutions
              using .NET, React, TypeScript, and UiPath, with a focus on
              maintainable systems and practical business applications.
            </Typography>

            <Box
              sx={{
                mt: 4,
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "row",
                },
                alignItems: {
                  xs: "stretch",
                  sm: "center",
                },
                flexWrap: "wrap",
                gap: 1.5,
              }}
            >
              <Button
                variant="contained"
                size="large"
                href="#projects"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  minHeight: 52,
                  borderRadius: 2,
                  "&:focus-visible": { outline: "2px solid #93C5FD", outlineOffset: 4 },
                  px: 3,
                }}
              >
                View Projects
              </Button>

              <Button
                component="a"
                href={profile.resumeUrl}
                download
                variant="outlined"
                size="large"
                startIcon={<DownloadRoundedIcon />}
                sx={{
                  minHeight: 52,
                  borderRadius: 2,
                  "&:focus-visible": { outline: "2px solid #93C5FD", outlineOffset: 4 },
                  px: 3,
                  color: "#F8FAFC",
                  borderColor: "#475569",
                  "&:hover": {
                    borderColor: "#93C5FD",
                    bgcolor: "rgba(148,163,184,0.1)",
                  },
                }}
              >
                Download Resume
              </Button>

              <Button
                variant="text"
                size="large"
                href="#contact"
                startIcon={<EmailOutlinedIcon />}
                sx={{
                  minHeight: 52,
                  borderRadius: 2,
                  "&:focus-visible": { outline: "2px solid #93C5FD", outlineOffset: 4 },
                  px: 2,
                  color: "#CBD5E1",
                  "&:hover": {
                    color: "#93C5FD",
                    bgcolor: "rgba(148,163,184,0.1)",
                  },
                }}
              >
                Contact Me
              </Button>
            </Box>

            <Box
              sx={{
                mt: 5,
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              {technologies.map((technology) => (
                <Chip
                  key={technology}
                  label={technology}
                  variant="outlined"
                  sx={{
                    bgcolor: "rgba(148,163,184,0.06)",
                    borderColor: "#475569",
                    color: "#CBD5E1",
                    fontWeight: 500,
                  }}
                />
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              position: "relative",
              minWidth: 0,
              width: "100%",
              maxWidth: { xs: 560, md: "none" },
              justifySelf: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: 300,
                height: 300,
                borderRadius: "50%",
                bgcolor: "primary.main",
                opacity: 0.18,
                filter: "blur(50px)",
                transform: "translate(-50%, -50%)",
              }}
            />

            <Box
              sx={{
                position: "relative",
                p: { xs: 2.5, sm: 4 },
                color: "#0F172A",
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "#E2E8F0",
                borderTop: "4px solid #60A5FA",
                borderRadius: { xs: 3, md: 4 },
                boxShadow: "0 24px 64px rgba(0,0,0,0.2)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 3,
                }}
              >
                {[0, 1, 2].map((item) => (
                  <Box
                    key={item}
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      bgcolor: ["#CBD5E1", "#93C5FD", "#60A5FA"][item],
                    }}
                  />
                ))}
              </Box>

              <Typography
                sx={{
                  mb: 2,
                  color: "text.secondary",
                  fontFamily: "monospace",
                  fontSize: "0.8rem",
                }}
              >
                developer.ts
              </Typography>

              <Box
                sx={{
                  fontFamily: "monospace",
                  fontSize: { xs: "0.75rem", sm: "0.85rem", lg: "0.9rem" },
                  overflowWrap: "anywhere",
                  lineHeight: 2,
                }}
              >
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      color: "primary.main",
                    }}
                  >
                    const
                  </Box>{" "}
                  developer = {"{"}
                </Typography>

                <Typography
                  component="div"
                  sx={{
                    pl: 3,
                    color: "text.secondary",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                  }}
                >
                  name:{" "}
                  <Box
                    component="span"
                    sx={{
                      color: "text.primary",
                    }}
                  >
                    &quot;{profile.firstName}&quot;
                  </Box>
                  ,
                </Typography>

                <Typography
                  component="div"
                  sx={{
                    pl: 3,
                    color: "text.secondary",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                  }}
                >
                  role:{" "}
                  <Box
                    component="span"
                    sx={{
                      color: "text.primary",
                    }}
                  >
                    &quot;{profile.role}&quot;
                  </Box>
                  ,
                </Typography>

                <Typography
                  component="div"
                  sx={{
                    pl: 3,
                    color: "text.secondary",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                  }}
                >
                  frontend: [
                </Typography>

                <Typography
                  component="div"
                  sx={{
                    pl: 6,
                    color: "text.primary",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                  }}
                >
                  &quot;React&quot;, &quot;TypeScript&quot;, &quot;MUI&quot;
                </Typography>

                <Typography
                  component="div"
                  sx={{
                    pl: 3,
                    color: "text.secondary",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                  }}
                >
                  ],
                </Typography>

                <Typography
                  component="div"
                  sx={{
                    pl: 3,
                    color: "text.secondary",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                  }}
                >
                  backend:{" "}
                  <Box
                    component="span"
                    sx={{
                      color: "text.primary",
                    }}
                  >
                    &quot;.NET&quot;
                  </Box>
                  ,
                </Typography>

                <Typography
                  component="div"
                  sx={{
                    pl: 3,
                    color: "text.secondary",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                  }}
                >
                  automation:{" "}
                  <Box
                    component="span"
                    sx={{
                      color: "text.primary",
                    }}
                  >
                    &quot;UiPath&quot;
                  </Box>
                </Typography>

                <Typography
                  component="div"
                  sx={{
                    color: "text.primary",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                  }}
                >
                  {"};"}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
