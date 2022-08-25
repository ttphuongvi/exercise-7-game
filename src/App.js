import React from "react";
import { dataRoutes } from "./routesGame/dataRoutes";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./store/reducers";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import useCustomTheme from "./CustomTheme";
import { AppContext } from "./context/context";
import TemplatePage from "./Atomic/templates/TemplatePage";
import { useRoutes } from "react-router-dom";
const store = configureStore({ reducer: reducers });

const App = () => {
  const appContext = React.useContext(AppContext);

  const { darkMode, customTheme } = appContext;

  const theme = useCustomTheme(darkMode, customTheme);

  const content = useRoutes(dataRoutes);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TemplatePage content={content} />
      </ThemeProvider>
    </Provider>
  );
};
export default App;
