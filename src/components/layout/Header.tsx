import { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MobileDrawer from "./MobileDrawer";
import Navbar from "./Navbar";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: "rgba(15, 23, 42, 0.96)",
          color: "#F8FAFC",
          borderBottom: "1px solid",
          borderColor: "rgba(148,163,184,0.16)",
          backdropFilter: "blur(12px)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              minHeight: {
                xs: 64,
                md: 72,
              },
              justifyContent: "space-between",
            }}
          >
            <Typography
              component="a"
              href="#home"
              variant="h6"
              sx={{
                color: "#F8FAFC",
                textDecoration: "none",
                fontWeight: 700,
                letterSpacing: "-0.03em",
              }}
            >
              Micko<Box component="span" sx={{ color: "#93C5FD" }}>.</Box>
            </Typography>

            <Navbar />

            <Box
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              <IconButton
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
                aria-controls={mobileOpen ? "mobile-navigation" : undefined}
                aria-haspopup="dialog"
                onClick={() => setMobileOpen(true)}
                sx={{
                  color: "#F8FAFC",
                  width: 44,
                  height: 44,
                  border: "1px solid #475569",
                  borderRadius: 2,
                  "&:hover": { bgcolor: "rgba(148,163,184,0.12)" },
                }}
              >
                <MenuRoundedIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
};

export default Header;
