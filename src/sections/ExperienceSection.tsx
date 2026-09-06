import { Box, Container, Typography } from "@mui/material";
import experienceItems, { experienceCompany } from "../data/experience";

const ExperienceSection = () => {
  return (
    <Box
      component="section"
      id="experience"
      aria-labelledby="experience-title"
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
            EXPERIENCE
          </Typography>
          <Typography
            component="h2"
            id="experience-title"
            variant="h2"
            sx={{ mb: 2, letterSpacing: "-0.03em" }}
          >
            From full-stack development to automation.
          </Typography>
          <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
            Building business applications and expanding into enterprise
            workflows and process automation.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.65fr 1.35fr" },
            gap: { xs: 4, md: 8 },
            pt: { xs: 3, md: 4 },
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <Box>
            <Typography
              component="h3"
              variant="h4"
              sx={{ fontWeight: 700, mb: 1 }}
            >
              {experienceCompany}
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 2 }}>
              2023–Present
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", maxWidth: 280, lineHeight: 1.8 }}
            >
              Two roles. A growing focus on application development and
              business automation.
            </Typography>
          </Box>

          <Box
            component="ol"
            aria-label="Roles at Citco, most recent first"
            sx={{ m: 0, p: 0, listStyle: "none" }}
          >
            {experienceItems.map((experience, index) => (
              <Box
                component="li"
                key={experience.title}
                sx={{
                  position: "relative",
                  pl: { xs: 3, sm: 4 },
                  pb: index < experienceItems.length - 1 ? 5 : 0,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: 5,
                    top: 9,
                    bottom: index < experienceItems.length - 1 ? -9 : 0,
                    width: "1px",
                    bgcolor: "divider",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 5,
                    left: 0,
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    bgcolor: experience.current ? "primary.main" : "background.paper",
                    border: "2px solid",
                    borderColor: "primary.main",
                    boxSizing: "border-box",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 1,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", fontVariantNumeric: "tabular-nums" }}
                  >
                    {experience.period}
                  </Typography>
                  {experience.current && (
                    <Typography
                      variant="caption"
                      sx={{
                        color: "primary.main",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      Current role
                    </Typography>
                  )}
                </Box>
                <Typography
                  component="h4"
                  variant="h5"
                  sx={{ fontWeight: 700, mb: 1.5 }}
                >
                  {experience.title}
                </Typography>
                <Typography sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2 }}>
                  {experience.description}
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    m: 0,
                    pl: 2,
                    color: "text.secondary",
                    "& li": { pl: 0.5, mb: 1, lineHeight: 1.8 },
                    "& li::marker": { color: "primary.main" },
                  }}
                >
                  {experience.highlights.map((highlight) => (
                    <Typography component="li" variant="body2" key={highlight}>
                      {highlight}
                    </Typography>
                  ))}
                </Box>
                <Typography
                  variant="body2"
                  sx={{ mt: 2.5, fontWeight: 600, color: "text.primary", lineHeight: 1.8 }}
                >
                  {experience.technologies.join(" · ")}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ExperienceSection;
