import { createTheme } from "@mui/material/styles";
// save as themes/tealTheme.jsx
// creates a new theme containing overrides for any defaults
// see https://mui.com/material-ui/customization/theming/
export const tealTheme = createTheme({
  palette: {
    primary: { main: "#214D4C", contrastText: "#efefef" },
    secondary: { main: "#3CA899", contrastText: "#ffffff" },
  },
  typography: {
    fontFamily: "Montserrat",
    fontSize: 14,
    h1: { fontSize: 30 },
  },
  shape: { borderRadius: 0 },
  components: {
    MuiCssBaseline: {
      styleOverrides: `a { color: #3CA899; }`,
    },
    MuiButton: { defaultProps: { variant: "contained" } },
    MuiTextField: { defaultProps: { variant: "filled" } },
  },
});

export const yellowTheme = createTheme({
  palette: {
    primary: {
      main: "#F9A825", // amber yellow
      contrastText: "#000000",
    },
    secondary: {
      main: "#FFD54F", // lighter yellow
      contrastText: "#000000",
    },
    background: {
      default: "#FFFDE7", // pale yellow background
      paper: "#FFF8E1",
    },
  },

  typography: {
    fontFamily: "Montserrat",
    fontSize: 14,
    h1: {
      fontSize: 30,
      fontWeight: 700,
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
        a {
          color: #F9A825;
          text-decoration: none;
        }
      `,
    },

    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "filled",
      },
    },
  },
});
