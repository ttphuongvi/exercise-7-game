import { alpha, styled } from "@mui/material/styles";
import React from "react";
import AtomRouteLink from "../atoms/AtomRouteLink";
import AtomTabs from "../atoms/AtomTabs";
import AtomTab from "../atoms/AtomTab";
import dataRoutes from "../../routesGame/dataRoutes";
import AtomGrid from "../atoms/AtomGrid";
import AtomButton from "../atoms/AtomButton";
import { useLocation, useNavigate } from "react-router-dom";

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
  let navigate = useNavigate();

  const location = useLocation();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // let activeStyle = {
  //   color: "#2AC0FF",
  // };
  return (
    // <AtomGrid>
    //   {dataRoutes.map((route, index) => {
    //     console.log(location.pathname === route.path);
    //     console.log(route.path);
    //     console.log(location.pathname);
    //     return (
    //       <AtomButton
    //         // color={location.pathname === route.path ? "primary" : "secondary"}
    //         color="primary"
    //         sx={(theme) => ({
    //           fontFamily: theme.typography.subtitle1.fontFamily,
    //           color: theme.palette.text.primary,
    //           "&:hover": {
    //             backgroundColor: alpha(theme.palette.primary.main, 0.1),
    //             color: theme.palette.primary.main,
    //           },
    //           "&.active": {
    //             color: theme.palette.primary.main,
    //           },
    //         })}
    //         onClick={() => {
    //           navigate(`${route.path}`);
    //         }}
    //         // component={AtomRouteLink}
    //         // style={({ isActive }) =>
    //         //   isActive ? { color: "#2AC0FF" } : undefined
    //         // }
    //         key={index}
    //         to={route.path}
    //       >
    //         {route.name}
    //       </AtomButton>
    //     );
    //   })}
    // </AtomGrid>
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
