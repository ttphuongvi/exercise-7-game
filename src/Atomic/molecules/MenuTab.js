import { styled } from "@mui/material/styles";
import React from "react";
import AtomRouteLink from "../atoms/AtomRouteLink";
import AtomTabs from "../atoms/AtomTabs";
import dataRoutes from "../../routesGame/dataRoutes";

const Tab = styled(AtomRouteLink)(
  ({ theme }) => `
  text-decoration: none;
    margin-left: ${theme.spacing(2)};
    font-family: "Oswald";
    color: ${theme.palette.text.primary};
    :hover {
      color: ${theme.palette.primary.main};
    },
`
);

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
