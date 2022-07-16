import { createTheme, makeStyles, styled } from "@material-ui/core/styles";
import React from "react";
import AtomRouteLink from "../atoms/AtomRouteLink";
import AtomTabs from "../atoms/AtomTabs";
import dataRoutes from "../../routesGame/dataRoutes";
const theme = createTheme();

const Tab = styled(AtomRouteLink)({
  textDecoration: "none",
  marginLeft: theme.spacing(2),
  fontFamily: "Oswald",
  // color: theme.status.white,
});

const Tabs = styled(AtomTabs)({
  alignItems: "center",
});
const useStyles = makeStyles((theme) => ({
  tab: {
    color: theme.status.white,
    "&:hover": {
      color: theme.status.blue,
    },
  },
}));

const MenuTab = () => {
  const classes = useStyles();

  let activeStyle = {
    color: "#2AC0FF",
  };
  return (
    <Tabs>
      {dataRoutes.map((route, index) => {
        return (
          <Tab
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={classes.tab}
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
