import GitHubIcon from "@mui/icons-material/GitHub";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Container, IconButton, Typography } from "@mui/material";
import profile from "../../data/profile";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        bgcolor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              textAlign: {
                xs: "center",
                sm: "left",
              },
            }}
          >
            © {currentYear} {profile.name}. Built with React, TypeScript and
            Material UI.
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            {profile.githubUrl && (
              <IconButton
                component="a"
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                size="small"
                sx={{
                  color: "text.secondary",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
            )}

            {profile.linkedinUrl && (
              <IconButton
                component="a"
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                size="small"
                sx={{
                  color: "text.secondary",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
            )}

            <IconButton
              component="a"
              href="#home"
              aria-label="Back to top"
              size="small"
              sx={{
                ml: 0.5,
                color: "text.secondary",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              <KeyboardArrowUpRoundedIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
