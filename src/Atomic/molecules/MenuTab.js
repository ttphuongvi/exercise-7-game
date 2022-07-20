import { styled } from "@mui/material/styles";
import React from "react";
import AtomRouteLink from "../atoms/AtomRouteLink";
import AtomTabs from "../atoms/AtomTabs";
import dataRoutes from "../../routesGame/dataRoutes";

const Link = styled(AtomRouteLink)(
  ({ theme }) => `
  text-decoration: none;
    margin-left: ${theme.spacing(2)};
    font-family: ${theme.typography.subtitle1.fontFamily};
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
          <Link
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            key={index}
            to={route.path}
          >
            {route.name}
          </Link>
        );
      })}
    </Tabs>
  );
};

export default MenuTab;
