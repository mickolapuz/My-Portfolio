import { Box, Container, Typography } from "@mui/material";
import profile from "../../data/profile";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      py: 2,
      bgcolor: "#0F172A",
      borderTop: "1px solid rgba(148,163,184,0.16)",
    }}
  >
    <Container maxWidth="lg">
      <Typography variant="caption" sx={{ display: "block", color: "#94A3B8", textAlign: "center" }}>
        © {new Date().getFullYear()} {profile.name}
      </Typography>
    </Container>
  </Box>
);

export default Footer;
