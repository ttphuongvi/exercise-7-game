import React from "react";
import RoutesGame from "./routesGame/index";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./store/reducers";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

const store = configureStore({ reducer: reducers });

const App = () => {
  // const [tabBarValue, setTabBarValue] = React.useState(0);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RoutesGame />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
