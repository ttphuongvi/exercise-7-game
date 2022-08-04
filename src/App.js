import React from "react";
import RoutesGame from "./routesGame/index";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./store/reducers";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import useCustomTheme from "./CustomTheme";
import { AppContext } from "./context/context";
const store = configureStore({ reducer: reducers });

const App = () => {
  const appContext = React.useContext(AppContext);

  const { darkMode, customTheme } = appContext;

  const theme = useCustomTheme(darkMode, customTheme);

  return (
    <Provider store={store}>
      {/* <ColorModeContext.Provider value={colorMode}> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RoutesGame />
      </ThemeProvider>
      {/* </ColorModeContext.Provider> */}
    </Provider>
  );
};
export default App;
