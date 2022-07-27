// import { createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     // mode,
//     mode: "light",
//     primary: {
//       main: "#2AC0FF",
//     },

//     // secondary: {
//     //   ...(mode === "dark"
//     //     ? {
//     //         main: "#2ac0ff",
//     //       }
//     //     : {
//     //         main: "#20232A",
//     //       }),
//     // },
//     // ...(mode === "dark"
//     //   ? {
//     //       background: {
//     //         default: grey[900],
//     //         paper: "#333",
//     //       },
//     //     }
//     //   : {
//     //       background: {
//     //         default: "#fff",
//     //         paper: "#F5F5F5",
//     //       },
//     //     }),

//     // text: {
//     //   ...(mode === "light"
//     //     ? {
//     //         primary: grey[800],
//     //         secondary: grey[800],
//     //       }
//     //     : {
//     //         primary: grey[300],
//     //         secondary: grey[300],
//     //       }),
//     // },
//   },
//   // shadows: [
//   //   "none",
//   //   "rgba(0, 0, 0, 0.09) 0px 3px 12px;",
//   //   "rgba(0, 0, 0, 0.35) 0px 5px 15px",
//   //   "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
//   //   ...Array(21).fill("none"),
//   // ],
//   typography: {
//     subtitle2: {
//       fontSize: 12,
//       fontFamily: "Oswald",
//     },
//   },
// });

// const Theme = () => {};

// export default theme;
// import { createTheme } from "@mui/material";
// import React from "react";
// export default function Theme() {
//   const [mode, setMode] = React.useState("light");
//   const colorMode = React.useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
//       },
//     }),
//     []
//   );

//   const Theme = React.useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode,
//         },
//       }),
//     [mode]
//   );

//   return <Theme />;
// }

import { createTheme } from "@mui/material/styles";

const useCustomTheme = (darkMode, customTheme) => {
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: customTheme ? customTheme : "#2AC0FF",
      },
      secondary: {
        main: darkMode ? "#f5f5f5" : "#000",
      },
      background: {
        default: darkMode ? "#1E1E1E" : "#fff",
        paper: darkMode ? "#212121" : "#FFF",
        card: darkMode ? "#333" : "#fff",
      },
    },
    typography: {
      subtitle1: {
        fontSize: "1.2rem",
      },
      subtitle2: {
        fontFamily: "Oswald",
      },

      caption: {
        fontSize: "0.8rem",
      },
    },
  });
  return theme;
};

export default useCustomTheme;
