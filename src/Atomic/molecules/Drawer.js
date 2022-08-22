import React from "react";
import AtomDrawer from "../atoms/AtomDrawer";
import AtomList from "../atoms/AtomList";
import AtomListItemButton from "../atoms/AtomListItemButton";
import AtomListItemText from "../atoms/AtomListItemText";
import AtomToolBar from "../atoms/AtomToolbar";
import AtomBox from "../atoms/AtomBox";
import dataRoutes from "../../routesGame/dataRoutes";
import { useLocation } from "react-router-dom";
import AtomDivider from "../atoms/AtomDivider";
import DialogLogin from "./DialogMaxWidth/DialogLogin";
import DialogSignUp from "./DialogMaxWidth/DialogSignUp";
import { useSelector } from "react-redux";
import { alpha } from "@mui/material";
import AtomRouteLink from "../atoms/AtomRouteLink";
import AtomListItemIcon from "../atoms/AtomListItemIcon";
import AtomIconLogin from "../atoms/AtomIconLogin";
import AtomIconCreate from "../atoms/AtomIconCreate";

const drawerWidth = 240;

const Drawer = (props) => {
  const { window } = props;
  // let navigate = useNavigate();

  // const [openState, setOpenState] = React.useState([
  //   { open: false },
  //   { open: false },
  //   { open: false },
  // ]);

  // const handleClick = (index, value) => {
  //   const newOpenState = [...openState];
  //   newOpenState[index].open = value;
  //   setOpenState(newOpenState);
  // };

  const user = useSelector((state) => state.user.content);

  const location = useLocation();
  const drawer = (
    <div>
      <AtomToolBar />
      <AtomDivider />
      <AtomList component="nav">
        {dataRoutes.map((route, indexRoute) => (
          <div key={indexRoute}>
            <AtomListItemButton
              component={AtomRouteLink}
              // onClick={() => {
              //   navigate(`${route.path}`);
              //   // handleClick(indexRoute, !openState[indexRoute].open);
              // }}
              to={route.path}
              sx={(theme) => ({
                "&:hover": {
                  backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  color: theme.palette.primary.main,
                },
                "&.active": {
                  color: theme.palette.primary.main,
                },
              })}
              selected={location.pathname === route.path}
            >
              <AtomListItemIcon
                disabled
                sx={(theme) => ({
                  color: theme.palette.text.primary,
                  // "&:hover": {
                  //   color: theme.palette.primary.main,
                  // },

                  "&.MuiListItemIcon-root": {
                    "&.Mui-focusVisible": {
                      color: theme.palette.primary.main,
                    },
                  },
                })}
                selected={location.pathname === route.path}
              >
                {route.icon}
              </AtomListItemIcon>
              <AtomListItemText
                sx={(theme) => ({
                  fontFamily: theme.typography.titleGame.fontFamily,
                  fontSize: theme.typography.body2.fontSize,
                  textTransform: "uppercase",
                  padding: theme.spacing(1, 0, 1, 1),
                  "&.active .MuiTypography-root": {
                    // color: theme.palette.primary.main,
                  },
                })}
                disableTypography
                primary={route.name}
              ></AtomListItemText>
            </AtomListItemButton>
          </div>
        ))}
        {user && user.isLogin ? (
          <></>
        ) : (
          <>
            <AtomListItemButton
              sx={(theme) => ({
                display: { xs: "flex", md: "flex", lg: "none" },
                "&:hover": {
                  backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  color: theme.palette.primary.main,
                },
                "&.active": {
                  color: theme.palette.primary.main,
                },
              })}
            >
              <AtomListItemIcon
                sx={(theme) => ({
                  color: theme.palette.text.primary,
                  "&.active": {
                    color: theme.palette.primary.main,
                  },
                })}
              >
                <AtomIconLogin />
              </AtomListItemIcon>
              <AtomListItemText>
                {" "}
                <DialogLogin />
              </AtomListItemText>
            </AtomListItemButton>
            <AtomListItemButton
              sx={(theme) => ({
                display: { xs: "flex", md: "flex", lg: "none" },
                "&:hover": {
                  backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  color: theme.palette.primary.main,
                },
                "&.active": {
                  color: theme.palette.primary.main,
                },
              })}
            >
              <AtomListItemIcon
                sx={(theme) => ({
                  color: theme.palette.text.primary,
                  "&.active": {
                    color: theme.palette.primary.main,
                  },
                })}
              >
                <AtomIconCreate />
              </AtomListItemIcon>
              <AtomListItemText>
                <DialogSignUp />
              </AtomListItemText>
            </AtomListItemButton>
          </>
        )}
      </AtomList>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <AtomBox
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      aria-label="mailbox folders"
    >
      <AtomDrawer
        container={container}
        variant="temporary"
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </AtomDrawer>
      <AtomDrawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </AtomDrawer>
    </AtomBox>
  );
};

export default Drawer;
