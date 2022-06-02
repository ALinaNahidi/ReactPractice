import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
  shape: {
    borderRadius: "1px solid #E1ECFC",
  },
  palette: {
    primary: {
      main: "#2CE080",
    },
    secondary: {
      main: "#3A4649",
    },
    text: {
      primary: "#03314B ",
      secondary: "#6D787E ",
    },
    background: {
      paper: "#F7F7F7",
    },
  },
  typography: {
    subtitle1: {
      margin: "2%",
      fontFamily: "Cera pro",
      FontStyle: "normal",
      fontWeight: "700",
      FontSize: "18px",
      LineHeight: "23px",
      color: "#03314B",
    },
    body1: {
      margin: "2%",
      fontFamily: "Cera pro",
      FontStyle: "normal",
      fontWeight: "700",
      FontSize: "18px",
      LineHeight: "23px",

      color: "#6D787E",
    },
  },
  spacing: 4,

  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          paddingBottom: "0",
        },
      },
    },
  },
});

baseTheme.spacing(2);

export default baseTheme;
