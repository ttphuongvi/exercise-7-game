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
import { useSelector } from "react-redux";
import { alpha, styled } from "@mui/material/styles";

import AtomRouteLink from "../atoms/AtomRouteLink";
import AtomListItemIcon from "../atoms/AtomListItemIcon";
import AtomIconLogin from "../atoms/AtomIconLogin";
import AtomIconCreate from "../atoms/AtomIconCreate";
import { AppContext } from "../../context/context";

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

  const ListItemText = styled(AtomListItemText)(({ theme }) => ({
    fontFamily: theme.typography.titleGame.fontFamily,
    fontSize: theme.typography.body2.fontSize,
    textTransform: "uppercase",
    padding: theme.spacing(1, 0, 1, 1),
    "&.active .MuiTypography-root": {
      // color: theme.palette.primary.main,
    },
  }));

  const ListItemIcon = styled(AtomListItemIcon)(({ theme }) => ({
    color: theme.palette.text.primary,
  }));

  const ListItemButton = styled(AtomListItemButton)(({ theme }) => ({
    "&.active": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
    "&.active:hover": {
      backgroundColor: alpha(theme.palette.primary.main, 0.8),
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
    "&:hover": {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      color: theme.palette.primary.main,
      "& .MuiListItemIcon-root": {
        color: theme.palette.primary.main,
      },
    },
  }));

  const { handleLogin, hanleSignUp } = React.useContext(AppContext);

  const user = useSelector((state) => state.user.content);

  const location = useLocation();
  const drawer = (
    <div>
      <AtomToolBar />
      <AtomDivider />
      <AtomList component="nav">
        {dataRoutes.map((route, indexRoute) => (
          <div key={indexRoute}>
            <ListItemButton
              component={AtomRouteLink}
              to={route.path}
              selected={location.pathname === route.path}
            >
              <ListItemIcon disabled>{route.icon}</ListItemIcon>
              <ListItemText
                disableTypography
                primary={route.name}
              ></ListItemText>
            </ListItemButton>
          </div>
        ))}
        {user && user.isLogin ? (
          <></>
        ) : (
          <>
            <ListItemButton
              onClick={() => {
                handleLogin(true);
              }}
              sx={{
                display: { xs: "flex", md: "flex", lg: "none" },
              }}
            >
              <ListItemIcon disabled>
                <AtomIconLogin />
              </ListItemIcon>
              <ListItemText disableTypography> Đăng nhập</ListItemText>
            </ListItemButton>
            {/* <DialogLogin /> */}
            <ListItemButton
              onClick={() => {
                hanleSignUp(true);
              }}
              sx={{
                display: { xs: "flex", md: "flex", lg: "none" },
              }}
            >
              <ListItemIcon disabled>
                <AtomIconCreate />
              </ListItemIcon>
              <ListItemText disableTypography>Đăng ký</ListItemText>
            </ListItemButton>
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
