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
          bgcolor: "rgba(248, 250, 252, 0.92)",
          color: "text.primary",
          borderBottom: "1px solid",
          borderColor: "divider",
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
                color: "text.primary",
                textDecoration: "none",
                fontWeight: 700,
                letterSpacing: "-0.03em",
              }}
            >
              Micko.
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
                onClick={() => setMobileOpen(true)}
                sx={{
                  color: "text.primary",
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
