import { useState, type SyntheticEvent } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import {
  Alert,
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import profile from "../data/profile";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!profile.email) {
      setSnackbarMessage(
        "Add your contact email to the VITE_CONTACT_EMAIL environment variable.",
      );
      setSnackbarOpen(true);
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: {
          xs: 10,
          md: 14,
        },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "0.8fr 1.2fr",
            },
            gap: {
              xs: 6,
              md: 10,
            },
            alignItems: "start",
          }}
        >
          <Box>
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
              CONTACT
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
              Let&apos;s connect.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                maxWidth: 500,
                color: "text.secondary",
                fontSize: {
                  xs: "1rem",
                  md: "1.05rem",
                },
                lineHeight: 1.8,
              }}
            >
              I&apos;m open to discussing software development opportunities,
              projects, application development, API integrations, and
              automation solutions.
            </Typography>

            <Box
              sx={{
                mt: 4,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              {profile.email && (
                <IconButton
                  component="a"
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                  sx={{
                    width: 44,
                    height: 44,
                    color: "text.secondary",
                    border: "1px solid",
                    borderColor: "divider",
                    "&:hover": {
                      color: "primary.main",
                      borderColor: "primary.main",
                    },
                  }}
                >
                  <EmailOutlinedIcon />
                </IconButton>
              )}

              {profile.githubUrl && (
                <IconButton
                  component="a"
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  sx={{
                    width: 44,
                    height: 44,
                    color: "text.secondary",
                    border: "1px solid",
                    borderColor: "divider",
                    "&:hover": {
                      color: "primary.main",
                      borderColor: "primary.main",
                    },
                  }}
                >
                  <GitHubIcon />
                </IconButton>
              )}

              {profile.linkedinUrl && (
                <IconButton
                  component="a"
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  sx={{
                    width: 44,
                    height: 44,
                    color: "text.secondary",
                    border: "1px solid",
                    borderColor: "divider",
                    "&:hover": {
                      color: "primary.main",
                      borderColor: "primary.main",
                    },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              )}
            </Box>
          </Box>

          <Paper
            elevation={0}
            sx={{
              p: {
                xs: 2.5,
                sm: 4,
              },
              bgcolor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 3,
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "grid",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, 1fr)",
                  },
                  gap: 2,
                }}
              >
                <TextField
                  label="Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      bgcolor: "background.default",
                    },
                  }}
                />

                <TextField
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      bgcolor: "background.default",
                    },
                  }}
                />
              </Box>

              <TextField
                label="Message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
                multiline
                minRows={6}
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "background.default",
                  },
                }}
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                endIcon={<SendRoundedIcon />}
                sx={{
                  mt: 1,
                  minHeight: 48,
                  px: 3,
                  justifySelf: {
                    xs: "stretch",
                    sm: "start",
                  },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Alert
          severity="info"
          onClose={() => setSnackbarOpen(false)}
          sx={{
            width: "100%",
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactSection;
