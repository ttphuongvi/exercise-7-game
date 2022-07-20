import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    // mode,
    type: "light",
    primary: {
      main: "#2AC0FF",
    },

    // secondary: {
    //   ...(mode === "dark"
    //     ? {
    //         main: "#2ac0ff",
    //       }
    //     : {
    //         main: "#20232A",
    //       }),
    // },
    // ...(mode === "dark"
    //   ? {
    //       background: {
    //         default: grey[900],
    //         paper: "#333",
    //       },
    //     }
    //   : {
    //       background: {
    //         default: "#fff",
    //         paper: "#F5F5F5",
    //       },
    //     }),

    // text: {
    //   ...(mode === "light"
    //     ? {
    //         primary: grey[800],
    //         secondary: grey[800],
    //       }
    //     : {
    //         primary: grey[300],
    //         secondary: grey[300],
    //       }),
    // },
  },
  // shadows: [
  //   "none",
  //   "rgba(0, 0, 0, 0.09) 0px 3px 12px;",
  //   "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  //   "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
  //   ...Array(21).fill("none"),
  // ],
  typography: {
    subtitle1: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      fontFamily: "Oswald",
    },
  },
});

export default theme;
