import { styled } from "@mui/material/styles";
import React from "react";
import AtomRouteLink from "../atoms/AtomRouteLink";
import AtomTabs from "../atoms/AtomTabs";
import AtomTab from "../atoms/AtomTab";
import dataRoutes from "../../routesGame/dataRoutes";

const TabStyles = styled(AtomTab)(
  ({ theme }) => `
    text-decoration: none;
    font-family: ${theme.typography.subtitle1.fontFamily};
    color: ${theme.palette.text.primary};
    :hover {
      color: ${theme.palette.primary.main};
    },
`
);

const MenuTab = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // let activeStyle = {
  //   color: "#2AC0FF",
  // };
  return (
    <AtomTabs value={value} onChange={handleChange}>
      {dataRoutes.map((route, index) => {
        return (
          <TabStyles
            component={AtomRouteLink}
            // style={({ isActive }) => (isActive ? activeStyle : undefined)}
            key={index}
            to={route.path}
            label={route.name}
            value={index}
          >
            {/* {route.name} */}
          </TabStyles>
        );
      })}
    </AtomTabs>
  );
};

export default MenuTab;
