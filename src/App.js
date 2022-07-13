import React from "react";
import RoutesGame from "./routesGame/index";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./store/reducers";
import { ThemeProvider } from "styled-components";
const store = configureStore({ reducer: reducers });
const App = () => {
  // const [tabBarValue, setTabBarValue] = React.useState(0);
  return (
    <Provider store={store}>
      <ThemeProvider theme={{}}>
        {/* // <TabBarContext.Provider value={{ tabBarValue, setTabBarValue }}> */}
        <RoutesGame />
        {/* // </TabBarContext.Provider> */}
      </ThemeProvider>
    </Provider>
  );
};

export default App;
