import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#2563EB",
    },

    background: {
      default: "#F8FAFC",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#0F172A",
      secondary: "#64748B",
    },

    divider: "#E2E8F0",
  },

  typography: {
    fontFamily: '"Inter", sans-serif',

    h1: {
      fontSize: "clamp(2.75rem, 6vw, 3.5rem)",
      fontWeight: 700,
      lineHeight: 1.1,
    },

    h2: {
      fontSize: "clamp(2rem, 4.5vw, 2.5rem)",
      fontWeight: 700,
      lineHeight: 1.2,
    },

    h3: {
      fontSize: "clamp(1.65rem, 4vw, 2rem)",
      fontWeight: 600,
      lineHeight: 1.25,
    },

    h4: {
      fontSize: "clamp(1.3rem, 3vw, 1.5rem)",
      fontWeight: 600,
      lineHeight: 1.3,
    },

    h5: {
      fontSize: "clamp(1.2rem, 2.5vw, 1.4rem)",
      fontWeight: 600,
      lineHeight: 1.35,
    },

    h6: {
      fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
      fontWeight: 600,
      lineHeight: 1.4,
    },

    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
    },

    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
          scrollPaddingTop: "72px",
        },
        body: {
          margin: 0,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          borderRadius: 8,
          paddingLeft: 20,
          paddingRight: 20,
          minHeight: 42,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          border: "1px solid #E2E8F0",
        },
      },
    },
  },
});

export default theme;
