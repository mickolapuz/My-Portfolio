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
      sx={{
        minHeight: "100vh",
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
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1.2fr 0.8fr",
            },
            alignItems: "center",
            gap: {
              xs: 8,
              md: 10,
            },
          }}
        >
          <Box>
            <Typography
              variant="overline"
              sx={{
                display: "block",
                mb: 2,
                color: "primary.main",
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
              sx={{
                maxWidth: 760,
                color: "text.primary",
                fontSize: {
                  xs: "2.75rem",
                  sm: "3.75rem",
                  md: "4.5rem",
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
                  color: "primary.main",
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
                color: "text.secondary",
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
                  minHeight: 48,
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
                  minHeight: 48,
                  px: 3,
                  color: "text.primary",
                  borderColor: "divider",
                  "&:hover": {
                    borderColor: "primary.main",
                    bgcolor: "action.hover",
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
                  minHeight: 48,
                  px: 2,
                  color: "text.secondary",
                  "&:hover": {
                    color: "primary.main",
                    bgcolor: "action.hover",
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
                    bgcolor: "background.paper",
                    borderColor: "divider",
                    color: "text.secondary",
                    fontWeight: 500,
                  }}
                />
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              position: "relative",
              display: {
                xs: "none",
                md: "block",
              },
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
                opacity: 0.08,
                filter: "blur(50px)",
                transform: "translate(-50%, -50%)",
              }}
            />

            <Box
              sx={{
                position: "relative",
                p: 3,
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 4,
                boxShadow: "0 24px 60px rgba(15, 23, 42, 0.08)",
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
                      bgcolor: "divider",
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
                  fontSize: "0.9rem",
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
