import { createTheme, styled } from "@mui/material/styles";

import React from "react";
import AtomRouteLink from "../atoms/AtomRouteLink";
import AtomTabs from "../atoms/AtomTabs";
import dataRoutes from "../../routesGame/dataRoutes";

const Tab = styled(AtomRouteLink)(
  //   (theme) => ({
  //   textDecoration: "none",
  //   marginLeft: theme.spacing(2),
  //   fontFamily: "Oswald",
  //   color: theme.palette.text.secondary,
  //   "&:hover": {
  //     color: "#2AC0FF",
  //   },
  // }));
  ({ theme }) => `
  textDecoration: "none";
    marginLeft: ${theme.spacing(2)};
    fontFamily: "Oswald";
    color: ${theme.palette.text.secondary};
    "&:hover": {
      color: "#2AC0FF";
    },
`
);

// color: theme.status.white,

const Tabs = styled(AtomTabs)({
  alignItems: "center",
});

const MenuTab = () => {
  let activeStyle = {
    color: "#2AC0FF",
  };
  return (
    <Tabs>
      {dataRoutes.map((route, index) => {
        return (
          <Tab
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            key={index}
            to={route.path}
          >
            {route.name}
          </Tab>
        );
      })}
    </Tabs>
  );
};

export default MenuTab;
