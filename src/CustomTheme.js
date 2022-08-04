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
      caption: {
        fontSize: "0.8rem",
      },
      titleGame: {
        fontFamily: "Oswald",
        fontSize: "1.2rem",
      },
      bodyGame: {
        fontFamily: "Oswald",
      },
    },
  });
  return theme;
};

export default useCustomTheme;
