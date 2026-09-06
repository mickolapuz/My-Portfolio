import { Box, Drawer, List, ListItemButton, ListItemText } from "@mui/material";

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
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 280,
          p: 2,
        },
      }}
    >
      <Box
        component="nav"
        sx={{
          mt: 5,
        }}
      >
        <List disablePadding>
          {navItems.map((item) => (
            <ListItemButton
              key={item.href}
              component="a"
              href={item.href}
              onClick={onClose}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                px: 2,
                py: 1.25,
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: 600,
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;
