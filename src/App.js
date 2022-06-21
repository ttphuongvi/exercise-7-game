import React from "react";
import RoutesGame from "./router/index";
import { TabBarContext } from "./context/TabBarContext";
const App = () => {
  const [tabBarValue, setTabBarValue] = React.useState(0);
  return (
    <TabBarContext.Provider value={{ tabBarValue, setTabBarValue }}>
      <RoutesGame />
    </TabBarContext.Provider>
  );
};

export default App;
