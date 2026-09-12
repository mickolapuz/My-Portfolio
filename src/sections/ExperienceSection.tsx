import { Box, Container, Typography } from "@mui/material";
import experienceItems, { experienceCompany } from "../data/experience";

const ExperienceSection = () => {
  const experience = experienceItems[0];

  return (
    <Box
      component="section"
      id="experience"
      aria-labelledby="experience-title"
      sx={{ py: { xs: 10, md: 14 }, bgcolor: "background.paper" }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 5, md: 7 }, maxWidth: 760 }}>
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
            Full-stack development and enterprise automation.
          </Typography>

          <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
            Building business applications, APIs, integrations, and automation
            solutions across modern web development and enterprise workflows.
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

            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                maxWidth: 300,
                lineHeight: 1.8,
              }}
            >
              Professional experience across application development, API
              integration, data processing, and business automation.
            </Typography>
          </Box>

          <Box>
            <Typography
              component="h4"
              variant="h5"
              sx={{ fontWeight: 700, mb: 1.5 }}
            >
              {experience.title}
            </Typography>

            <Typography
              sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2.5 }}
            >
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
              sx={{
                mt: 2.5,
                fontWeight: 600,
                color: "text.primary",
                lineHeight: 1.8,
              }}
            >
              {experience.technologies.join(" · ")}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ExperienceSection;
