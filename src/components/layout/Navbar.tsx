import { Box, Button } from "@mui/material";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <Box
      component="nav"
      aria-label="Main navigation"
      sx={{
        display: {
          xs: "none",
          md: "flex",
        },
        alignItems: "center",
        gap: 0.5,
      }}
    >
      {navItems.map((item) => (
        <Button
          key={item.href}
          href={item.href}
          sx={{
            color: item.href === "#contact" ? "#F8FAFC" : "#CBD5E1",
            bgcolor: item.href === "#contact" ? "primary.main" : "transparent",
            borderRadius: 2,
            minHeight: 44,
            ml: item.href === "#contact" ? 1 : 0,
            "&:focus-visible": { outline: "2px solid #93C5FD", outlineOffset: 3 },
            minWidth: "auto",
            px: 1.5,
            "&:hover": {
              bgcolor: item.href === "#contact" ? "primary.dark" : "rgba(148,163,184,0.1)",
              color: "#FFFFFF",
            },
          }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );
};

export default Navbar;
