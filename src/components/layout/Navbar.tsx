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
            color: "text.primary",
            minWidth: "auto",
            px: 1.5,
            "&:hover": {
              bgcolor: "action.hover",
              color: "primary.main",
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
