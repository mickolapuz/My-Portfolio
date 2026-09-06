import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { Box, Button, Drawer, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import profile from "../../data/profile";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const MobileDrawer = ({ open, onClose }: MobileDrawerProps) => {
  const desktop = useMediaQuery(useTheme().breakpoints.up("md"));

  return (
    <Drawer
      anchor="right"
      open={open && !desktop}
      onClose={onClose}
      slotProps={{
        paper: {
          role: "dialog",
          "aria-modal": true,
          "aria-labelledby": "mobile-menu-title",
          sx: {
            width: "min(380px, 100vw)",
            maxWidth: "100%",
            boxSizing: "border-box",
            bgcolor: "#0F172A",
            color: "#F8FAFC",
            backgroundImage: "radial-gradient(ellipse at top right, rgba(37,99,235,0.2), transparent 65%)",
            borderLeft: "1px solid rgba(148,163,184,0.2)",
            p: 3,
            pt: "max(24px, env(safe-area-inset-top))",
            pb: "max(24px, env(safe-area-inset-bottom))",
          },
        },
        backdrop: { sx: { bgcolor: "rgba(2,6,23,0.72)", backdropFilter: "blur(4px)" } },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 4 }}>
        <Typography id="mobile-menu-title" variant="h6" sx={{ fontWeight: 700, letterSpacing: "-0.03em" }}>
          Micko<Box component="span" sx={{ color: "#93C5FD" }}>.</Box>
        </Typography>
        <IconButton
          onClick={onClose}
          aria-label="Close navigation menu"
          sx={{ color: "#F8FAFC", width: 44, height: 44, border: "1px solid #475569", borderRadius: 2,
            "&:hover": { bgcolor: "rgba(148,163,184,0.12)" },
            "&:focus-visible": { outline: "2px solid #93C5FD", outlineOffset: 3 } }}
        >
          <CloseRoundedIcon />
        </IconButton>
      </Box>
      <Typography variant="overline" sx={{ color: "#93C5FD", letterSpacing: "0.16em", mb: 1.5 }}>
        EXPLORE
      </Typography>
      <Box component="nav" id="mobile-navigation" aria-label="Mobile navigation">
        {navItems.map((item, index) => (
          <Box
            component="a"
            key={item.href}
            href={item.href}
            onClick={onClose}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              minHeight: 64,
              py: 1.5,
              textDecoration: "none",
              color: "#F8FAFC",
              borderBottom: "1px solid rgba(148,163,184,0.2)",
              "&:hover": { color: "#93C5FD" },
              "&:focus-visible": { outline: "2px solid #93C5FD", outlineOffset: 2 },
            }}
          >
            <Typography component="span" variant="caption" sx={{ color: "#93C5FD", fontVariantNumeric: "tabular-nums" }}>
              {String(index + 1).padStart(2, "0")}
            </Typography>
            <Typography component="span" sx={{ flex: 1, fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.03em" }}>
              {item.label}
            </Typography>
            <ArrowOutwardRoundedIcon sx={{ fontSize: 20, color: "#94A3B8" }} />
          </Box>
        ))}
      </Box>
      <Box sx={{ mt: "auto", pt: 4 }}>
        <Typography variant="body2" sx={{ color: "#94A3B8", mb: 1.5 }}>
          Have something in mind?
        </Typography>
        <Button
          component="a"
          href={`mailto:${profile.email}`}
          onClick={onClose}
          endIcon={<ArrowOutwardRoundedIcon />}
          sx={{ color: "#BFDBFE", px: 0, justifyContent: "space-between", width: "100%", minHeight: 44,
            overflowWrap: "anywhere",
            "&:focus-visible": { outline: "2px solid #93C5FD", outlineOffset: 3 } }}
        >
          {profile.email}
        </Button>
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;
