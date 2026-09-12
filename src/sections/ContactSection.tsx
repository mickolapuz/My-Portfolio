import { useState, type SyntheticEvent } from "react";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Alert, Box, Button, Container, Snackbar, TextField, Typography } from "@mui/material";
import profile from "../data/profile";

const fieldStyles = {
  "& .MuiOutlinedInput-root": {
    bgcolor: "#F8FAFC",
    borderRadius: 2,
    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "primary.main" },
    "&.Mui-focused": { bgcolor: "#FFFFFF" },
  },
};

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!profile.email) {
      setSnackbarOpen(true);
      return;
    }
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const socialLinks = [
    { label: "GitHub", href: profile.githubUrl, icon: GitHubIcon },
    { label: "LinkedIn", href: profile.linkedinUrl, icon: LinkedInIcon },
    { label: "Facebook", href: profile.facebookUrl, icon: FacebookIcon },
    { label: "OnlineJobs", href: profile.onlineJobsUrl, icon: WorkOutlineRoundedIcon },
  ].filter((link) => link.href);

  return (
    <Box
      component="section"
      id="contact"
      aria-labelledby="contact-title"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
        bgcolor: "#0F172A",
        color: "#F8FAFC",
        backgroundImage: "radial-gradient(ellipse at 0% 0%, rgba(37,99,235,0.22), transparent 60%)",
        "&::before": {
          content: '""',
          position: "absolute",
          width: 420,
          height: 420,
          border: "1px solid rgba(148,163,184,0.12)",
          borderRadius: "50%",
          left: -230,
          bottom: -220,
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: { xs: 4, md: 6 } }}>
          <Box aria-hidden="true" sx={{ width: 32, height: 2, bgcolor: "#93C5FD" }} />
          <Typography variant="overline" sx={{ color: "#BFDBFE", fontWeight: 700, letterSpacing: "0.18em" }}>
            CONTACT
          </Typography>
        </Box>

        <Box sx={{
          display: "grid",
          gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "minmax(0, 1fr) minmax(0, 1fr)" },
          gap: { xs: 6, md: 8 },
          alignItems: "start",
        }}>
          <Box sx={{ minWidth: 0 }}>
            <Typography
              component="h2"
              id="contact-title"
              sx={{
                fontSize: { xs: "2.75rem", sm: "3.5rem", lg: "4.25rem" },
                fontWeight: 700,
                letterSpacing: "-0.055em",
                lineHeight: 1.08,
                maxWidth: 520,
              }}
            >
              Good work starts with{" "}
              <Box component="span" sx={{ color: "#93C5FD" }}>a conversation.</Box>
            </Typography>
            <Typography sx={{ mt: 3, maxWidth: 420, color: "#CBD5E1", lineHeight: 1.8 }}>
              Have a project in mind or a development opportunity?
              Let&apos;s talk about what we can build together.
            </Typography>

            {profile.email && (
              <Box sx={{ mt: { xs: 4, md: 6 } }}>
                <Typography variant="overline" sx={{ color: "#94A3B8", letterSpacing: "0.12em" }}>
                  PREFER EMAIL?
                </Typography>
                <Box
                  component="a"
                  href={`mailto:${profile.email}`}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    py: 1.5,
                    color: "#F8FAFC",
                    textDecoration: "none",
                    borderBottom: "1px solid #475569",
                    "&:hover": { color: "#93C5FD", borderColor: "#93C5FD" },
                    "&:focus-visible": { outline: "2px solid #93C5FD", outlineOffset: 5 },
                  }}
                >
                  <EmailOutlinedIcon sx={{ fontSize: 22, flexShrink: 0 }} />
                  <Typography sx={{ fontSize: { xs: "1rem", sm: "1.15rem" }, overflowWrap: "anywhere", flex: 1 }}>
                    {profile.email}
                  </Typography>
                  <ArrowOutwardRoundedIcon sx={{ fontSize: 20, flexShrink: 0 }} />
                </Box>
              </Box>
            )}

            {socialLinks.length > 0 && (
              <Box component="nav" aria-label="Social profiles" sx={{ display: "flex", flexWrap: "wrap", columnGap: 3, rowGap: 1, mt: 3 }}>
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <Button
                    key={label}
                    component="a"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<Icon />}
                    endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: "16px !important" }} />}
                    sx={{
                      color: "#CBD5E1",
                      px: 0.5,
                      "&:hover": { color: "#FFFFFF", bgcolor: "rgba(148,163,184,0.1)" },
                      "&:focus-visible": { outline: "2px solid #93C5FD", outlineOffset: 3 },
                    }}
                  >
                    {label}
                  </Button>
                ))}
              </Box>
            )}
          </Box>

          <Box sx={{
            p: { xs: 2.5, sm: 4, lg: 5 },
            bgcolor: "#FFFFFF",
            color: "text.primary",
            borderRadius: { xs: 3, md: 4 },
            borderTop: "4px solid #60A5FA",
            boxShadow: "0 24px 64px rgba(0,0,0,0.2)",
          }}>
            <Typography component="h3" variant="h4" sx={{ fontWeight: 700, letterSpacing: "-0.03em", mb: 1 }}>
              Tell me what you have in mind.
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 3.5, lineHeight: 1.7 }}>
              A project, an opportunity, or just a hello.
            </Typography>

            <Box component="form" onSubmit={handleSubmit} aria-label="Contact Micko" sx={{ display: "grid", gap: 2.5 }}>
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" }, gap: 2.5 }}>
                <TextField
                  id="contact-name"
                  label="Your name"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  fullWidth
                  sx={fieldStyles}
                />
                <TextField
                  id="contact-email"
                  label="Email address"
                  name="email"
                  autoComplete="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  fullWidth
                  sx={fieldStyles}
                />
              </Box>
              <TextField
                id="contact-message"
                label="Your message"
                name="message"
                placeholder="A little about your idea and how I can help..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
                multiline
                minRows={5}
                fullWidth
                sx={fieldStyles}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                endIcon={<ArrowOutwardRoundedIcon />}
                sx={{ minHeight: 52, justifyContent: "space-between", px: 2.5, borderRadius: 2 }}
              >
                Let&apos;s connect
              </Button>
              <Typography variant="caption" sx={{ color: "text.secondary", textAlign: "center", lineHeight: 1.6 }}>
                Opens your email app with your message ready to send.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="info" onClose={() => setSnackbarOpen(false)} sx={{ width: "100%" }}>
          Email is currently unavailable. Please reach out through a social profile.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactSection;
