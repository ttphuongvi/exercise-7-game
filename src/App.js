import React from "react";
import RoutesGame from "./router/index";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./redux/reducers";
const store = configureStore({ reducer: reducers });
const App = () => {
  // const [tabBarValue, setTabBarValue] = React.useState(0);
  return (
    <Provider store={store}>
      {/* // <TabBarContext.Provider value={{ tabBarValue, setTabBarValue }}> */}
      <RoutesGame />
      {/* // </TabBarContext.Provider> */}
    </Provider>
  );
};

export default App;
