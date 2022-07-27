import { alpha } from "@mui/material/styles";
import React from "react";
import AtomRouteLink from "../atoms/AtomRouteLink";
import dataRoutes from "../../routesGame/dataRoutes";
import AtomGrid from "../atoms/AtomGrid";
import AtomButton from "../atoms/AtomButton";
import { useLocation, useNavigate } from "react-router-dom";

const MenuTab = () => {
  let navigate = useNavigate();

  const location = useLocation();

  return (
    <AtomGrid>
      {dataRoutes.map((route, index) => {
        console.log(location.pathname === route.path);
        console.log(route.path);
        console.log(location.pathname);
        return (
          <AtomButton
            sx={(theme) => ({
              fontFamily: theme.typography.titleGame.fontFamily,
              color: theme.palette.text.primary,
              "&:hover": {
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                color: theme.palette.primary.main,
              },
              "&.active": {
                color: theme.palette.primary.main,
              },
            })}
            onClick={() => {
              navigate(`${route.path}`);
            }}
            component={AtomRouteLink}
            key={index}
            to={route.path}
          >
            {route.name}
          </AtomButton>
        );
      })}
    </AtomGrid>
    // <AtomTabs value={value} onChange={handleChange}>
    //   {dataRoutes.map((route, index) => {
    //     return (
    //       <TabStyles
    //         component={AtomRouteLink}
    //         // style={({ isActive }) => (isActive ? activeStyle : undefined)}
    //         key={index}
    //         to={route.path}
    //         label={route.name}
    //         value={index}
    //       >
    //         {/* {route.name} */}
    //       </TabStyles>
    //     );
    //   })}
    // </AtomTabs>
  );
};

export default MenuTab;
